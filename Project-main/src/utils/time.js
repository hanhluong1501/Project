export function subtractDays(date, days) {
  let newDate = new Date(date);
  newDate.setDate(newDate.getDate() - days);
  return newDate;
}

export const convertDateToString = (date, isFormatForRead = false) => {
  if (!(date instanceof Date)) {
    throw new Error("Input must be a Date object");
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Tháng bắt đầu từ 0
  const day = String(date.getDate()).padStart(2, "0");

  return isFormatForRead
    ? `${day}-${month}-${year}`
    : `${year}-${month}-${day}`;
};

export const formatYAxisTick = (tick) => {
  return tick.toLocaleString(); // Định dạng số với dấu phẩy
};

export const isDateLessThanOrEqual = (date1, date2) => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  // Đặt giờ về 00:00:00
  d1.setHours(0, 0, 0, 0);
  d2.setHours(0, 0, 0, 0);

  return d1.getTime() <= d2.getTime();
};
