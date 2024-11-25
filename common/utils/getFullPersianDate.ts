/**
 * Generates the full Persian (Jalali) date in the format: `<dayName> <dayNumber> <monthName> <year>`.
 *
 * This function uses the `Intl.DateTimeFormat` API to format the current date based on
 * the Persian calendar and returns a fully formatted string.
 *
 * @returns {string} The full Persian date string.
 *
 * @example
 * // Example Output:
 * // "یکشنبه 24 مرداد 1403"
 * const persianDate = getFullPersianDate();
 * console.log(persianDate); // "یکشنبه 24 مرداد 1403"
 */
const getFullPersianDate = (): string => {
  const date = new Date();

  // Create an Intl.DateTimeFormat for Persian calendar
  const formatter = new Intl.DateTimeFormat("fa-IR", {
    calendar: "persian",
    weekday: "long", // Get day name
    day: "numeric", // Get day number
    month: "long", // Get month name
    year: "numeric", // Get year
  });

  // Format the date parts
  const parts = formatter.formatToParts(date);
  const dayName = parts.find((part) => part.type === "weekday")?.value ?? "";
  const dayNumber = parts.find((part) => part.type === "day")?.value ?? "";
  const monthName = parts.find((part) => part.type === "month")?.value ?? "";
  const year = parts.find((part) => part.type === "year")?.value ?? "";

  // Concatenate to form the desired string
  return `${dayName} ${dayNumber} ${monthName} ${year}`;
};

export default getFullPersianDate;
