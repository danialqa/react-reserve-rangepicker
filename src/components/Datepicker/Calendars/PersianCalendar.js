/* @flow */

import React, { PureComponent } from "react";
import { DatePicker, LocaleProvider } from "antd";
import fa_IR from "antd/lib/locale-provider/fa_IR";
import "moment/locale/fa";
import moment from "moment";

moment.locale("fa");

class PersianCalendar extends PureComponent {
  // Disable past days
  disablePastDays = current => {
    const date = moment();
    date.hour(0);
    date.minute(0);
    date.second(0);
    return current.isBefore(date);
  };

  // Enable date range
  enableDatesRange = current => {
    const { enableDateFrom, enableDateTo } = this.props;

    const firstDate = moment(enableDateFrom);
    const secondDate = moment(enableDateTo);
    firstDate.hour(0);
    firstDate.minute(0);
    firstDate.second(0);

    secondDate.hour(24);
    secondDate.minute(0);
    secondDate.second(0);

    if (enableDateTo) {
      return current.isBefore(firstDate) + current.isAfter(secondDate);
    } else {
      return current.isBefore(firstDate);
    }
  };

  disabledTime = () => {
    const {
      disabledHourFrom,
      disabledHourTo,
      disabledMinuteFrom,
      disabledMinuteTo
    } = this.props;
    const range = (start, end) => {
      const result = [];
      for (let i = start; i < end; i++) {
        result.push(i);
      }
      return result;
    };
    return {
      disabledHours: () => range(disabledHourFrom, disabledHourTo),
      disabledMinutes: () => range(disabledMinuteFrom, disabledMinuteTo)
    };
  };

  render() {
    const { disablePastDays, enableDateFrom, ...rest } = this.props;

    return (
      <LocaleProvider locale={fa_IR}>
        <div className="c--persian-calendar">
          <DatePicker
            size="large"
            disabledDate={
              disablePastDays || enableDateFrom
                ? disablePastDays
                  ? this.disablePastDays
                  : this.enableDatesRange
                : null
            }
            disabledTime={this.disabledTime}
            {...rest}
          />
        </div>
      </LocaleProvider>
    );
  }
}

export default PersianCalendar;
