import moment from "moment";

export const generateTimeDiffLabel = (timestamp: string) => {
  const today = moment.utc();
  const diff = today.diff(moment.utc(timestamp), "milliseconds", true);
  const duration = moment.duration(diff);

  if (duration.years() >= 1) {
    return `${Math.floor(duration.years())}y ago`;
  }

  if (duration.months() >= 1) {
    return `${Math.floor(duration.months())}m ago`;
  }

  if (duration.weeks() >= 1) {
    return `${Math.floor(duration.weeks())}w ago`;
  }

  if (duration.days() >= 1) {
    return `${Math.floor(duration.days())}d ago`;
  }

  return "today";
};
