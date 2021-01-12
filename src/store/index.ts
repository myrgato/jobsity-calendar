import { combineReducers, createStore, CombinedState } from "redux";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistStore, persistReducer, createTransform } from "redux-persist";

import { reminderReducer } from "./calendar";

const appReducer = combineReducers({
  reminders: reminderReducer,
});

export type RootState = ReturnType<typeof appReducer>;

const replacer = (key: string, value: any) =>
  value instanceof Date ? value.toISOString() : value;

const reviver = (key: string, value: any) =>
  typeof value === "string" &&
  value.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/)
    ? new Date(value)
    : value;

const encode = (toDeshydrate: any) => JSON.stringify(toDeshydrate, replacer);

const decode = (toRehydrate: any) => JSON.parse(toRehydrate, reviver);

const persistConfig = {
  key: "root",
  storage,
  transforms: [createTransform(encode, decode)],
};

export const rootReducer: typeof appReducer = (state, action) => {
  const newState = {
    ...state,
  } as CombinedState<RootState> | undefined;

  return appReducer(newState, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
