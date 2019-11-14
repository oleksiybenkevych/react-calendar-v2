import React from "react";
import classnames from "classnames";
import onClickOutside from "react-onclickoutside";

import { setOpen } from "../../../../actions/actions";
import WeekDays from "../week_days/week_days";
import CalendarDays from "../calendar_days/calendar_days";
import ToolBar from "../tool_bar/tool_bar";

import "./calendar_body.scss";
import { connect } from "react-redux";
// import moment from "moment";

class CalendarBody extends React.Component {
  handleClickOutside(evt) {
    this.props.dispatch(setOpen(false));
  }
  render() {
    const { open, firstClick } = this.props;

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
          <ToolBar />
        </div>
        <table>
          <thead>
            <WeekDays />
          </thead>
          <CalendarDays />
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  open: state.open,
  firstClick: state.firstClick
});

export default connect(mapStateToProps)(onClickOutside(CalendarBody));
