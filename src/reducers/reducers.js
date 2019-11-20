import {
  NEXT_MONTH,
  PREV_MONTH,
  TOGGLE_CALENDAR,
  CLEAR_RANGE,
  CLEAR_RANGE_END,
  SET_RANGE_END,
  SET_RANGE_START,
  SET_HOVER_DATE
} from "../actions/actions";
import moment from "moment";

const initialState = {
  range: {
    start: null,
    end: null
  },
  firstClick: true,
  today: moment(),
  open: false,
  hoverEndDate: null
};

function calendar(state = initialState, action) {
  switch (action.type) {
    case NEXT_MONTH: {
      return {
        ...state,
        today: moment(state.today).add(1, "month")
      };
    }
    case PREV_MONTH: {
      return {
        ...state,
        today: moment(state.today).subtract(1, "month")
      };
    }
    case TOGGLE_CALENDAR: {
      return {
        ...state,
        firstClick: action.payload.firstClick || state.firstClick,
        open: action.payload.open
      };
    }

    case CLEAR_RANGE: {
      return {
        ...state,
        range: {
          start: null,
          end: null
        }
      };
    }
    case CLEAR_RANGE_END: {
      return {
        ...state,
        range: {
          ...state.range,
          end: null
        }
      };
    }
    case SET_RANGE_START: {
      return {
        ...state,
        range: {
          ...state.range,
          start: action.payload
        },
        firstClick: false
      };
    }
    case SET_RANGE_END: {
      return {
        ...state,
        range: {
          ...state.range,
          end: action.payload
        },
        firstClick: true,
        open: false
      };
    }
    case SET_HOVER_DATE: {
      return {
        ...state,
        hoverEndDate: action.payload
      };
    }
    default:
      return state;
  }
}

export default calendar;
