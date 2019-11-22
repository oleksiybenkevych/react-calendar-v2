import React from "react";
import { nextMonth, prevMonth } from "../../../../actions/actions";
import { connect } from "react-redux";

import "./tool_bar.scss";

class ToolBar extends React.Component {
  render() {
    const { today, dispatch } = this.props;
    return (
      <div className="calendar-header">
        <div className="prev">
          <button
            onClick={e => {
              dispatch(prevMonth());
            }}
          >
            ←
          </button>
        </div>
        <div className="date">{today.format("MMMM YYYY")}</div>
        <div className="next">
          <button
            onClick={e => {
              dispatch(nextMonth());
            }}
          >
            →
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    today: state.today
  };
};
export default connect(mapStateToProps)(ToolBar);
