import React from "react";
import moment from "moment";

import Input from "./components/input/input";
import CalendarBody from "./components/calendar_body/calendar_body";

import "./calendar.scss";

export default class Calendar extends React.Component {
  state = {
    range: {
      start: null,
      end: null
    },
    firstClick: true,
    today: moment(),
    open: false
  };

  setRange(date) {
    if (this.state.firstClick) {
      this.props.onChange({ ...this.state.range, start: date });
      this.setState(prevState => ({
        range: {
          end: null,
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
    const { range, open } = this.state;
    return (
      <div className="app-container">
        <div className="inputs-container">
          <Input
            label="START DATE"
            onClick={() => this.setState({ open: true })}
            value={range.start ? range.start.format("D MMMM YY") : ""}
          />
          <Input
            label="END DATE"
            onClick={() => this.setState({ open: true })}
            value={range.end ? range.end.format("D MMMM YY") : ""}
          />
        </div>
        <CalendarBody
          open={open}
          dayClick={date => {
            this.setRange(date);
          }}
          nextClick={e => {
            this.setState(prevState => ({
              today: prevState.today.add(1, "month")
            }));
          }}
          prevClick={e => {
            this.setState(prevState => ({
              today: prevState.today.subtract(1, "month")
            }));
          }}
          today={this.state.today}
          range={this.state.range}
        />
      </div>
    );
  }
}
