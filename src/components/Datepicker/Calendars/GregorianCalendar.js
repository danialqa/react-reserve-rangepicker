/* @flow */

import React, { PureComponent } from "react";
import { DatePicker, LocaleProvider } from "antd";
import en_GB from "antd/lib/locale-provider/en_GB";
import moment from "moment";

moment.locale("en");

class GregorianCalendar extends PureComponent {
  render() {
    const { disableDate, ...rest } = this.props;

    return (
      <LocaleProvider locale={en_GB}>
        <div className="c--gregorian-calendar">
          <DatePicker
            {...rest}
            size="large"
            disabledDate={
              disableDate
                ? current => {
                    return current && current < moment().endOf("day");
                  }
                : null
            }
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

export default GregorianCalendar;
