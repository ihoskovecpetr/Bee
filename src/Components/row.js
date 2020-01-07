import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";

import { format } from "timeago.js";

import { useText } from "../Hooks/useText";

export default function BodyRow(props) {
  const translate = useText();
  const classes = useStyles();
  const [choosen, setChoosen] = useState(false);
  const [name, setName] = useState();
  const [running, setRunning] = useState();

  //console.log("ROW print");

  useEffect(() => {
    setName(props.row.name);
    setRunning(props.row.adwords_status);
  }, [props.row.name, props.row.adwords_status]);

  const changeData = (name, value) => {
    let stringStatus = props.row.adwords_status;

    switch (name) {
      case "status":
        if (value === "running") {
          stringStatus = "paused";
        }
        if (value === "paused") {
          stringStatus = "running";
        }
        setRunning(stringStatus);
        break;
      case "name":
        setName(value);
        break;
      default:
        console.log("Default Case switch");
    }
  };

  const update = () => {
    let Arr = [...props.state];
    Arr[props.index] = {
      id: props.row.id,
      name: name,
      campaign_name: props.row.campaign_name,
      adgroup_name: props.row.adgroup_name,
      created_at: props.row.created_at,
      updated_at: props.row.updated_at,
      type: props.row.type,
      adwords_status: running,
      items_count: props.row.items_count
    };
    props.setState(Arr);
    console.log("UPDATED");
  };

  const printRunning = () => {
    return (
      <FormControlLabel
        control={
          <Switch
            checked={running === "running" ? true : false}
            onChange={() => {
              changeData("status", running);
            }}
            disabled={choosen ? false : true}
            value="status"
          />
        }
        label={running}
      />
    );
  };

  const print_td = row => {
    let rowPrint = [
      <td key={row.id + "1"}>
        <EditIcon
          onClick={() => {
            if (choosen) {
              setChoosen(!choosen);
              update();
            } else {
              setChoosen(!choosen);
            }
          }}
          className={classes.blue}
        />
      </td>
    ];
    for (var k in row) {
      if (props.activeCol.indexOf(k) >= 0) {
        switch (k) {
          case "created_at":
          case "updated_at":
            rowPrint.push(<td key={row.id + k}>{format(new Date(row[k]))}</td>);
            break;
          case "name":
            rowPrint.push(
              <td key={row.id + k} className={classes.wideTd}>
                <Tooltip title={row[k]}>
                  <TextField
                    defaultValue={row[k]}
                    disabled={choosen ? false : true}
                    onChange={e => changeData("name", e.target.value)}
                  />
                </Tooltip>
              </td>
            );
            break;
          case "adwords_status":
            rowPrint.push(<td key={row.id + k}>{printRunning(row[k])}</td>);
            break;
          case "campaign_name":
            rowPrint.push(
              <td key={row.id + k} style={{ minWidth: "150px" }}>
                {translate(row[k])}
              </td>
            );
            break;
          default:
            rowPrint.push(<td key={row.id + k}>{translate(row[k])}</td>);
        }
      }
    }
    return rowPrint;
  };

  return (
    <tr className={choosen ? classes.choosenRow : ""}>{print_td(props.row)}</tr>
  );
}

const useStyles = makeStyles(theme => ({
  "@global": {
    tbody: {
      color: "green"
    },
    td: {
      border: "1px solid #ddd",
      padding: "8px",
      margin: 0
    }
  },
  choosenRow: {
    background: "lightBlue !important",
    color: "black"
  },
  blue: {
    color: "blue"
  },
  wideTd: {
    minWidth: "150px"
  }
}));
