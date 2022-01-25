import React from "react";
import { useNavigate } from "react-router-dom";
import { HiHome } from "react-icons/hi";

export default function Language() {
  const navigate = useNavigate();
  const listLang = [
    "Spanish",
    "Arabic",
    "Bengali",
    "Hindi",
    "Russian",
    "Portuguese",
    "Japanese",
    "German",
    "Chinese",
    "Javanese",
    "Korean",
    "French",
    "Turkish",
    "Vietnamese",
    "Telugu",
    "Marathi",
    "Hausa",
    "Burmese",
    "Serbo-Croatian",
    "Chinese, Gan",
    "Awadhi",
    "Thai",
    "Dutch",
    "Yoruba",
    "Sindhi",
    "Tamil",
    " Italian",
    "Urdu",
    "Chinese, Min Nan",
    "Chinese, Jinyu",
    "Gujarati",
    "Polish",
    "Ukrainian",
    "Persian",
    "Chinese, Xiang",
    "Malayalam",
    "Chinese, Hakka",
    "Kannada",
    "Oriya",
    "Panjabi, Western",
    "Sunda",
    "Panjabi, Eastern",
    "Romanian",
    "Bhojpuri",
    "Azerbaijani, South",
  ];
  return (
    <div id="holdLoop">
      <h5 className="suggest">suggested</h5>;
      {listLang.map((listLang) => {
        return (
          <div key={listLang}>
            <div className="holdLag">
              <div className="languageSelect">
                <div className="homeIcon">
                  <div>
                    <HiHome className="hiHomeIcon" />
                  </div>
                  <div>
                    <span>{listLang}</span>
                  </div>
                </div>
                <div>
                  <button
                    className="select"
                    onClick={() => {
                      alert(
                        listLang + " Language is not supported in your country"
                      );
                      navigate(-1);
                    }}
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
