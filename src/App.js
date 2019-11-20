import React from "react";
import * as Api from "./services/api";

import Calendar from "./components/calendar/calendar";

import "./App.scss";

function App() {
  const saveRange = range => {
    Api.saveRange(range);
  };
  return <Calendar onChange={range => saveRange(range)} />;
}

export default App;
