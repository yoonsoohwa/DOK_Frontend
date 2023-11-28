import dayjs from "dayjs";

function dateTimeFormat(time: string) {
  return dayjs(time).format("YYYY-MM-DD | hh:mm a");
}

export default dateTimeFormat;
