import React from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import {
  toggleCalendar,
  clearRange,
  clearRangeEnd
} from "../../../../actions/actions";

import "./input.scss";

class Input extends React.Component {
  getValue = () => {
    const { type, range } = this.props;
    if (type === "start") {
      return range.start ? range.start.format("D MMMM YYYY") : "";
    } else {
      return range.end ? range.end.format("D MMMM YYYY") : "";
    }
  };
  render() {
    const { label, type, dispatch } = this.props;
    return (
      <div className="input-elem">
        <span className="label">{label}</span>
        <input
          readOnly
          value={this.getValue()}
          className="input"
          type="text"
          placeholder="дд.мм.рррр"
          onClick={e => {
            dispatch(
              toggleCalendar({ open: true, firstClick: type === "start" })
            );
          }}
        ></input>
        <span
          className={classnames({
            clear: true
          })}
          onClick={e => {
            dispatch(type === "start" ? clearRange() : clearRangeEnd());
          }}
        >
          X
        </span>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    range: state.range
  };
};
export default connect(mapStateToProps)(Input);
