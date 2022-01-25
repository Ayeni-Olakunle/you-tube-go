import React from "react";
import Body from "../Body/Body";
import "../../asset/TopHeader.css";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";

export default function TopHeader() {
  // const
  return (
    <div>
      <div className="holdAll">
        <div className="holdTop">
          <div className="holdSecond">
            <div className="goImage"></div>
            <span className="goClass">GO</span>
          </div>
          <div className="holdSecond">
            <Link to={`/SeachMeNow`}>
              <AiOutlineSearch className="searchIcon" />
            </Link>
            <Link to={`/Account`}>
              <BsPersonFill className="accountIcon" />
            </Link>
          </div>
        </div>
      </div>
      <Body />
    </div>
  );
}
