import React from "react";
import "./panel.css";

const Panel = () => {
  return (
    <div className="panel">
      <div className="panel-tab">
        <h3>Last Events</h3>
      </div>
      <div className="panel-tab">
        <h3>Reports</h3>
      </div>
      <div className="panel-tab">
        <h3>Wanted</h3>
      </div>
    </div>
  );
};

export default Panel;
