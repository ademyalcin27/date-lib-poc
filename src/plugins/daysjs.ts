import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import arraySupport from "dayjs/plugin/arraySupport";
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);
dayjs.extend(arraySupport);
dayjs.extend(timezone)
dayjs.extend(utc);


 export function getDateWithTimezoneDayJs(time: number | Date | string, timezone: string) {
  return dayjs(time).tz(timezone).toDate().getTime()
};

export function getIsDstDayJs(time: any) {
  const item = dayjs(time)
  const result = item.utcOffset() > item.clone().month(0).utcOffset() || item.utcOffset() > item.clone().month(5).utcOffset()
  return result ? 'true' : 'false'
}

export function getTimezoneDayJs(time: number | string, timezone: string) {
  return dayjs(time).tz(timezone).format();
}

export function getTimeByFormatDayJs(time: number, tz: string, format: string) {
  return dayjs(time).tz(tz).format(format);
}

export function valueOfDayJs() {
  return dayjs([2010, 1, 14, 15, 25, 50, 125]).valueOf()
}
export function getTimeToDateDayJs(time: number | string, timezone: string) {
  return dayjs(time).tz(timezone).toDate().toString()
}

export function  isUserTimeZoneOffsetEqualToServerTimeZoneOffsetDayJs() {
  const guess = dayjs.tz.guess()
  const userOffset = dayjs().tz(guess).utcOffset();
  const etpaOffset = dayjs().tz('europe/amsterdam').utcOffset();
  return userOffset === etpaOffset;
}