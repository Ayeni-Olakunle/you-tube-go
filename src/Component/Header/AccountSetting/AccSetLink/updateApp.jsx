import React from "react";
import Layout1 from "../../AccountSetting/TopAccount/Layout1";

export default function UpdateLink() {
  return (
    <div>
      <Layout1 title="Update YouTube Go" />
      <div>
        <div className="updateImage"></div>
      </div>
      <div className="update">
        <p>No Update Require</p>
        <p>
          Version 3.25.54. you can find the latest version of
          <br />
          YouTube Go in the Google Play Store
        </p>
      </div>
    </div>
  );
}
