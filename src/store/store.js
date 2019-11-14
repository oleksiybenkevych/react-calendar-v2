import { createStore } from "redux";

import calendar from "../reducers/reducers";

const store = createStore(calendar);

export default store;
