import React from "react";

export default function Playing() {
  const vidoList = [
    "9c5d6eee734e4641a6e38ed1872e2c6e",
    "9da02d302d8b43fda96f95cdfc6847a5",
    "30ddbb5f682d4defbf1b5d42d4885f79",
    "cbec0da630244919a3b8d39c24e3c994",
    "f7edb4a9dc7f4261baff438c077f4f1f",
  ];
  return (
    <div>
      <div className="vimDo">
        <video className="vidkoko" autoPlay>
          <source src={require(`../../asset/videos/${vidoList[1]}.mp4`)} />
        </video>
      </div>
      <div>
        <p></p>
      </div>
    </div>
  );
}
