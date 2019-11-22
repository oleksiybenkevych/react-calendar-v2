import React from "react";
import { connect } from "react-redux";

import Calendar from "./components/calendar/calendar";

import "./App.scss";
import { sendRange } from "./actions/actions";

function App(props) {
  return (
    <div>
      <Calendar />
      <button onClick={e => props.dispatch(sendRange())}>
        <span>Search</span>
      </button>
    </div>
  );
}

export default connect()(App);
