export function timeAgo(dateInput: string | Date): string {
  const now = new Date();

  let date: Date;
  if (typeof dateInput === "string") {
    // Parse "YYYY-MM-DD HH:mm:ss" as local time
    const [d, t] = dateInput.split(" ");
    const [year, month, day] = d.split("-").map(Number);
    const [hour, minute, second] = t.split(":").map(Number);
    date = new Date(year, month - 1, day, hour, minute, second); // local time
  } else {
    date = dateInput;
  }

  const diffMs = now.getTime() - date.getTime();
  if (diffMs < 0) return "just now";

  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);

  if (diffYears > 0) return diffYears === 1 ? "1 year ago" : `${diffYears} years ago`;
  if (diffMonths > 0) return diffMonths === 1 ? "1 month ago" : `${diffMonths} months ago`;
  if (diffWeeks > 0) return diffWeeks === 1 ? "1 week ago" : `${diffWeeks} weeks ago`;
  if (diffDays > 0) return diffDays === 1 ? "1 day ago" : `${diffDays} days ago`;
  if (diffHours > 0) return diffHours === 1 ? "1 hour ago" : `${diffHours} hours ago`;
  if (diffMinutes > 0) return diffMinutes === 1 ? "1 minute ago" : `${diffMinutes} minutes ago`;
  return diffSeconds <= 5 ? "just now" : `${diffSeconds} seconds ago`;
}
