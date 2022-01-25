import React from "react";
import Switch from "@material-ui/core/Switch";
import Account from "../TopAccount/Layout1";
import { FaTrash } from "react-icons/fa";

export default function ManageHistory() {
  return (
    <div>
      <Account title="Manage History" />
      <div className="holdHistory">
        <p style={{ margin: 0 }}>Pause search history</p>
        <Switch color="primary" size="small" />
      </div>
      <div className="holdHistory">
        <p style={{ margin: 0 }}>Pause watch history</p>
        <Switch color="primary" size="small" />
      </div>
      <div className="holdHistory">
        <div style={{ textAlign: "left" }}>
          <p style={{ margin: 0 }}>Pause search history</p>
          <span style={{ fontSize: "12px", color: "#6f6f6f" }}>
            Delete this account's search history from all devices.
          </span>
        </div>
        <FaTrash style={{ color: "#646464" }} />
      </div>
      <div className="holdHistory">
        <div style={{ textAlign: "left" }}>
          <p style={{ margin: 0 }}>Pause search history</p>
          <span style={{ fontSize: "12px", color: "#6f6f6f" }}>
            Delete this account's watch history from all devices.
          </span>
        </div>
        <FaTrash style={{ color: "#646464" }} />
      </div>
      <div className="holdHistory">
        <div style={{ textAlign: "left" }}>
          <p style={{ margin: 0 }}>Pause all activity</p>
          <span style={{ fontSize: "12px", color: "#6f6f6f" }}>
            Received and delete item from your history.
          </span>
        </div>
      </div>
    </div>
  );
}
