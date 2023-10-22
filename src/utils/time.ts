export const FormatDate = (day: string) => {
  const time = new Date(day).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return time
};

export const CompareDesc = (dateA: Date, dateB: Date) => {
  if (dateA.getTime() === dateB.getTime()) return 0
  return dateA > dateB ? -1 : 1
}