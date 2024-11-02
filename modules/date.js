import { DateTime } from './luxon.js';

const getOrdinalSuffix = (day) => {
  if (day > 3 && day < 21) return 'th'; 
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};
export const updateDate = () => {
  const now = DateTime.now();
  const month = now.toLocaleString({ month: 'long' });
  const day = now.day;
  const year = now.year;
  const time = now.toLocaleString({
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });
  const formattedDate = `${month} ${day}${getOrdinalSuffix(day)} ${year}, ${time}`;
  document.getElementById("dateDisplay").innerText = formattedDate;
};

