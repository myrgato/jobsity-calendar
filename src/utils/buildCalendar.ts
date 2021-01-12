import { getDay, getDaysInMonth, getWeeksInMonth } from "date-fns";

import { WEEK_LENGTH } from "../consts";
import { RemindersState } from "../store/calendar";
import getNextMonth from "./getNextMonth";
import getPreviousMonth from "./getPreviousMonth";

interface buildCalendarParameters {
  calendar: {
    selectedDate: Date;
    reminders: RemindersState;
  };
}

function isFirstWeekOfMonth(currentWeek: number) {
  return currentWeek === 0;
}

function isLastWeekOfMonth(currentWeek: number, weekNumber: number) {
  return currentWeek === weekNumber;
}

interface BuildDateParameters {
  dateParams: {
    month: number;
    day: number;
    year: number;
  };
}

function buildDate({ month, day, year }: BuildDateParameters["dateParams"]) {
  return new Date(`${month}/${day}/${year}`);
}

function getFirsthDayOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function getLastDayOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

function getMonthReminders(reminders: RemindersState, date: Date) {
  return reminders.filter(
    (reminder: any) =>
      reminder.date.getMonth() === date.getMonth() &&
      reminder.date.getFullYear() === date.getFullYear()
  );
}

export default function buildCalendar({
  selectedDate,
  reminders,
}: buildCalendarParameters["calendar"]) {
  const calendar: any[] = [];

  const currentCalendarFirstDay = getFirsthDayOfMonth(selectedDate);
  const currentCalendarLastDay = getLastDayOfMonth(selectedDate);
  const currentCalendarYear = selectedDate.getFullYear();
  const currentCalendarMonth = selectedDate.getMonth();
  const currentCalendarWeeks = getWeeksInMonth(selectedDate);
  const currentCalendarMonthDays = getDaysInMonth(selectedDate);
  const currentCalendarMonthFirstDayOfTheWeek = getDay(currentCalendarFirstDay);
  const currentCalendarMonthLastDayOfTheWeek = getDay(currentCalendarLastDay);
  const currentCalendarMonthReminders: RemindersState = getMonthReminders(
    reminders,
    selectedDate
  );

  const isFirstCalendarWeekBetweenMonths =
    currentCalendarMonthFirstDayOfTheWeek !== 0;
  const previousMonth = getPreviousMonth(selectedDate);
  const previousMonthDays = getDaysInMonth(previousMonth);
  const previousMonthReminders: RemindersState = getMonthReminders(
    reminders,
    previousMonth
  );

  const isLastCalendarWeekBetweenMonths =
    currentCalendarMonthLastDayOfTheWeek !== 6;
  const nextMonth = getNextMonth(selectedDate);
  const nextMonthReminders: RemindersState = getMonthReminders(
    reminders,
    nextMonth
  );

  let currentDayNumber = 1;
  for (let i = 0; i < currentCalendarWeeks; i += 1) {
    calendar.push([]);
    const currentWeek = calendar[i];
    if (isFirstWeekOfMonth(i)) {
      if (isFirstCalendarWeekBetweenMonths) {
        for (
          let j = currentCalendarMonthFirstDayOfTheWeek - 1;
          j >= 0;
          j -= 1
        ) {
          const previousMonthDayNumber = previousMonthDays - j;
          const previousMonthDate = buildDate({
            month: previousMonth.getMonth() + 1,
            day: previousMonthDayNumber,
            year: previousMonth.getFullYear(),
          });
          currentWeek.push({
            date: previousMonthDate,
            reminders: previousMonthReminders
              .filter(
                (reminder) =>
                  reminder.date.getDate() === previousMonthDate.getDate()
              )
              .sort((a, b) => a.date.getTime() - b.date.getTime()),
          });
        }
      }
      for (
        let j = currentCalendarMonthFirstDayOfTheWeek;
        j < WEEK_LENGTH;
        j += 1
      ) {
        const currentMonthDate = buildDate({
          month: currentCalendarMonth + 1,
          day: currentDayNumber,
          year: currentCalendarYear,
        });
        currentWeek.push({
          date: currentMonthDate,
          reminders: currentCalendarMonthReminders
            .filter(
              (reminder) =>
                reminder.date.getDate() === currentMonthDate.getDate()
            )
            .sort((a, b) => a.date.getTime() - b.date.getTime()),
        });
        currentDayNumber += 1;
      }
      continue;
    } else if (isLastWeekOfMonth(i, currentCalendarWeeks - 1)) {
      for (let j = currentDayNumber; j <= currentCalendarMonthDays; j += 1) {
        const currentMonthDate = buildDate({
          month: currentCalendarMonth + 1,
          day: currentDayNumber,
          year: currentCalendarYear,
        });
        currentWeek.push({
          date: currentMonthDate,
          reminders: currentCalendarMonthReminders
            .filter(
              (reminder) =>
                reminder.date.getDate() === currentMonthDate.getDate()
            )
            .sort((a, b) => a.date.getTime() - b.date.getTime()),
        });
        currentDayNumber += 1;
      }
      if (isLastCalendarWeekBetweenMonths) {
        const daysAlreadyPlacedInWeek = currentWeek.length;
        for (let j = 0; j < WEEK_LENGTH - daysAlreadyPlacedInWeek; j += 1) {
          const nextMonthDayNumber = j + 1;
          const nextMonthDate = buildDate({
            month: nextMonth.getMonth() + 1,
            day: nextMonthDayNumber,
            year: nextMonth.getFullYear(),
          });
          currentWeek.push({
            date: nextMonthDate,
            reminders: nextMonthReminders
              .filter(
                (reminder) =>
                  reminder.date.getDate() === nextMonthDate.getDate()
              )
              .sort((a, b) => a.date.getTime() - b.date.getTime()),
          });
        }
      }
      break;
    }
    for (let j = 0; j < WEEK_LENGTH; j += 1) {
      const currentMonthDate = buildDate({
        month: currentCalendarMonth + 1,
        day: currentDayNumber,
        year: currentCalendarYear,
      });

      currentWeek.push({
        date: currentMonthDate,
        reminders: currentCalendarMonthReminders
          .filter(
            (reminder) => reminder.date.getDate() === currentMonthDate.getDate()
          )
          .sort((a, b) => a.date.getTime() - b.date.getTime()),
      });
      currentDayNumber += 1;
    }
  }

  return calendar;
}
