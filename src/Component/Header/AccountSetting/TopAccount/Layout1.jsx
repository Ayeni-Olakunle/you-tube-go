import React from "react";
import "../../../../asset/TopHeader.css";
import BackMeNow from "../../../../Component/Back";

export default function Account(props) {
  return (
    <div className="HoldTopLayout1">
      <div className="HoldBackA">
        <div>
          <BackMeNow />
        </div>
        <div>
          <span className="account">{props.title}</span>
        </div>
      </div>
    </div>
  );
}
