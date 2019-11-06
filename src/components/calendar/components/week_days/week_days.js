import React from "react";
import moment from "moment";

import "week_days.scss";

export default class WeekDays extends React.Component {
  weekdaysShort = moment.weekdaysShort();

  render() {
    let weekdays = this.weekdaysShort.map(day => {
      return (
        <td key={day} className="week-days">
          {day}
        </td>
      );
    });
    return <tr>{weekdays} </tr>;
  }
}
