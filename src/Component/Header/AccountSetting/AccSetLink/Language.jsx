import React from "react";
import Language2 from "./Language2";
import { HiHome } from "react-icons/hi";

export default function Language(props) {
  return (
    <div>
      <div>
        <h5 className="suggest">suggested</h5>
        <div className="holdLag">
          <div className="languageSelect">
            <div className="homeIcon">
              <div>
                <HiHome className="hiHomeIcon" />
              </div>
              <div>
                <span>English</span>
              </div>
            </div>
            <div>
              <button className="select">Select</button>
            </div>
          </div>
        </div>
      </div>
      <Language2 />
    </div>
  );
}
