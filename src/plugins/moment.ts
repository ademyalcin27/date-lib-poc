import moment from 'moment';
import momentz from 'moment-timezone';


export function getTimeWithTimezone(time: number, timezone: string) {
  return moment(time).tz(timezone).toDate().getTime();
}

export function getIsDst(time: any, timezone: string) {
  return moment.tz(time, timezone).isDST() ? 'true' : 'false'
}

export function getMomentForTimezone(time: number | string, timezone: string) {
  return momentz(time).tz(timezone);
}
export function getTimeByFormat(time: number, tz: string, format: string) {
  return momentz(time).tz(tz).format(format);
}
export function isDoubledDSTHour(unixTimestampInMilliseconds: number | string, timezone: string) {
  const momentTimestamp = getMomentForTimezone(unixTimestampInMilliseconds, timezone);
  return !momentTimestamp.isDST() && momentTimestamp.clone().subtract(1, 'hours').isDST()
}
export function momentValueOf(time: number[]) {
  return moment(time).valueOf()
}

export function  isUserTimeZoneOffsetEqualToServerTimeZoneOffset() {
  const now = moment().valueOf();
  const guess = moment.tz.guess();
  const userOffset = moment.tz.zone(guess)?.utcOffset(now);
  const etpaOffset = moment.tz.zone('europe/amsterdam')?.utcOffset(now);
  return userOffset === etpaOffset;
}
