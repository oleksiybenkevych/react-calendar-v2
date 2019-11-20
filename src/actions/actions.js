export const NEXT_MONTH = "NEXT_MONTH";
export const PREV_MONTH = "PREV_MONTH";
export const TOGGLE_CALENDAR = "TOGGLE_CALENDAR";
export const CLEAR_RANGE = "CLEAR_RANGE";
export const CLEAR_RANGE_END = "CLEAR_RANGE_END";
export const SET_RANGE_START = "SET_RANGE_START";
export const SET_RANGE_END = "SET_RANGE_END";
export const SET_HOVER_DATE = "SET_HOVER_DATE";

export function nextMonth() {
  return { type: NEXT_MONTH };
}

export function prevMonth() {
  return { type: PREV_MONTH };
}

export function toggleCalendar(props) {
  return { type: TOGGLE_CALENDAR, payload: props };
}

export function clearRange() {
  return { type: CLEAR_RANGE };
}
export function clearRangeEnd() {
  return { type: CLEAR_RANGE_END };
}

export function setRangeStart(date) {
  return { type: SET_RANGE_START, payload: date };
}
export function setRangeEnd(date) {
  return { type: SET_RANGE_END, payload: date };
}

export function setHoverDate(date) {
  return { type: SET_HOVER_DATE, payload: date };
}
