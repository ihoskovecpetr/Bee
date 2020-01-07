import React, { useState } from "react";

import "./App.css";

import Table from "./Components/table";

export default function MaterialTableDemo() {
  const [state, setState] = useState([
    {
      id: 91,
      name: "zkouska odebirani dat",
      campaign_name: "zkouska odebirani dat",
      adgroup_name: "_product_id_",
      created_at: "2019-10-17T11:20:52.607+02:00",
      updated_at: "2019-11-28T16:51:56.399+01:00",
      type: "SearchCampaign",
      adwords_status: "running",
      items_count: 73
    },
    {
      id: 103,
      name: "Smart display kampaň #6",
      campaign_name: "Smart display kampaň #6",
      adgroup_name: "_product_id_",
      created_at: "2019-11-14T11:37:05.834+01:00",
      updated_at: "2019-11-14T11:37:06.127+01:00",
      type: "SmartDisplayCampaign",
      adwords_status: "running",
      items_count: 64
    },
    {
      id: 110,
      name: "super duper kampanka",
      campaign_name: "super duper kampanka",
      adgroup_name: "_product_id_",
      created_at: "2019-11-19T15:42:07.878+01:00",
      updated_at: "2019-11-19T15:47:02.199+01:00",
      type: "SmartDisplayCampaign",
      adwords_status: "running",
      items_count: 280
    },
    {
      id: 92,
      name: "zkouska odebirani dat original",
      campaign_name: "_nazev_kamapne_",
      adgroup_name: "_product_id_",
      created_at: "2019-10-17T11:25:36.069+02:00",
      updated_at: "2019-11-28T16:00:48.170+01:00",
      type: "SearchCampaign",
      adwords_status: "running",
      items_count: 4
    },
    {
      id: 104,
      name: "Smart display kampaň #7",
      campaign_name: "Smart display kampaň #7",
      adgroup_name: "_product_id_",
      created_at: "2019-11-14T11:40:14.360+01:00",
      updated_at: "2019-11-14T16:13:54.226+01:00",
      type: "SmartDisplayCampaign",
      adwords_status: "running",
      items_count: 341
    },
    {
      id: 97,
      name: "Produktová kampaň #10",
      campaign_name: "Produktová kampaň #10",
      adgroup_name: "_product_id_",
      created_at: "2019-11-06T12:25:33.317+01:00",
      updated_at: "2019-11-06T12:25:33.317+01:00",
      type: "SearchCampaign",
      adwords_status: "running",
      items_count: 279
    },
    {
      id: 89,
      name: "Search Kampan + DSA 2",
      campaign_name: "Search Kampan + RSA 2",
      adgroup_name: "_product_id_",
      created_at: "2019-10-08T10:50:11.032+02:00",
      updated_at: "2019-10-15T12:49:02.439+02:00",
      type: "SearchCampaign",
      adwords_status: "running",
      items_count: 341
    },
    {
      id: 84,
      name: "Search Kampan",
      campaign_name: "Search Kampan",
      adgroup_name: "_product_id_",
      created_at: "2019-10-08T10:48:00.521+02:00",
      updated_at: "2019-10-25T14:20:27.243+02:00",
      type: "SearchCampaign",
      adwords_status: "running",
      items_count: 280
    },
    {
      id: 88,
      name: "Search Kampan 2",
      campaign_name: "Search Kampan 2",
      adgroup_name: "_product_id_",
      created_at: "2019-10-08T10:49:46.897+02:00",
      updated_at: "2019-10-08T10:49:46.897+02:00",
      type: "SearchCampaign",
      adwords_status: "running",
      items_count: 341
    },
    {
      id: 96,
      name: "sadas",
      campaign_name: "sadas",
      adgroup_name: "_product_id_",
      created_at: "2019-11-06T11:52:13.533+01:00",
      updated_at: "2019-11-06T11:52:13.533+01:00",
      type: "SearchCampaign",
      adwords_status: "running",
      items_count: 279
    },
    {
      id: 93,
      name: "zkouska odebirani dat 2",
      campaign_name: "_nazev_kamapne_",
      adgroup_name: "_product_id_",
      created_at: "2019-10-17T11:29:06.240+02:00",
      updated_at: "2019-11-28T16:00:37.513+01:00",
      type: "SearchCampaign",
      adwords_status: "running",
      items_count: 4
    },
    {
      id: 85,
      name: "Search Kampan + DSA",
      campaign_name: "Search Kampan + RSA",
      adgroup_name: "_product_id_",
      created_at: "2019-10-08T10:48:41.130+02:00",
      updated_at: "2019-10-08T10:50:01.329+02:00",
      type: "SearchCampaign",
      adwords_status: "running",
      items_count: 341
    },
    {
      id: 87,
      name: "DSA kampan 2",
      campaign_name: "DSA kampan 2",
      adgroup_name: "_product_id_",
      created_at: "2019-10-08T10:49:32.308+02:00",
      updated_at: "2019-11-27T23:31:32.142+01:00",
      type: "DSACampaign",
      adwords_status: "running",
      items_count: 341
    },
    {
      id: 94,
      name: "zkouska odebirani dat 3",
      campaign_name: "_nazev_kamapne_",
      adgroup_name: "_product_id_",
      created_at: "2019-10-17T11:39:28.017+02:00",
      updated_at: "2019-11-28T16:00:26.196+01:00",
      type: "SearchCampaign",
      adwords_status: "running",
      items_count: 4
    },
    {
      id: 98,
      name: "Smart display kampaň #1",
      campaign_name: "Smart display kampaň #1",
      adgroup_name: "_product_id_",
      created_at: "2019-11-11T10:21:02.897+01:00",
      updated_at: "2019-11-11T14:04:58.383+01:00",
      type: "SmartDisplayCampaign",
      adwords_status: "running",
      items_count: 64
    },
    {
      id: 112,
      name: "Produktová kampaň #12adsdsa",
      campaign_name: "Produktová kampaň #12adsdsa",
      adgroup_name: "_product_id_",
      created_at: "2019-11-28T16:20:09.088+01:00",
      updated_at: "2019-11-28T16:20:48.775+01:00",
      type: "SearchCampaign",
      adwords_status: "running",
      items_count: 341
    },
    {
      id: 105,
      name: "Produktová kampaň #11",
      campaign_name: "Produktová kampaň #11",
      adgroup_name: "_product_id_",
      created_at: "2019-11-15T09:58:18.848+01:00",
      updated_at: "2019-11-15T09:58:44.404+01:00",
      type: "SearchCampaign",
      adwords_status: "running",
      items_count: 341
    },
    {
      id: 99,
      name: "Smart display kampaň #2",
      campaign_name: "Smart display kampaň #2",
      adgroup_name: "_product_id_",
      created_at: "2019-11-11T15:54:18.576+01:00",
      updated_at: "2019-11-11T16:05:54.390+01:00",
      type: "SmartDisplayCampaign",
      adwords_status: "running",
      items_count: 64
    },
    {
      id: 106,
      name: "Smart display kampaň #3 dup",
      campaign_name: "Smart display kampaň #3 dup",
      adgroup_name: "_product_id_",
      created_at: "2019-11-15T11:03:29.583+01:00",
      updated_at: "2019-11-15T11:03:29.646+01:00",
      type: "SmartDisplayCampaign",
      adwords_status: "running",
      items_count: 64
    },
    {
      id: 113,
      name: "translation missing: cs.default_generator_name.dsa_campaign #2",
      campaign_name:
        "translation missing: cs.default_generator_name.dsa_campaign #2",
      adgroup_name: "_product_id_",
      created_at: "2019-11-28T16:49:55.286+01:00",
      updated_at: "2019-11-28T16:50:31.839+01:00",
      type: "DSACampaign",
      adwords_status: "running",
      items_count: 341
    },
    {
      id: 100,
      name: "Smart display kampaň #3",
      campaign_name: "Smart display kampaň #3",
      adgroup_name: "_product_id_",
      created_at: "2019-11-12T10:30:11.852+01:00",
      updated_at: "2019-11-15T13:05:26.101+01:00",
      type: "SmartDisplayCampaign",
      adwords_status: "running",
      items_count: 64
    },
    {
      id: 107,
      name: "super smartka",
      campaign_name: "",
      adgroup_name: "_product_id_",
      created_at: "2019-11-15T12:45:34.273+01:00",
      updated_at: "2019-11-15T12:49:11.012+01:00",
      type: "SmartDisplayCampaign",
      adwords_status: "running",
      items_count: 341
    },
    {
      id: 101,
      name: "Smart display kampaň #4",
      campaign_name: "Smart display kampaň #4",
      adgroup_name: "_product_id_",
      created_at: "2019-11-12T15:10:22.848+01:00",
      updated_at: "2019-11-14T11:36:22.322+01:00",
      type: "SmartDisplayCampaign",
      adwords_status: "running",
      items_count: 64
    },
    {
      id: 108,
      name: "smarkta 5",
      campaign_name: "smarkta 5",
      adgroup_name: "_product_id_",
      created_at: "2019-11-15T12:52:49.537+01:00",
      updated_at: "2019-11-15T15:22:43.137+01:00",
      type: "SmartDisplayCampaign",
      adwords_status: "running",
      items_count: 341
    },
    {
      id: 102,
      name: "Super duper kampanka",
      campaign_name: "",
      adgroup_name: "_product_id_",
      created_at: "2019-11-12T15:41:16.717+01:00",
      updated_at: "2019-11-12T15:42:39.908+01:00",
      type: "SmartDisplayCampaign",
      adwords_status: "running",
      items_count: 341
    },
    {
      id: 109,
      name: "Smart display kampaň #11",
      campaign_name: "Smart display kampaň #11",
      adgroup_name: "_product_id_",
      created_at: "2019-11-18T09:38:18.105+01:00",
      updated_at: "2019-11-22T12:04:30.754+01:00",
      type: "SmartDisplayCampaign",
      adwords_status: "running",
      items_count: 280
    }
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <Table state={state} setState={setState} />
      </header>
    </div>
  );
}
