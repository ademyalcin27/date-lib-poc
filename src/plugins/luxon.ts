import { DateTime } from "luxon";

export function getTimeWithTimezoneLuxon(time: number, timezone: string) {
  return DateTime.fromMillis(time).setZone(timezone).toJSDate().getTime()
}

export function getIsDstLuxon(time: string, timezone: string) {
  return DateTime.fromJSDate(new Date(time)).setZone(timezone).isInDST ? 'true' : 'false'
}
export function getTimezoneLuxon(timezone: string) {
  return DateTime.now().setZone(timezone).toJSON();
}
export function getTimeByFormatLuxon(time: number, tz: string, format: string) {
  return  DateTime.fromMillis(time).setZone(tz).toFormat(format)
}
export function valueOfLuxon() {
  return DateTime.local(2010, 1, 14, 15, 25, 50, 125).valueOf()
}

export function getTimeToDateLuxon(time: number, timezone: string) {
  return DateTime.fromMillis(time).setZone(timezone).toJSDate().toString()
}

export function  isUserTimeZoneOffsetEqualToServerTimeZoneOffsetLuxon() {
  const now = DateTime.local().valueOf();
  const guess = DateTime.local().zoneName
  const userOffset = DateTime.local().setZone(guess).zone.offset(now)
  const etpaOffset = DateTime.local().setZone('europe/amsterdam').zone.offset(now)
  return userOffset === etpaOffset;
}

