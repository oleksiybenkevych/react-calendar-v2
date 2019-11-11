import React from "react";
import classnames from "classnames";

import "./input.scss";

export default class Input extends React.Component {
  render() {
    const { label, onClick, value, clearBtn } = this.props;
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
        <span
          className={classnames({
            clear: true
          })}
          onClick={clearBtn}
        >
          X
        </span>
      </div>
    );
  }
}
