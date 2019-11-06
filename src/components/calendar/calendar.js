import React from "react";
import moment from "moment";

import Input from "./components/input";
import WeekDays from "./components/week_days";
import CalendarBody from "./components/calendar_body";
import ToolBar from "./components/tool_bar";

import "calendar.scss";

export default class Calendar extends React.Component {
  state = {
    range: {
      start: null,
      end: null
    },
    firstClick: true,
    today: moment()
  };

  setRange(date) {
    if (this.firstClick === true) {
      this.props.onChange({ ...this.state.range, start: date });
      this.setState(prevState => ({
        range: {
          ...prevState.range,
          start: date
        },
        firstClick: !prevState.firstClick
      }));
    } else {
      this.props.onChange({ ...this.state.range, end: date });
      this.setState(prevState => ({
        range: {
          ...prevState.range,
          end: date
        },
        firstClick: !prevState.firstClick
      }));
    }
  }

  render() {
    return (
      <div className="app-container">
        <div className="input-container">
          <Input />
          <Input />
        </div>
        <div className="calendar-container">
          <thead>
            <ToolBar />
          </thead>
          <tbody>
            <WeekDays />
            <CalendarBody />
          </tbody>
        </div>
      </div>
    );
  }
}
