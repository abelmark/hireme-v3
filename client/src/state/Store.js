import { createStore } from "redux";

import rootReducer from "../reducers/index.js";

const configureStore = () => {
  const store = createStore(rootReducer);

  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept("../reducers/index.js", () => {
        store.replaceReducer(rootReducer);
      });
    }
  }

  return store;
};

export default configureStore;
