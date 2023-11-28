import dayjs from 'dayjs';

function calculateAge(date: string) {
  const now = dayjs();
  const birth = dayjs(date);
  let age = now.get('year') - birth.get('year');

  if (now.get('month') < birth.get('month') || (now.get('month') === birth.get('month') && now.get('date') < birth.get('date'))) {
    age -= 1;
  }

  if (age < 1) {
    return '1살 미만';
  } else {
    return `${age}살`;
  }
}

export default calculateAge;
