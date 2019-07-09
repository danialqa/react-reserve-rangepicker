/* @flow */

import React, { PureComponent } from "react";
import { GregorianCalendar, PersianCalendar } from "./Calendars";
import "antd/dist/antd.css";

class Rangepicker extends PureComponent {
  render() {
    const {
      isPersian,
      startPlaceholder,
      endPlaceholder,
      seprated,
      disabledHourFrom,
      disabledHourTo,
      ...rest
    } = this.props;

    return (
      <div className="c--rangepicker">
        {isPersian ? (
          <PersianCalendar
            startPlaceholder={startPlaceholder}
            endPlaceholder={endPlaceholder}
            seprated={seprated}
            disabledHourFrom={disabledHourFrom}
            disabledHourTo={disabledHourTo}
            {...rest}
          />
        ) : (
          <GregorianCalendar
            startPlaceholder={startPlaceholder}
            endPlaceholder={endPlaceholder}
            seprated={seprated}
            disabledHourFrom={disabledHourFrom}
            disabledHourTo={disabledHourTo}
            {...rest}
          />
        )}
      </div>
    );
  }
}

export default Rangepicker;
