import React from "react";
import classnames from "classnames";
import onClickOutside from "react-onclickoutside";

import WeekDays from "../week_days/week_days";
import CalendarDays from "../calendar_days/calendar_days";
import ToolBar from "../tool_bar/tool_bar";

import "./calendar_body.scss";
// import moment from "moment";

class CalendarBody extends React.Component {
  handleClickOutside(evt) {
    this.props.onClose();
  }
  render() {
    const {
      open,
      range,
      today,
      nextClick,
      prevClick,
      hoverEndDate,
      firstClick
    } = this.props;

    return (
      <div
        className={classnames({
          "calendar-body": true,
          left: firstClick,
          visible: open,
          right: !firstClick
        })}
      >
        <div className="tool-bar">
          <ToolBar today={today} nextClick={nextClick} prevClick={prevClick} />
        </div>
        <thead>
          <WeekDays />
        </thead>
        <CalendarDays
          firstClick={firstClick}
          hoverEndDate={hoverEndDate}
          range={range}
          today={today}
          dateClick={date => this.props.dayClick(date)}
          onHoverEnd={date => this.props.onHoverEnd(date)}
        />
      </div>
    );
  }
}

export default onClickOutside(CalendarBody);
