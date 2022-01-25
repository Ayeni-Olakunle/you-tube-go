import React from "react";
import "../../../../asset/TopHeader.css";
import Switch from "@material-ui/core/Switch";

export default function AccountSetMe(props) {
  return (
    <div className="appOption">
      <div className="appOptwo">{props.iconName}</div>
      <div className={props.bull ? "appOpText" : "appOpText cursor"}>
        <div>
          <span>{props.title}</span>
          <br />
          <span>{props.des}</span>
        </div>
        <div>{props.bull ? <Switch color="primary" size="small" /> : ""}</div>
      </div>
    </div>
  );
}
