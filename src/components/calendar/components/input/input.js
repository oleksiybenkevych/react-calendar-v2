import React from "react";

import "./input.scss";

export default class Input extends React.Component {
  render() {
    const { label, onClick, value } = this.props;
    return (
      <div className="input-elem">
        <div>
          <span className="label">{label}</span>
        </div>
        <input
          readOnly
          value={value}
          className="input"
          type="text"
          placeholder="дд.мм.рррр"
          onClick={onClick}
        ></input>
      </div>
    );
  }
}
