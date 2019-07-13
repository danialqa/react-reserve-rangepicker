/* @flow */

import React, { PureComponent } from "react";
import { GregorianCalendar, PersianCalendar } from "./Calendars";
import "antd/dist/antd.css";

class DatePicker extends PureComponent {
  render() {
    const { isPersian, disabledHourFrom, disabledHourTo, ...rest } = this.props;

    return (
      <div className="c--datepicker">
        {isPersian ? (
          <PersianCalendar
            disabledHourFrom={disabledHourFrom}
            disabledHourTo={disabledHourTo}
            {...rest}
          />
        ) : (
          <GregorianCalendar
            disabledHourFrom={disabledHourFrom}
            disabledHourTo={disabledHourTo}
            {...rest}
          />
        )}
      </div>
    );
  }
}

export default DatePicker;
