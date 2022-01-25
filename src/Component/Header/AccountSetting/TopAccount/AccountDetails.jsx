import React from "react";
import "../../../../asset/TopHeader.css";
import { Link } from "react-router-dom";
import AccountSetMe from "./AccountSetMe";
import { RiLoginBoxLine } from "react-icons/ri";
import { MdLanguage, MdHealthAndSafety } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { GiBackwardTime } from "react-icons/gi";
import { BiMemoryCard, BiStats } from "react-icons/bi";
import {
  BsFillQuestionCircleFill,
  BsPlayCircle,
  BsPersonFill,
  BsStars,
  BsFillExclamationCircleFill,
} from "react-icons/bs";

export default function AccDetail() {
  return (
    <div>
      <div className="accDetaill">
        <div>
          <BsPersonFill className="accountIconDetail" />
        </div>
        <div className="holdText">
          <p className="accDetaillText">Your Name</p>
          <p className="accDetaillText">Your Email</p>
          <a
            href="https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="accDetaillText">Manage your Google Account</p>
          </a>
        </div>
      </div>
      <div className="accSetMe">
        <h4 className="accountHeader">App</h4>
        <Link to={`/UpdateLink`} className="LinkNav">
          <AccountSetMe iconName={<RiLoginBoxLine />} title="Update App" />
        </Link>
        <Link to={`/Language`} className="LinkNav">
          <AccountSetMe iconName={<MdLanguage />} title="Language" />
        </Link>
        <AccountSetMe
          iconName={<MdHealthAndSafety />}
          title={"Restricted mode"}
          des="This helps screen out potentially mature video, but remember that no filter is 100% accurate"
          bull={true}
        />
        <Link to={`/HelpANdFeedBack`} className="LinkNav">
          <AccountSetMe
            iconName={<BsFillQuestionCircleFill />}
            title="Help & Feedback"
          />
        </Link>
      </div>

      <div className="accSetMe">
        <h4 className="accountHeader">Autoplay</h4>
        <AccountSetMe
          iconName={<BsPlayCircle />}
          title="Autoplay next video"
          des="When you finish a video, another automatically"
          bull={true}
        />
      </div>

      <div className="accSetMe">
        <h4 className="accountHeader">Video storage</h4>
        <Link to={`/Storage`} className="LinkNav">
          <AccountSetMe
            iconName={<BiMemoryCard />}
            title="Phone"
            des="43.5GB used / 24.8GB available"
          />
        </Link>
      </div>

      <div className="accSetMe">
        <h4 className="accountHeader">Notifications</h4>
        <AccountSetMe
          iconName={<BsStars />}
          title="Recommended videos"
          des="Notify me of videos based on what i watch, as well as new from channels I'm subscribed to"
          bull={true}
        />
        <AccountSetMe
          iconName={<IoMdNotifications />}
          title="Channel setting"
          des="Tap here to manage notification settings for each subscribed"
        />
      </div>

      <div className="accSetMe">
        <h4 className="accountHeader">Help & Privacy</h4>
        <Link to={`/ManageHistory`} className="LinkNav">
          <AccountSetMe iconName={<GiBackwardTime />} title="Manage history" />
        </Link>
      </div>

      <div className="accSetMe">
        <h4 className="accountHeader">Advanced</h4>
        <AccountSetMe
          iconName={<BiStats />}
          title="Enable stats for nerds"
          bull={true}
        />
        <Link to={`/About`} className="LinkNav">
          <AccountSetMe
            iconName={<BsFillExclamationCircleFill />}
            title="About"
          />
        </Link>
      </div>
      <div>
        <p
          style={{
            margin: 0,
            fontSize: "10px",
            color: "#828282",
            paddingTop: "50px",
            paddingBottom: "10px",
          }}
        >
          Privacy Policy . Terms of Service
        </p>
      </div>
    </div>
  );
}
