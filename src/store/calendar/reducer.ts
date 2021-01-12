import { RemindersState } from "./types";

const initialState: RemindersState | [] = [];

const reminderReducer = (
  state: RemindersState | [] = initialState,
  action: any
) => {
  switch (action.type) {
    case "ADD_REMINDER":
      return action.payload;
    case "EDIT_REMINDER":
      return action.payload;
    case "DELETE_REMINDER":
      return action.payload;
    case "DELETE_REMINDERS":
      return action.payload;
    default:
      return state;
  }
};

export default reminderReducer;
