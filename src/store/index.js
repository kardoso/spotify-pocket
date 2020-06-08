import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { USER_LOGOUT } from "../actions/user";

import appReducers from "../reducers";
import middleware from "../middleware";

const rootReducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    state = undefined;
  }

  return appReducers(state, action);
};

const persistConfig = {
  key: "spotifyStorage",
  storage,
  blacklist: ["auth", "content"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, middleware);

const persistor = persistStore(store);

export { store, persistor };
