import { format } from "date-fns";
import { v4 as uuidv4 } from "uuid";
import api from "../../services/api";
import { RemindersState } from "./types";

type DataReminder = Omit<RemindersState[0], "id" | "weather">;

interface Weather {
  icon: string;
  description: string;
}
// TODO: TRY CATCH THIS SHIT
async function getWeather(data: any) {
  if (data.city === "") return null;
  let weather: Weather | null = null;
  try {
    const response = await api.get<any>(
      `/forecast?q=${data.city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    );

    console.log("response", { response });

    for (const forecast of response.data.list) {
      const { dt_txt: dtTxt } = forecast;
      const forecastDateString = dtTxt.split(" ")[0];
      const dataDateString = format(data.date, "yyyy-MM-dd");

      if (forecastDateString === dataDateString) {
        weather = {
          // get icon from url http://openweathermap.org/img/w/${icon}.png
          icon: forecast.weather[0].icon,
          description: forecast.weather[0].description,
        };
        break;
      }
    }
  } catch (e) {
    console.log(e);
  }
  return weather;
}

const addReminder = async (reminders: RemindersState, data: DataReminder) => {
  const newReminder = {
    id: uuidv4(),
    ...data,
    weather: data.city ? await getWeather(data) : null,
  };

  return {
    type: "ADD_REMINDER",
    payload: [...reminders, newReminder],
  };
};

const editReminder = async (
  reminders: RemindersState,
  data: RemindersState[0]
) => {
  const finalReminders = reminders.filter(
    (reminder) => reminder.id !== data.id
  );

  const {
    weather: oldReminderWeather,
    city: oldReminderCity,
    date: oldReminderDate,
  } = reminders.filter((reminder) => reminder.id === data.id)[0];
  let weather = oldReminderWeather;
  if (
    oldReminderCity !== data.city ||
    (format(oldReminderDate, "dd/MM/yyyy") !==
      format(data.date, "dd/MM/yyyy") &&
      data.city != null)
  ) {
    weather = await getWeather(data);
  }

  finalReminders.push({ ...data, weather });

  return {
    type: "EDIT_REMINDER",
    payload: finalReminders,
  };
};

const deleteReminder = (reminders: RemindersState, id: string = "1") => {
  const finalReminders = reminders.filter((reminder) => reminder.id !== id);

  return {
    type: "DELETE_REMINDER",
    payload: finalReminders,
  };
};

const deleteReminders = (
  reminders: RemindersState,
  date: Date = new Date()
) => {
  const finalReminders = reminders.filter(
    (reminder) =>
      format(reminder.date, "mm/dd/yyyy") !== format(date, "mm/dd/yyyy")
  );

  return {
    type: "DELETE_REMINDERS",
    payload: finalReminders,
  };
};

export { addReminder, editReminder, deleteReminder, deleteReminders };
