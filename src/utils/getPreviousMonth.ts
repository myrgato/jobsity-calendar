export default function getPreviousMonth(date: any) {
  const newDate = new Date(Date.parse(date));
  newDate.setMonth(date.getMonth() - 1);
  return newDate;
}
