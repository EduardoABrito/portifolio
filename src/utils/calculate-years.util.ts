export function calculateYearsFrom(date: Date): number {
  const start = new Date(date);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();

  const hasNotCompletedYearYet =
    now.getMonth() < start.getMonth() ||
    (now.getMonth() === start.getMonth() && now.getDate() < start.getDate());

  if (hasNotCompletedYearYet) {
    years--;
  }

  return Math.max(years, 0);
}
