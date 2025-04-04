import { Outlet } from "react-router";
import "./mainLayout.css";
import LeftBar from "../componets/leftBar/leftBar";
import TopBar from "../componets/topBar/topBar";

const mainLayout = () => {
  return (
    <div className="app">
      <LeftBar />
      <div className="content">
        <TopBar />
        <Outlet />
      </div>
    </div>
  );
};

export default mainLayout;
