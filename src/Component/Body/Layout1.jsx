import React, { useState } from "react";
import "../../asset/body.css";
import { Dropdown, Modal, Button, Collapse, Form } from "react-bootstrap";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineArrowDropDown, MdDownload } from "react-icons/md";
import { BiPlay } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Body(props) {
  const [posi, setPosi] = useState(0);
  const ListVid = ["vidPic1", "vidPic2", "vidPic3", "vidPic4", "vidPic5"];
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClose = () => setShow(false);
  return (
    <div>
      {ListVid.map((ListVids, el) => {
        return (
          <div className="holdAllVideo" key={ListVids}>
            <div
              className="holdVideo"
              onClick={() => {
                setPosi(el);
                setShow(true);
              }}
            >
              <img
                className="videoStyle"
                src={require(`../../asset/Picture/${ListVids}.png`)}
                alt="Wrong src"
              />
            </div>
            <div className="videoShort">
              <div
                className="channelImage"
                onClick={() => {
                  setPosi(el);
                  setShow(true);
                }}
              >
                <img
                  className="channelImage"
                  src={require(`../../asset/Picture/${ListVids}.png`)}
                  alt="Wrong src"
                />
              </div>
              <div
                className="HoldVideoTitle"
                onClick={() => {
                  setPosi(el);
                  setShow(true);
                }}
              >
                <p className="videoTitle">sfvsd</p>
                <p className="videoTitle2">
                  asdcsdcsdc . 1.7m views . 4 years ago
                </p>
              </div>
              <div>
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    <BsThreeDotsVertical className="threeDot threeDot2" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Share</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Video Information
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Remove Video
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Report issue
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        );
      })}
      <Modal show={show} onHide={handleClose} animation={false} centered>
        <div className={!open ? "vidDisplay" : "vidDisplay2"}>
          <img
            className="videoStyle"
            src={require(`../../asset/Picture/${ListVid[posi]}.png`)}
            alt="Wrong src"
          />
        </div>
        <Modal.Body>
          <div>
            <div
              className="storageMe"
              aria-expanded={open}
              aria-controls="example-collapse-text"
              onClick={() => setOpen(!open)}
            >
              <span>24.8GB available</span>
              <MdOutlineArrowDropDown style={{ fontSize: "25px" }} />
            </div>
            <Collapse in={open}>
              <div id="example-collapse-text" style={{ padding: "1rem" }}>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </div>
            </Collapse>
            <div>
              <div
                style={{ padding: "1rem", borderTop: "1px solid lightgray" }}
              >
                <div className="dataSaver">
                  <Form.Check
                    type="radio"
                    label="Data saver"
                    aria-label="radio 1"
                    name="dataSaver"
                  />
                  <span>20.3 MB</span>
                </div>
                <div className="dataSaver">
                  <Form.Check
                    type="radio"
                    label="Standard quality"
                    aria-label="radio 1"
                    name="dataSaver"
                  />
                  <span>84.8 MB</span>
                </div>
                <div className="dataSaver">
                  <Form.Check
                    type="radio"
                    label="High quality"
                    name="dataSaver"
                    aria-label="radio 1"
                  />
                  <span>146 MB</span>
                </div>
              </div>
            </div>
            <div>
              <p className="anyVideo">
                Download to watch any time as long as you have <br /> occasonal
                internet connection
              </p>
            </div>
            <div className="holdPlayNDownloadButin">
              <div style={{ width: "50%" }}>
                <Link to={"/Playing"}>
                  <button className="downloadButin2">
                    <BiPlay style={{ fontSize: "20px", marginRight: "5px" }} />
                    Play
                  </button>
                </Link>
              </div>
              <div style={{ width: "50%", textAlign: "center" }}>
                <button className="downloadButin">
                  <MdDownload
                    style={{ fontSize: "20px", marginRight: "5px" }}
                  />
                  Download
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
}
