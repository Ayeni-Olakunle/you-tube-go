import React from "react";
import BackMeNow from "../../Back";
import "../../../asset/body.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiMicrophone } from "react-icons/bi";

export default function SearchMeNow() {
  return (
    <div className="HoldTopLayout1">
      <div className="HoldBackB">
        <div>
          <BackMeNow />
        </div>
        <div>
          <input
            type="text"
            placeholder="Search Vim YouTube"
            className="searchIpnt"
          />
        </div>
        <div>
          <BiMicrophone style={{ fontSize: "23px" }} />
        </div>
      </div>
    </div>
  );
}
