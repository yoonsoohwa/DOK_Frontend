import dayjs from "dayjs";

function timeDiff(time: string) {
  const now = dayjs();
  const prev = dayjs(time);

  if (now.diff(prev, "week")) {
    return dayjs(time).format("YYYY-MM-DD");
  } else if (now.diff(prev, "day")) {
    return now.diff(prev, "day") + "일 전";
  } else if (now.diff(prev, "hour")) {
    return now.diff(prev, "hour") + "시간 전";
  } else if (now.diff(prev, "minute")) {
    return now.diff(prev, "minute") + "분 전";
  } else {
    return now.diff(prev, "second") + "초 전";
  }
}

export default timeDiff;
