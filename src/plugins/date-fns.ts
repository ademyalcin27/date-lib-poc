import {  formatISO, format, toDate } from 'date-fns'
import {  utcToZonedTime, zonedTimeToUtc, getTimezoneOffset, format as formatUTC } from 'date-fns-tz'

export function getTimeWithTimezoneDateFns(time: number, timezone: string) {
  return zonedTimeToUtc(new Date(time), timezone).getTime();
}

export function getIsDstDateFns(time: any, timezone: string) {
  const date = new Date(time)
  const currentOffset: number = -date.getTimezoneOffset();
  
  const january: Date = new Date(date.getTime());
  january.setMonth(0);
  const januaryOffset = -january.getTimezoneOffset(); 
  
  const may: Date = new Date(date.getTime());
  may.setMonth(5);
  const mayOffset = -may.getTimezoneOffset(); 
  return  currentOffset > januaryOffset || currentOffset > mayOffset ? 'true' : 'false'
}
export function getTimeForTimezoneDateFns(time: number | string, timezone: string) {
  return formatISO(zonedTimeToUtc(new Date(time), timezone))
}

export function getTimeByFormatDateFns(time: number, tz: string, ft: string) {
  return format(zonedTimeToUtc(new Date(time), tz), ft);
}

export function valueOfDateFns() {
  return  new Date(2010, 1, 14, 15, 25, 50, 125).getTime();
}

export function getTimeToDateDateFns(time: number | string, timezone: string) {
  return toDate(zonedTimeToUtc(new Date(time), timezone).getTime()).toString()
}

export function  isUserTimeZoneOffsetEqualToServerTimeZoneOffsetDateFns() {
  const now = new Date().getTime()
  const guess = Intl.DateTimeFormat().resolvedOptions().timeZone
  const userOffset = getTimezoneOffset(guess, utcToZonedTime(now, guess));
  const etpaOffset = getTimezoneOffset('europe/amsterdam', utcToZonedTime(now, guess))
  return userOffset === etpaOffset;
}