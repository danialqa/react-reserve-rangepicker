/* @flow */

import React, { PureComponent } from "react";
import { DatePicker, LocaleProvider } from "antd";
import fa_IR from "antd/lib/locale-provider/fa_IR";
import "moment/locale/fa";
import moment from "moment";

moment.locale("fa");

class PersianCalendar extends PureComponent {
  disabledDate = current => {
    // Can not select days before today and today
    return current && current < moment().endOf("day");
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
    const { disableDate, ...rest } = this.props;

    return (
      <LocaleProvider locale={fa_IR}>
        <div className="c--persian-calendar">
          <DatePicker
            size="large"
            disabledDate={disableDate ? this.disabledDate : null}
            disabledTime={this.disabledTime}
            {...rest}
          />
        </div>
      </LocaleProvider>
    );
  }
}

export default PersianCalendar;
