import dayjs from 'dayjs';

function calculateWalkingTime(time: string, duration: number) {
  const start = dayjs(time);
  const end = start.add(duration * 60, 'm');

  return `${start.format('HH:mm')} ~ ${end.format('HH:mm')}`;
}

export default calculateWalkingTime;
