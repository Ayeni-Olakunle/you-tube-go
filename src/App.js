import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Topheader from "./Component/Header/header";
import Account from "./Component/Header/AccountSetting/accountSet";
import SeachMeNow from "./Component/Header/Search/search";
import UpdateLink from "./Component/Header/AccountSetting/AccSetLink/updateApp";
import Language from "./Component/Header/AccountSetting/AccSetLink/Language";
import HelpANdFeedBack from "./Component/Header/AccountSetting/AccSetLink/helpAndReport";
import Storage from "./Component/Header/AccountSetting/AccSetLink/Storage";
import ManageHistory from "./Component/Header/AccountSetting/AccSetLink/ManageHistory";
import About from "./Component/Header/AccountSetting/AccSetLink/About";
import Playing from "./Component/Body/vidPlaying";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Topheader />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/SeachMeNow" element={<SeachMeNow />} />
        <Route path="/UpdateLink" element={<UpdateLink />} />
        <Route path="/Language" element={<Language />} />
        <Route path="/HelpANdFeedBack" element={<HelpANdFeedBack />} />
        <Route path="/Storage" element={<Storage />} />
        <Route path="/ManageHistory" element={<ManageHistory />} />
        <Route path="/About" element={<About />} />
        <Route path="/Playing" element={<Playing />} />
      </Routes>
      {/* <SeachMeNow /> */}
    </div>
  );
}

export default App;
