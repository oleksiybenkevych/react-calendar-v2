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
    openLeft: false,
    openRight: false,
    hoverEnd: null
  };

  setRange(date) {
    if (this.state.firstClick) {
      this.props.onChange({ ...this.state.range, start: date });
      this.setState(prevState => ({
        range: {
          end: null,
          start: date
        },
        firstClick: !prevState.firstClick,
        openRight: true
      }));
    } else {
      this.props.onChange({ ...this.state.range, end: date });
      this.setState(prevState => ({
        range: {
          ...prevState.range,
          end: date
        },
        open: false,
        firstClick: !prevState.firstClick
      }));
    }
  }

  render() {
    const {
      open,
      range,
      openLeft,
      openRight,
      hoverEnd,
      firstClick
    } = this.state;
    return (
      <div className="app-container">
        <div className="inputs-container">
          <Input
            label="START DATE"
            onClick={() =>
              this.setState({
                openLeft: true,
                openRight: false,
                open: true
              })
            }
            value={range.start ? range.start.format("D MMMM YYYY") : ""}
            clearBtn={() =>
              this.setState(prevState => ({
                range: { start: null, end: null },
                firstClick: true,
                open: false,
                hoverEnd: null
              }))
            }
          />
          <Input
            label="END DATE"
            onClick={() =>
              this.setState({
                openRight: true,
                openLeft: false,
                open: true
              })
            }
            value={range.end ? range.end.format("D MMMM YYYY") : ""}
            clearBtn={() =>
              this.setState(prevState => ({
                range: { end: null, start: prevState.range.start },
                firstClick: false,
                open: false,
                hoverEnd: null
              }))
            }
          />
        </div>
        <CalendarBody
          hoverEnd={hoverEnd}
          open={open}
          openLeft={openLeft}
          openRight={openRight}
          dayClick={date => {
            this.setRange(date);
          }}
          onHoverEnd={date => {
            if (!firstClick) {
              this.setState({
                hoverEnd: date
              });
            }
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
