import { takeEvery, select } from "redux-saga/effects";
import axios from "axios";

export function* sendRange() {
  const range = yield select(state => state.range);
  console.log(range);
  axios.post("https://jsonplaceholder.typicode.com/posts", { range });
  // send range with axios
}

export function* calendarSaga() {
  yield takeEvery("SEND_RANGE", sendRange);
}
