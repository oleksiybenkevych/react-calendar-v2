import calendar from "./reducers";
import moment from "moment";
import {
  nextMonth,
  prevMonth,
  toggleCalendar,
  clearRange,
  clearRangeEnd,
  setRangeStart,
  setRangeEnd,
  setHoverDate
} from "../actions/actions";

test("should add 1 month", () => {
  const mockState = {
    today: moment()
  };

  const newState = calendar(mockState, nextMonth());

  expect(newState.today).toStrictEqual(mockState.today.add(1, "month"));
});

test("should subtract 1 month", () => {
  const mockState = {
    today: moment()
  };
  const newState = calendar(mockState, prevMonth());

  expect(newState.today).toStrictEqual(mockState.today.subtract(1, "month"));
});

test("sould set open", () => {
  const mockState = {
    open: false,
    firstClick: false
  };

  let newState = calendar(
    mockState,
    toggleCalendar({ open: true, firstClick: true })
  );
  expect(newState.open).toBe(true);
  expect(newState.firstClick).toBe(true);
  newState = calendar(
    mockState,
    toggleCalendar({ open: false, firstClick: false })
  );
  expect(newState.open).toBe(false);
  expect(newState.firstClick).toBe(false);

  newState = calendar(mockState, toggleCalendar({ open: false }));
  expect(newState.firstClick).toBe(mockState.firstClick);
});

test("shoud clear range", () => {
  const mockState = {
    range: {
      start: moment(),
      end: moment()
    }
  };
  let newState = calendar(mockState, clearRange());
  expect(newState.range.start).toBe(null);
  expect(newState.range.end).toBe(null);
});

test("shoud crear range end date", () => {
  const mockState = {
    range: {
      start: moment(),
      end: moment()
    }
  };
  let newState = calendar(mockState, clearRangeEnd());
  expect(newState.range.start).toStrictEqual(mockState.range.start);
  expect(newState.range.end).toBe(null);
});

test("set range start value", () => {
  const mockState = {
    range: {
      start: null
    }
  };
  const newStart = moment();
  const newState = calendar(mockState, setRangeStart(newStart));

  expect(newState.range.start).toStrictEqual(newStart);
});

test("set range end value", () => {
  const mockState = {
    range: {
      end: null
    }
  };
  const newEnd = moment();
  const newState = calendar(mockState, setRangeEnd(newEnd));
  expect(newState.range.end).toStrictEqual(newEnd);
});

test("set hover date", () => {
  const mockState = {
    hoverEndDate: null
  };

  const newHoverDate = moment();
  const newState = calendar(mockState, setHoverDate(newHoverDate));
  expect(newState.hoverEndDate).toStrictEqual(newHoverDate);
});
