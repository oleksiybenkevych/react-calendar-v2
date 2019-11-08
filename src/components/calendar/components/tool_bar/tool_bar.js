import React from "react";

import "./tool_bar.scss";

export default class ToolBar extends React.Component {
  render() {
    const { nextClick, prevClick, today } = this.props;
    return (
      <div className="calendar-header">
        <div className="prev">
          <button onClick={prevClick}>←</button>
        </div>
        <div className="date">{today.format("MMMM YYYY")}</div>
        <div className="next">
          <button onClick={nextClick}>→</button>
        </div>
      </div>
    );
  }
}
