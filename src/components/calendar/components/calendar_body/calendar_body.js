import React from "react";
import classnames from "classnames";

import WeekDays from "../week_days/week_days";
import CalendarDays from "../calendar_days/calendar_days";
import ToolBar from "../tool_bar/tool_bar";

import "./calendar_body.scss";
// import moment from "moment";

export default class CalendarBody extends React.Component {
  render() {
    const { open, range, today, nextClick, prevClick } = this.props;
    return (
      <div className={classnames({ "calendar-body": true, visible: open })}>
        <div className="tool-bar">
          <ToolBar today={today} nextClick={nextClick} prevClick={prevClick} />
        </div>
        <thead>
          <WeekDays />
        </thead>
        <CalendarDays
          range={range}
          today={today}
          dateClick={date => this.props.dayClick(date)}
        />
      </div>
    );
  }
}
