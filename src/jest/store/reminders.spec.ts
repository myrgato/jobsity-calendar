import configureMockStore from "redux-mock-store";
import MockAdapter from "axios-mock-adapter";
import OpenWeatherData from "../fixtures/OpenWeatherData";
import api from "../../services/api";
import {
  addReminder,
  deleteReminder,
  deleteReminders,
  editReminder,
} from "../../store/reminders";
import reminderData from "../fixtures/ReminderData";

describe("testing reminders state of store", () => {
  const middlewares: [] = [];
  const mockStore = configureMockStore(middlewares);
  let mockApi: MockAdapter;
  beforeEach(() => {
    mockApi = new MockAdapter(api);
  });

  afterEach(() => {
    mockApi.restore();
  });

  it("should create a reminder with date and city", async () => {
    const initialState: [] = [];
    const store = mockStore(initialState);
    mockApi
      .onGet(`/forecast?q=Miami&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
      .reply(200, OpenWeatherData);

    store.dispatch(await addReminder(initialState, reminderData));
    const actions = store.getActions();

    const weather = {
      icon: OpenWeatherData.list[0].weather[0].icon,
      description: OpenWeatherData.list[0].weather[0].description,
    };

    const expectedPayload = [
      {
        type: "ADD_REMINDER",
        payload: [
          {
            ...reminderData,
            weather,
          },
        ],
      },
    ];

    expect(actions).toEqual(expectedPayload);
  });

  it("should delete a reminder", () => {
    const initialState: any = [reminderData];
    const store = mockStore(initialState);

    store.dispatch(deleteReminder(initialState, reminderData.id));

    const actions = store.getActions();

    const expectedPayload = [
      {
        type: "DELETE_REMINDER",
        payload: [],
      },
    ];

    expect(actions).toEqual(expectedPayload);
  });

  it("should delete all reminders", () => {
    const initialState: any = [reminderData];
    const store = mockStore(initialState);

    store.dispatch(deleteReminders(initialState, reminderData.date));

    const actions = store.getActions();

    const expectedPayload = [
      {
        type: "DELETE_REMINDERS",
        payload: [],
      },
    ];

    expect(actions).toEqual(expectedPayload);
  });

  it("should edit a reminder", async () => {
    const initialState: any = [reminderData];
    const store = mockStore(initialState);

    store.dispatch(
      await editReminder(initialState, {
        ...reminderData,
        description: "New Description",
      })
    );

    const actions = store.getActions();

    const expectedPayload = [
      {
        type: "EDIT_REMINDER",
        payload: [
          {
            ...reminderData,
            description: "New Description",
          },
        ],
      },
    ];

    expect(actions).toEqual(expectedPayload);
  });
});
