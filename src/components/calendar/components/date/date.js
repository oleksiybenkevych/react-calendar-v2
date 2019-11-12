import React from "react";
import classnames from "classnames";
import moment from "moment";

import "./date.scss";

export default class Date extends React.Component {
  render() {
    const { date, range, hoverEndDate, firstClick } = this.props;
    if (!date) return <td className="empty-day"></td>;
    return (
      <td
        className={classnames({
          day: true,
          hoverend:
            !firstClick &&
            range.start &&
            !range.end &&
            date.isAfter(range.start) &&
            date.isBefore(hoverEndDate),
          start: range.start && date.isSame(range.start),
          end: range.end && date.isSame(range.end),
          today: date.isSame(moment().startOf("day")),
          range:
            range.start &&
            range.end &&
            date.isAfter(range.start) &&
            date.isBefore(range.end),
          disabled:
            (range.start && !range.end && date.isBefore(range.start)) ||
            date.isBefore(moment().startOf("day"))
        })}
        onClick={e => {
          this.props.onClick(date);
        }}
        onMouseEnter={e => {
          this.props.onHoverEnd(date);
        }}
        onMouseLeave={e => {
          this.props.onHoverEnd(null);
        }}
      >
        {date.format("D")}
      </td>
    );
  }
}
