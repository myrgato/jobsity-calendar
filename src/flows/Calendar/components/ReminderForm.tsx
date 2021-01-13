import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import {
  Box,
  Button,
  CircularProgress,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { RemindersState } from "../../../store/reminders";
import { DataReminder } from "../../../store/reminders/actions";

interface IProps {
  onSave: (reminder: DataReminder) => Promise<void>;
  onEdit: (reminder: RemindersState[0]) => Promise<void>;
  currentReminder: any;
  clickedDay: any;
}

const ReminderForm: React.FC<IProps> = ({
  onSave,
  onEdit,
  currentReminder,
  clickedDay,
}) => {
  const [selectedDate, setSelectedDate] = React.useState(
    currentReminder.date || clickedDay
  );
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const [description, setDescription] = React.useState(
    currentReminder.description || ""
  );
  const handleDescriptionChange = (newDescription: string) => {
    setDescription(newDescription.slice(0, 30));
  };

  const [city, setCity] = React.useState(currentReminder.city || "");
  const handleCityChange = (newCity: string) => {
    setCity(newCity);
  };

  const [color, setColor] = React.useState(currentReminder.color || "Grey");
  const handleColorChange = (newColor: any) => {
    setColor(newColor);
  };

  const [loading, setLoading] = React.useState(false);

  const renderTextOrLoading = () => {
    if (loading) {
      return <CircularProgress style={{ color: "white" }} />;
    }
    return currentReminder.date ? "Edit Reminder" : "Add Reminder";
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            label="Date"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            label="Time"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change time",
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
      <Box
        display="flex"
        flexDirection="column"
        width="224px"
        justifyContent="center"
      >
        <TextField
          label="Description"
          value={description}
          data-test-id="text-field-description"
          required
          onChange={(event) => handleDescriptionChange(event.target.value)}
        />
        <TextField
          style={{ marginTop: 4 }}
          label="City"
          value={city}
          onChange={(event) => handleCityChange(event.target.value)}
        />
        <Select
          style={{ marginTop: 20 }}
          value={color}
          onChange={(event) => handleColorChange(event.target.value)}
        >
          <MenuItem value="Grey">Grey</MenuItem>
          <MenuItem value="Black">Black</MenuItem>
          <MenuItem value="Blue">Blue</MenuItem>
          <MenuItem value="Red">Red</MenuItem>
          <MenuItem value="Orange">Orange</MenuItem>
        </Select>
      </Box>
      <Box mt={2}>
        <Button
          variant="contained"
          color="primary"
          disabled={description === ""}
          data-test-id="button-commit"
          onClick={async () => {
            if (currentReminder.date) {
              setLoading(true);
              await onEdit({
                ...currentReminder,
                city,
                color,
                date: selectedDate,
                description,
              });
              setLoading(false);
              return;
            }
            setLoading(true);
            await onSave({ date: selectedDate, description, city, color });
            setLoading(false);
          }}
        >
          {renderTextOrLoading()}
        </Button>
      </Box>
    </Box>
  );
};

export default ReminderForm;
