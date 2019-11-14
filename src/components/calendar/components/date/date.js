import React from "react";
import classnames from "classnames";
import moment from "moment";
import { connect } from "react-redux";

import {
  setRangeStart,
  setRangeEnd,
  setHoverDate
} from "../../../../actions/actions";

import "./date.scss";

class Date extends React.Component {
  setRange = date => {
    const { firstClick, dispatch } = this.props;
    if (firstClick) {
      dispatch(setRangeStart(date));
    } else {
      dispatch(setRangeEnd(date));
    }
  };

  render() {
    const { date, range, hoverEndDate, firstClick, dispatch } = this.props;
    if (!date) return <td className="empty-day"></td>;
    return (
      <td
        className={classnames({
          day: true,
          hoverend:
            !firstClick &&
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
            (range.start && !firstClick && date.isBefore(range.start)) ||
            date.isBefore(moment().startOf("day"))
        })}
        onClick={e => {
          this.setRange(date);
        }}
        onMouseEnter={e => {
          dispatch(setHoverDate(date));
        }}
        onMouseLeave={e => {
          dispatch(setHoverDate(null));
        }}
      >
        {date.format("D")}
      </td>
    );
  }
}

const mapStateToProps = state => ({
  range: state.range,
  hoverEndDate: state.hoverEndDate,
  firstClick: state.firstClick
});

export default connect(mapStateToProps)(Date);
