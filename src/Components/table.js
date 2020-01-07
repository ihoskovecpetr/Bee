import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import CheckIcon from "@material-ui/icons/Check";

import { useText } from "../Hooks/useText";

import BodyRow from "./row";

export default function Table(props) {
  const translate = useText();
  const classes = useStyles();
  const allColum = [
    "id",
    "name",
    "campaign_name",
    "adgroup_name",
    "created_at",
    "updated_at",
    "type",
    "adwords_status",
    "items_count"
  ];
  const [idx, setIdx] = useState([1, 0, 2, 3, 4, 5, 6, 7, 8]);
  const [adding, setAdding] = useState(false);
  const [editable, setEditable] = useState(false);

  let activeCol = [];

  allColum.map((item, index) => {
    if (idx.indexOf(index) >= 0) {
      activeCol.push(item);
    }
  });

  const leftoverCol = allColum.filter(item => activeCol.indexOf(item) === -1);

  const handleAddCol = value => {
    setIdx(prev => [...prev, allColum.indexOf(value.target.value)]);
  };

  return (
    <table>
      <thead>
        <tr>
          <td>
            {editable ? (
              <CheckIcon
                onClick={() => setEditable(!editable)}
                className={classes.green}
              />
            ) : (
              <ClearIcon
                onClick={() => setEditable(!editable)}
                className={classes.red}
              />
            )}
          </td>

          {activeCol.map((item, index) => {
            return (
              <td
                key={index}
                onClick={() => {
                  if (editable) {
                    let leftover;
                    let originalIndex = allColum.indexOf(item);
                    leftover = idx.filter(item => {
                      return item !== originalIndex;
                    });
                    setIdx(prev => [...leftover]);
                  }
                }}
              >
                <Button>
                  {editable && <ClearIcon className={classes.red} />}
                  {translate(item)}
                </Button>
              </td>
            );
          })}
          {adding && (
            <td>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={handleAddCol}
              >
                {leftoverCol.map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {translate(item)}
                  </MenuItem>
                ))}
              </Select>
            </td>
          )}

          <td>
            {adding ? (
              <RemoveIcon
                className={classes.red}
                onClick={() => setAdding(!adding)}
              />
            ) : (
              <AddIcon
                className={classes.green}
                onClick={() => setAdding(!adding)}
              />
            )}
          </td>
        </tr>
      </thead>
      <tbody className={classes.base}>
        {props.state.map((row, index) => (
          <BodyRow
            key={index}
            row={row}
            index={index}
            activeCol={activeCol}
            state={props.state}
            setState={props.setState}
          />
        ))}
      </tbody>
    </table>
  );
}

const useStyles = makeStyles(theme => ({
  "@global": {
    tbody: {
      color: "#363636"
    },
    table: {
      "border-spacing": 0,
      backgroundColor: "rgba(255,255,255,1)",
      color: "black",
      borderCollapse: "collapse"
    }
  },
  base: {
    "& tr:nth-child(even)": {
      background: "#ededed"
    }
  },
  red: { color: "red" },
  green: { color: "green" },
  blue: { color: "blue" }
}));
