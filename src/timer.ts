function convertTimeString(time: Date) {
  const date = new Date(time);
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
  };
  const formattedDate = date.toLocaleString("en-US", options);
  return formattedDate;
}

export default convertTimeString;
