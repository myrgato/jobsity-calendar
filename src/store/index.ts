import { combineReducers, createStore, CombinedState } from "redux";
import { reminderReducer } from "./calendar";

const appReducer = combineReducers({
  reminders: reminderReducer,
});

export type RootState = ReturnType<typeof appReducer>;

export const rootReducer: typeof appReducer = (state, action) => {
  const newState = {
    ...state,
  } as CombinedState<RootState> | undefined;

  return appReducer(newState, action);
};

const store = createStore(rootReducer);

export { store };
