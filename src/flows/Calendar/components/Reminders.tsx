import {
  Box,
  Typography,
  Tooltip,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import { Create, Delete } from "@material-ui/icons";
import { getHours, getMinutes } from "date-fns";
import React from "react";
import { RemindersState } from "../../../store/reminders";

const useStyles = makeStyles(() => ({
  container: {
    overflowY: "scroll",
    maxHeight: 150,
    height: "100%",
  },
  time: {
    borderBottom: "1px solid green",
    padding: "8px 0px",
  },
  reminderTime: {
    borderRadius: 5,
    maxWidth: 200,
    whiteSpace: "nowrap",
    color: "white",
  },
  reminderWeather: {
    textTransform: "capitalize",
  },
  reminderIcon: { width: 26, height: 26 },
  reminderAction: {
    color: "white",
  },
}));

const Reminders = ({ reminders, onEditReminder, onDeleteReminder }: any) => {
  const classes = useStyles();
  let remindersByTime = {};
  if (reminders.length) {
    remindersByTime = reminders.reduce(
      (acc: any, reminder: RemindersState[0]) => {
        const { date } = reminder;
        const time = `${String(getHours(date)).padStart(2, "0")}:${String(
          getMinutes(date)
        ).padStart(2, "0")}`;
        if (acc.hasOwnProperty(time)) {
          acc[time].push(reminder);
          return acc;
        }
        acc[time] = [reminder];
        return acc;
      },
      {}
    );
  }

  const keys = Object.keys(remindersByTime);
  keys.sort((a, b) => {
    const [aHour, aMin] = a.split(":");
    const aDate = new Date();
    aDate.setHours(Number(aHour));
    aDate.setMinutes(Number(aMin));

    const [bHour, bMin] = b.split(":");
    const bDate = new Date();
    bDate.setHours(Number(bHour));
    bDate.setMinutes(Number(bMin));

    return aDate.getTime() - bDate.getTime();
  });

  return (
    <Box
      display="flex"
      flexDirection="column"
      p={1}
      className={classes.container}
    >
      {keys.map((key) => (
        <Box key={key}>
          <Box className={classes.time}>
            <Typography>{key}</Typography>
            {remindersByTime[key].map((reminder: any, index: number) => (
              <Box
                key={reminder.id}
                mb={1}
                className={classes.reminderTime}
                style={{ backgroundColor: reminder.color }}
                p={1}
                textOverflow="ellipsis"
                overflow="hidden"
              >
                <Tooltip title={reminder.description} placement="top-start">
                  <span>{reminder.description}</span>
                </Tooltip>
                {reminder.city ? <Box>{reminder.city}</Box> : null}
                {reminder.weather ? (
                  <Box display="flex">
                    <Box flex={1} className={classes.reminderWeather}>
                      {reminder.weather.description}
                    </Box>
                    <Box>
                      <img
                        src={`http://openweathermap.org/img/w/${reminder.weather.icon}.png`}
                        alt="icon"
                        className={classes.reminderIcon}
                      />
                    </Box>
                  </Box>
                ) : null}
                <Box display="flex" justifyContent="flex-end">
                  <IconButton
                    size="small"
                    component="span"
                    data-testId={`button-reminders-edit-${index}`}
                    onClick={(e: any) => {
                      e.stopPropagation();
                      onEditReminder(reminder);
                    }}
                    className={classes.reminderAction}
                  >
                    <Create />
                  </IconButton>
                  <IconButton
                    data-testId={`button-reminders-delete-${index}`}
                    onClick={(e: any) => {
                      e.stopPropagation();
                      onDeleteReminder(reminder.id);
                    }}
                    size="small"
                    component="span"
                    className={classes.reminderAction}
                  >
                    <Delete />
                  </IconButton>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Reminders;
