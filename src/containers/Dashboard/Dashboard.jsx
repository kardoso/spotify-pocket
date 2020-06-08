import React from "react";

import "./Dashboard.scss";

import { useSelector } from "react-redux";

import { Player } from "../";

const Dashboard = ({ children }) => {
  const playerHeight = useSelector((state) => state.content.playerHeight);

  return (
    <div
      className="dashboard"
      data-testid="dashboard"
      style={{ paddingBottom: `${playerHeight}px` }}
    >
      {children}

      <Player />
    </div>
  );
};

export default Dashboard;
