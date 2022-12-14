
import { AMSTERDAM_TIMEZONE, ARRAY_DATE, DDMMYYYY_FORMAT, DDMMYYYY_FORMAT_SMALL, DST_TIME, GET_TIME_WITH_TIMEZONE, LONDON_TIMEZONE, L_LT_FORMAT, NOT_DST_TIME } from '../constants'
import { getIsDstDateFns, getTimeByFormatDateFns, getTimeForTimezoneDateFns, getTimeToDateDateFns, getTimeWithTimezoneDateFns, isUserTimeZoneOffsetEqualToServerTimeZoneOffsetDateFns, valueOfDateFns } from '../plugins/date-fns';
import { getDateWithTimezoneDayJs, getIsDstDayJs, getTimezoneDayJs, getTimeByFormatDayJs, getTimeToDateDayJs, isUserTimeZoneOffsetEqualToServerTimeZoneOffsetDayJs, valueOfDayJs } from '../plugins/daysjs';
import { getIsDstLuxon, getTimezoneLuxon, getTimeByFormatLuxon, getTimeToDateLuxon, getTimeWithTimezoneLuxon, isUserTimeZoneOffsetEqualToServerTimeZoneOffsetLuxon, valueOfLuxon } from '../plugins/luxon';
import { getIsDst, getMomentForTimezone, getTimeByFormat, getTimeWithTimezone, momentValueOf, isUserTimeZoneOffsetEqualToServerTimeZoneOffset } from '../plugins/moment'

function DateView () {
  return (
    <table>
    <thead>
      <tr>
        <th>#</th> 
        <th>Moment JS</th>
        <th>Day JS</th>
        <th>Luxon JS</th>
        <th>Date-fns JS</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
         Get time with timezone
        </td>
        <td>{getTimeWithTimezone(GET_TIME_WITH_TIMEZONE, LONDON_TIMEZONE)}</td>
        <td>{getDateWithTimezoneDayJs(GET_TIME_WITH_TIMEZONE, LONDON_TIMEZONE)}</td>
        <td>{getTimeWithTimezoneLuxon(GET_TIME_WITH_TIMEZONE, LONDON_TIMEZONE)}</td>
        <td>{getTimeWithTimezoneDateFns(GET_TIME_WITH_TIMEZONE, LONDON_TIMEZONE)}</td>
      </tr>
      <tr>
        <td>
          is DST
        </td>
        <td>
          <p><b>{getIsDst(NOT_DST_TIME, AMSTERDAM_TIMEZONE) }</b> <i>// March 12 2011 is not DST</i></p>
          <p><b>{getIsDst(DST_TIME, AMSTERDAM_TIMEZONE)}</b><i>// { DST_TIME }</i></p>
        </td>
        <td>
          <p><b>{getIsDstDayJs(NOT_DST_TIME) }</b> <i>// March 12 2011 is not DST</i></p>
          <p><b>{getIsDstDayJs(DST_TIME)}</b><i>// { DST_TIME }</i></p>
        </td>
        <td>
          <p><b>{getIsDstLuxon(NOT_DST_TIME, AMSTERDAM_TIMEZONE) }</b> <i>// March 12 2011 is not DST</i></p>
          <p><b>{getIsDstLuxon(DST_TIME, AMSTERDAM_TIMEZONE)}</b><i>// { DST_TIME }</i></p>
        </td>
        <td>
          <p><b>{getIsDstDateFns(NOT_DST_TIME, AMSTERDAM_TIMEZONE) }</b> <i>// March 12 2011 is not DST</i></p>
          <p><b>{getIsDstDateFns(DST_TIME, AMSTERDAM_TIMEZONE)}</b><i>// { DST_TIME }</i></p>
        </td>
      </tr>
      <tr>
        <td>
          getMomentForTimezone
        </td>
        <td>
          {getMomentForTimezone(Date.now(), AMSTERDAM_TIMEZONE).format()}
        </td>
        <td>
          {getTimezoneDayJs(Date.now(), AMSTERDAM_TIMEZONE)}
        </td>
        <td>
          {getTimezoneLuxon(AMSTERDAM_TIMEZONE)}
        </td>
        <td>
          {getTimeForTimezoneDateFns(Date.now(), AMSTERDAM_TIMEZONE)}
        </td>
      </tr>
      <tr>
        <td>
          getTimeByFormat
        </td>
        <td>
          <p><b>L LT => </b>{getTimeByFormat(Date.now(), AMSTERDAM_TIMEZONE, L_LT_FORMAT)}</p>
          <p><b>dd/MM/yyyy => </b>{getTimeByFormat(Date.now(), AMSTERDAM_TIMEZONE , DDMMYYYY_FORMAT)}</p>
        </td>
        <td>
          <p><b>L LT => </b>{getTimeByFormatDayJs(Date.now(), AMSTERDAM_TIMEZONE, L_LT_FORMAT)}</p>
          <p><b>dd/MM/yyyy => </b>{getTimeByFormatDayJs(Date.now(), AMSTERDAM_TIMEZONE , DDMMYYYY_FORMAT)}</p>
        </td>
        <td>
          <p><b>L LT => </b>{getTimeByFormatLuxon(Date.now(), AMSTERDAM_TIMEZONE, L_LT_FORMAT)}</p>
          <p><b>dd/MM/yyyy => </b>{getTimeByFormatLuxon(Date.now(), AMSTERDAM_TIMEZONE , DDMMYYYY_FORMAT)}</p>
        </td>
        <td>
          <p><b>L LT => </b>{getTimeByFormatDateFns(Date.now(), AMSTERDAM_TIMEZONE, L_LT_FORMAT)}</p>
          <p><b>dd/MM/yyyy => </b>{getTimeByFormatDateFns(Date.now(), AMSTERDAM_TIMEZONE , DDMMYYYY_FORMAT_SMALL)}</p>
        </td>
      </tr>
      <tr>
        <td>
          ValueOf
        </td>
        <td>
          <p>{momentValueOf(ARRAY_DATE)}</p>
        </td>
        <td>
          <p>{valueOfDayJs()}</p>
        </td>
        <td>
          <p>{valueOfLuxon()}</p>
        </td>
        <td>
          <p>{valueOfDateFns()}</p>
        </td>
      </tr>
      <tr>
        <td>
          toDate
          </td>
        <td>
          <p>{getMomentForTimezone(Date.now(), AMSTERDAM_TIMEZONE).toDate().toString()}</p>
        </td>
        <td><p>{getTimeToDateDayJs(Date.now(), AMSTERDAM_TIMEZONE)}</p></td>
        <td><p>{getTimeToDateLuxon(Date.now(), AMSTERDAM_TIMEZONE)}</p></td>
        <td><p>{getTimeToDateDateFns(Date.now(), AMSTERDAM_TIMEZONE)}</p></td>
      </tr>
      <tr>
        <td>isDoubledDSTHour</td>
        <td>
          {/* {isDoubledDSTHour(DST_TIME, AMSTERDAM_TIMEZONE) ? 'true' : 'false'} */} -
        </td>
        <td>
          {/* {isDoubledDSTHour(DST_TIME, AMSTERDAM_TIMEZONE) ? 'true' : 'false'} */} -
        </td>
        <td>
          {/* {isDoubledDSTHour(DST_TIME, AMSTERDAM_TIMEZONE) ? 'true' : 'false'} */} -
        </td>
      </tr>
      <tr>
        <td>
          isUserTimeZoneOffsetEqualToServerTimeZoneOffset
        </td>
        <td>
          {isUserTimeZoneOffsetEqualToServerTimeZoneOffset() ? 'equal' : 'not equal'}
        </td>
        <td>
          {isUserTimeZoneOffsetEqualToServerTimeZoneOffsetDayJs() ? 'equal' : 'not equal'}
        </td>
        <td>
          {isUserTimeZoneOffsetEqualToServerTimeZoneOffsetLuxon() ? 'equal' : 'not equal'}
        </td>
        <td>
          {isUserTimeZoneOffsetEqualToServerTimeZoneOffsetDateFns() ? 'equal' : 'not equal'}
        </td>
      </tr>
    </tbody>
  </table>
  )
};

export default DateView;


