import React from "react";
import logo from "./logo.svg";

import Calendar from "./components/calendar/";

import "./App.scss";

function App() {
  return <Calendar onChange={range => console.log(range)} />;
}

export default App;
