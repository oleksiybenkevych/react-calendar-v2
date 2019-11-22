import { all } from "redux-saga/effects";
import { calendarSaga } from "./calendar.sagas";

export default function* rootSaga() {
  yield all([calendarSaga()]);
}
