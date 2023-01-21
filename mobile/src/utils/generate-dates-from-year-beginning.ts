import dayjs from 'dayjs';

export default function generateDatesFromYearBeginning() {
  const firstDateOFTheYear = dayjs().startOf('year');
  const today = new Date();

  const dates = []
  let compareDate = firstDateOFTheYear

  while(compareDate.isBefore(today)) {
    dates.push(compareDate.toDate())
    compareDate = compareDate.add(1, 'day')
  }

  return dates;
}