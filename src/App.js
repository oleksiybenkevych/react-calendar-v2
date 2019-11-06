import React from "react";

import Calendar from "./components/calendar/";

import "./App.scss";

function App() {
  return <Calendar onChange={range => console.log(range)} />;
}

export default App;
