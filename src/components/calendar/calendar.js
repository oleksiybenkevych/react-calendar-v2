import React from "react";
import { connect } from "react-redux";

import Input from "./components/input/input";
import CalendarBody from "./components/calendar_body/calendar_body";

import "./calendar.scss";

class Calendar extends React.Component {
  componentDidUpdate() {
    if (this.props.range.start && this.props.range.end) {
      this.props.onChange(this.props.range);
    }
  }
  render() {
    return (
      <div className="calendar">
        <div className="inputs-container">
          <Input type="start" label="START DATE" />
          <Input type="end" label="END DATE" />
        </div>
        <CalendarBody />
      </div>
    );
  }
}
const mapStateToProps = state => ({ range: state.range });
export default connect(mapStateToProps)(Calendar);
