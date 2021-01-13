import React from "react";

import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import { format } from "date-fns";
import { RemindersState } from "../../../store/reminders";
import Reminders from "./Reminders";

const useStyles = makeStyles(() => ({
  container: {
    minHeight: 250,
    minWidth: 200,
  },
  day: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    backgroundColor: "#3f51b5",
    borderRadius: 20,
    color: "white",
  },
}));

interface IProps {
  reminders: RemindersState | [];
  date: Date;
  onEditReminder: (reminder: RemindersState[0]) => void;
  onDeleteReminder: (id: string) => Promise<void>;
  onDeleteAllReminders: (date: Date) => Promise<void>;
}

const Day: React.FC<IProps> = ({
  reminders = [],
  date,
  onEditReminder,
  onDeleteAllReminders,
  onDeleteReminder,
}) => {
  const classes = useStyles();

  const isToday =
    format(date, "dd/MM/yyyy") === format(new Date(), "dd/MM/yyyy");

  return (
    <Box className={classes.container}>
      <Box mb={4} className={isToday ? classes.day : ""}>
        <Typography>{date.getDate()}</Typography>
      </Box>
      {reminders.length > 0 ? (
        <Reminders
          reminders={reminders}
          onDeleteReminder={onDeleteReminder}
          onEditReminder={onEditReminder}
        />
      ) : null}
      <Box mt={1} display="flex" justifyContent="flex-end">
        {reminders.length > 0 ? (
          <Button
            variant="contained"
            color="secondary"
            size="small"
            data-test-id="button-day-delete-all"
            onClick={(e) => {
              e.stopPropagation();
              onDeleteAllReminders(date);
            }}
          >
            Delete All Reminders
          </Button>
        ) : null}
      </Box>
    </Box>
  );
};

export default Day;
