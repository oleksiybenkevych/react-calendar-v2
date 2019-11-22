import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";

import Date from "./date";
import moment from "moment";

const mockStore = configureStore([]);
describe("Date", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      range: { start: moment(), end: moment() },
      hoverEndDate: moment(),
      firstClick: false
    });
    store.dispatch = jest.fn();
  });

  it("should render with given state from Redux store", () => {
    const DateComponent = renderer.create(
      <Provider store={store}>
        <Date />
      </Provider>
    );
    let component = DateComponent.toJSON();
    expect(component).toMatchSnapshot();
  });
});
