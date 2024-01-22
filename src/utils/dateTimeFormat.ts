import dayjs from 'dayjs';

function dateTimeFormat(time: string, fm: 'date' | 'time' | 'date-time') {
  if (fm === 'date') return dayjs(time).format('YYYY-MM-DD');
  else if (fm === 'time') return dayjs(time).format('hh:mm a');
  else return dayjs(time).format('YYYY-MM-DD | hh:mm a');
}

export default dateTimeFormat;
