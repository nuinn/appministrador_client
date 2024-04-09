export default function formatDateTime(dateTimeString) {
  const dateTime = new Date(dateTimeString);
  const day = dateTime.getDate().toString().padStart(2, '0');
  const month = (dateTime.getMonth() + 1).toString().padStart(2, '0');
  const year = dateTime.getFullYear();
  const hours = dateTime.getHours().toString().padStart(2, '0');
  const minutes = dateTime.getMinutes().toString().padStart(2, '0');
  const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}h`;
  return formattedDate;
}