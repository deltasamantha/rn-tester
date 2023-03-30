import dayjs from "dayjs";

export function getAuthTimestamp() {
  return dayjs().toISOString();
}
