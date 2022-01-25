import React from "react";
import { FaTrash } from "react-icons/fa";
import Account from "../TopAccount/Layout1";
export default function Storage() {
  const styleMe = {
    height: "21px",
    width: "29px",
    verticalAlign: "middle",
    marginRight: "20px",
  };
  return (
    <div>
      <Account title="Storage" />
      <div>
        <h4 className="StorageLocation">Storage Location</h4>
        <div className="twoStorage">
          <div>
            <input
              type="radio"
              name="storage"
              value="value"
              checked
              style={{ styleMe }}
            />
          </div>
          <div
            style={{
              padding: "10px 20px",
              width: "100%",
              textAlign: "left",
              fontSize: "14px",
              color: "#424242",
            }}
          >
            <p style={{ marginBottom: "5px" }}>Phone</p>
            <div className="progressBar">
              <div className="progressBar2"></div>
            </div>
            <p style={{ margin: 0 }}>
              35.5GB used <br />
              24.8GB available
            </p>
          </div>
        </div>

        <div className="twoStorage">
          <div>
            <input
              type="radio"
              name="storage"
              value="value"
              style={{ styleMe }}
            />
          </div>
          <div
            style={{
              padding: "10px 20px",
              width: "100%",
              textAlign: "left",
              fontSize: "14px",
              color: "#424242",
            }}
          >
            <p style={{ marginBottom: "5px" }}>SD card</p>
            <div className="progressBar">
              <div className="progressBar3"></div>
            </div>
            <p style={{ margin: 0 }}>
              12GB used <br />
              18.8GB available
            </p>
          </div>
        </div>

        <h4 className="StorageLocation">Manage Storage</h4>
        <div className="twoStorage">
          <div>
            <FaTrash />
          </div>
          <div
            style={{
              padding: "10px 20px",
              width: "100%",
              textAlign: "left",
              fontSize: "14px",
              color: "#424242",
            }}
          >
            <p style={{ margin: 0 }}>Delete all YouTube Go videos?</p>
          </div>
        </div>
      </div>
    </div>
  );
}
