import React from "react";

import "tool_bar.scss";

export default class ToolBar extends React.Component {
  nextMonth = () => {};

  prevMonth = () => {};
  render() {
    return (
      <tr className="calendar-header">
        <td className="prev">
          <button
            onClick={e => {
              this.prevMonth();
            }}
          >
            ←
          </button>
        </td>
        <td colSpan="2">{/* month */}</td>
        <td colSpan="2">{/* year */}</td>
        <td className="next">
          <button
            onClick={e => {
              this.nextMonth();
            }}
          >
            →
          </button>
        </td>
      </tr>
    );
  }
}
