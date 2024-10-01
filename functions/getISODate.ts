/**
 * @function Function that accepts a `Date` object and returns only the
 * date using the ISO format (`YYYY-MM-DD`).
 */
export default function getISODate(dateObj: Date) {
  const [date] = dateObj.toISOString().split('T');
  return date;
}
