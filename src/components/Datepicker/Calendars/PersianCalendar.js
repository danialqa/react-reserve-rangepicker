/* @flow */

import React, { PureComponent } from "react";
import { DatePicker, LocaleProvider } from "antd";
import fa_IR from "antd/lib/locale-provider/fa_IR";
import "moment/locale/fa";
import moment from "moment";

moment.locale("fa");

class PersianCalendar extends PureComponent {
  render() {
    const { ...rest } = this.props;

    return (
      <LocaleProvider locale={fa_IR}>
        <div className="c--persian-calendar">
          <DatePicker
            {...rest}
            size="large"
            disabledDate={current => {
              return current && current < moment().endOf("day");
            }}
            disabledTime={() => {
              const range = (start, end) => {
                const result = [];
                for (let i = start; i < end; i++) {
                  result.push(i);
                }
                return result;
              };
              return {
                disabledHours: () =>
                  range(this.props.disabledHourFrom, this.props.disabledHourTo),
                disabledMinutes: () =>
                  range(
                    this.props.disabledMinuteFrom,
                    this.props.disabledMinuteTo
                  )
              };
            }}
          />
        </div>
      </LocaleProvider>
    );
  }
}

export default PersianCalendar;
