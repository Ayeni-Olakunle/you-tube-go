import React from "react";
import Layout1 from "./TopAccount/Layout1";
import AccDetail from "./TopAccount/AccountDetails";

export default function Account() {
  return (
    <div>
      <Layout1 title="Account" />
      <AccDetail />
    </div>
  );
}
