/* @flow */

import React, { PureComponent } from "react";
import { DatePicker, LocaleProvider } from "antd";
import en_GB from "antd/lib/locale-provider/en_GB";
import moment from "moment";

moment.locale("en");

class GregorianCalendar extends PureComponent {
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
      <LocaleProvider locale={en_GB}>
        <div className="c--gregorian-calendar">
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

export default GregorianCalendar;
