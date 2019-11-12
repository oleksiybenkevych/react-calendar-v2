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
    open: false,
    hoverEndDate: null
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
          end: date.isBefore(this.state.range.start)
            ? this.state.range.start
            : date,
          start: date.isBefore(this.state.range.start)
            ? date
            : this.state.range.start
        },
        open: false,
        firstClick: !prevState.firstClick
      }));
    }
  }

  render() {
    const { open, range, hoverEndDate, firstClick } = this.state;
    return (
      <div className="calendar">
        <div className="inputs-container">
          <Input
            label="START DATE"
            onClick={() =>
              this.setState({
                firstClick: true,
                open: true
              })
            }
            value={range.start ? range.start.format("D MMMM YYYY") : ""}
            onClearBtnClick={() =>
              this.setState(prevState => ({
                range: { start: null, end: null },
                firstClick: true,
                open: false,
                hoverEndDate: null
              }))
            }
          />
          <Input
            label="END DATE"
            onClick={() =>
              this.setState({
                firstClick: false,
                open: true
              })
            }
            value={range.end ? range.end.format("D MMMM YYYY") : ""}
            onClearBtnClick={() =>
              this.setState(prevState => ({
                range: { end: null, start: prevState.range.start },
                firstClick: false,
                open: false,
                hoverEndDate: null
              }))
            }
          />
        </div>
        <CalendarBody
          hoverEndDate={hoverEndDate}
          open={open}
          firstClick={firstClick}
          dayClick={date => {
            this.setRange(date);
          }}
          onHoverEnd={date => {
            this.setState({
              hoverEndDate: date
            });
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
          onClose={() => this.setState({ open: false })}
        />
      </div>
    );
  }
}
