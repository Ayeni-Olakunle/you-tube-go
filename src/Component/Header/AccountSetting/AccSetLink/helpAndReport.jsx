import React from "react";
import { useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GrFormClose, GrSearch } from "react-icons/gr";
import { HiMenuAlt2 } from "react-icons/hi";
import { BiMessageAltError } from "react-icons/bi";
import "../../../../asset/TopHeader.css";

export default function HelpANdFeedBack() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="support">
        <GrFormClose
          style={{ fontSize: "25px", cursor: "pointer" }}
          onClick={() => {
            navigate(-1);
          }}
        />
        <h3>Support</h3>
        <BsThreeDotsVertical style={{ fontSize: "22px" }} />
      </div>
      <div className="firstHold">
        <div className="secondHold">
          <GrSearch className="searchHelp" />
          <input
            type="text"
            className="inputDescribe"
            placeholder="Describe your issuse"
          />
        </div>
      </div>
      <div>
        <h4 className="popularArt">Popular article</h4>
        <div className="helpBar">
          <div>
            <HiMenuAlt2 className="HFBar" />
          </div>
          <p style={{ margin: 0, textAlign: "left", fontSize: "15px" }}>
            Download Video
          </p>
        </div>
        <div className="helpBar">
          <div>
            <HiMenuAlt2 className="HFBar" />
          </div>
          <p style={{ margin: 0, textAlign: "left", fontSize: "15px" }}>
            Download YouTube Go Videos to an SD card
          </p>
        </div>
        <div className="helpBar">
          <div>
            <HiMenuAlt2 className="HFBar" />
          </div>
          <p style={{ margin: 0, textAlign: "left", fontSize: "15px" }}>
            Get started video in YouTube Go - YouTube Go Help
          </p>
        </div>
        <div className="helpBar">
          <div>
            <HiMenuAlt2 className="HFBar" />
          </div>
          <p style={{ margin: 0, textAlign: "left", fontSize: "15px" }}>
            Watch YouTube Go videos offline FAQs
          </p>
        </div>
      </div>
      <div style={{ padding: "0 20px" }}>
        <div className="browser">
          <p>Browse all article</p>
        </div>
      </div>
      <div style={{ padding: "0 20px" }}>
        <div className="browser browser2">
          <div>
            <BiMessageAltError
              style={{ marginRight: "15px", fontSize: "23px" }}
            />
          </div>
          <p>Browse all article</p>
        </div>
      </div>
    </div>
  );
}
