import { createStore, applyMiddleware } from "redux";

import calendar from "../reducers/reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(calendar, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
