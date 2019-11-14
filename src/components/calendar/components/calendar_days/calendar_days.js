import React from "react";
import moment from "moment";

import { connect } from "react-redux";
import Date from "../date/date";

import "./calendar_days.scss";

class CalendaDays extends React.Component {
  render() {
    const { today } = this.props;

    let blanks = [];
    for (let i = 0; i < today.startOf("month").format("d"); i++) {
      blanks.push("");
    }

    let daysInMonth = [];
    for (let i = 1; i <= today.daysInMonth(); i++) {
      daysInMonth.push(moment(`${today.format("YYYY MM")} ${i}`));
    }
    let monthDays = [...blanks, ...daysInMonth];
    let rows = [];
    let row = [];

    monthDays.forEach((cell, i) => {
      const day = <Date key={i} date={cell} />;
      if (i === 0 || i % 7 !== 0) {
        row.push(day);
      } else {
        rows.push(row);
        row = [];
        row.push(day);
      }
      if (i === monthDays.length - 1) {
        rows.push(row);
      }
    });

    return (
      <tbody>
        {rows.map((date, index) => (
          <tr key={index}>{date}</tr>
        ))}
      </tbody>
    );
  }
}

const mapStateToProps = state => ({
  today: state.today
});
export default connect(mapStateToProps)(CalendaDays);
