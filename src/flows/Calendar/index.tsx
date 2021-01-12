import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Modal,
  Button,
  Box,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { getMonth, getYear } from "date-fns";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";

import Day from "./components/Day";
import ReminderForm from "./components/ReminderForm";
import { MONTHS, WEEK_DAY_NAMES } from "../../consts";
import { buildCalendar, getNextMonth, getPreviousMonth } from "../../utils";
import {
  addReminder,
  deleteReminder,
  editReminder,
  deleteReminders,
} from "../../store/reminders";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  paper: {
    width: 400,
    height: 400,
    backgroundColor: "white",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  todayButton: {
    minWidth: 100,
  },
  previousMonthButton: {
    minWidth: 100,
    marginRight: 20,
  },
  nextMonthButton: {
    minWidth: 100,
    marginLeft: 20,
  },
  thead: {
    backgroundColor: "#3f51b5",
  },
  th: {
    color: "white",
    width: "14%",
  },
  td: {
    border: "1px solid #c3c3c3",
    borderStyle: "inset",
    width: "14%",
  },
}));

const Calendar = () => {
  const classes = useStyles();

  const [reminderModal, setReminderModal] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const currentMonth = getMonth(selectedDate);
  const currentYear = getYear(selectedDate);

  const remindersState = useSelector((state: RootState) => state.reminders);

  const [calendar, setCalendar] = React.useState(() =>
    buildCalendar({
      selectedDate,
      reminders: remindersState,
    })
  );

  const dispatch = useDispatch();

  async function handleAddReminder(reminder: any) {
    dispatch(await addReminder(remindersState, reminder));
  }

  async function handleEditReminder(reminder: any) {
    dispatch(await editReminder(remindersState, reminder));
  }

  async function handleDeleteAllReminders(date: Date) {
    dispatch(await deleteReminders(remindersState, date));
  }

  async function handleDeleteReminder(id: string) {
    dispatch(await deleteReminder(remindersState, id));
  }

  React.useEffect(() => {
    setCalendar(
      buildCalendar({
        selectedDate,
        reminders: remindersState,
      })
    );
  }, [selectedDate, remindersState]);

  const selectedDay = React.useRef({
    row: "",
    column: "",
  });

  const currentReminder = React.useRef({});

  const clickedDay = React.useRef(new Date());

  return (
    <>
      <Box display="flex">
        <Box display="flex" justifyContent="center" alignItems="center">
          <Button
            className={classes.todayButton}
            variant="contained"
            color="primary"
            onClick={() => {
              const newDate = new Date();
              setSelectedDate(newDate);
            }}
          >
            Today
          </Button>
        </Box>
        <Box
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          display="flex"
          m={6}
          flex={1}
        >
          <Button
            className={classes.previousMonthButton}
            variant="contained"
            color="primary"
            onClick={() => {
              const newDate = getPreviousMonth(selectedDate);
              setSelectedDate(newDate);
            }}
          >
            Previous
          </Button>
          <Typography variant="h3">
            {MONTHS[currentMonth]} / {currentYear}
          </Typography>
          <Button
            className={classes.nextMonthButton}
            variant="contained"
            color="primary"
            onClick={() => {
              const newDate = getNextMonth(selectedDate);
              setSelectedDate(newDate);
            }}
          >
            Next
          </Button>
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead className={classes.thead}>
            <TableRow>
              {WEEK_DAY_NAMES.map((day: string) => (
                <TableCell className={classes.th} key={day}>
                  {day}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {calendar.map((week, row: any) => (
              <TableRow>
                {week.map((day: any, column: any) => (
                  <TableCell
                    className={classes.td}
                    onClick={() => {
                      selectedDay.current = { row, column };
                      clickedDay.current = day.date;
                      setReminderModal(true);
                    }}
                  >
                    <Day
                      date={day.date}
                      reminders={day.reminders}
                      setReminders={(reminders: any) => {
                        const newCalendar = [...calendar];
                        newCalendar[row][column].reminders = reminders;
                        setCalendar(newCalendar);
                      }}
                      onDeleteAllReminders={handleDeleteAllReminders}
                      onDeleteReminder={handleDeleteReminder}
                      onEditReminder={(reminder: any) => {
                        currentReminder.current = reminder;
                        selectedDay.current = { row, column };
                        setReminderModal(true);
                      }}
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        className={classes.paper}
        style={{
          margin: "auto",
        }}
        open={reminderModal}
        onClose={() => setReminderModal(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div
          style={{
            backgroundColor: "white",
            display: "flex",
            flex: 1,
            height: "100%",
            width: "100%",
          }}
        >
          <ReminderForm
            onSave={async (reminder: any) => {
              await handleAddReminder(reminder);
              setReminderModal(false);
            }}
            currentReminder={currentReminder.current}
            clickedDay={clickedDay.current}
            onEdit={async (reminder: any) => {
              await handleEditReminder(reminder);
              setReminderModal(false);
              currentReminder.current = {};
            }}
          />
        </div>
      </Modal>
    </>
  );
};

export default Calendar;
