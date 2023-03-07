var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var d = new Date();
export const weekName = days[d.getDay()];
const date = new Date();
export const monthName = date.toLocaleString("default", { month: "short" });
