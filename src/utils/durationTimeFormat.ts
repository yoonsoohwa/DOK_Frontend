import dayjs from 'dayjs';

function durationTimeFormat(time: number) {
  return `${time * 60}분`;
}

export default durationTimeFormat;
