import React from "react";
import moment from "moment";

import Date from "../date/date";

import "./calendar_days.scss";

export default class CalendaDays extends React.Component {
  render() {
    const { today, dateClick, range, onHoverEnd, hoverEnd } = this.props;
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
      const day = (
        <Date
          hoverEnd={hoverEnd}
          date={cell}
          range={range}
          onClick={date => dateClick(date)}
          onHoverEnd={date => {
            onHoverEnd(date);
          }}
        />
      );
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
        {rows.map(date => (
          <tr>{date}</tr>
        ))}
      </tbody>
    );
  }
}

// {/* <tbody>
//         {[...blanks, ...daysInMonth].map(date => (
//           <Date date={date} />
//         ))}
//       </tbody> */}
