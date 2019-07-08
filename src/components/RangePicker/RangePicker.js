/* @flow */

import React, { PureComponent } from "react";
import { GregorianCalendar, PersianCalendar } from "./Calendars";
import "antd/dist/antd.css";

class RangePicker extends PureComponent {
  render() {
    const { ...rest } = this.props;

    return (
      <div className="c--rangepicker">
        {this.props.isPersian ? (
          <PersianCalendar
            {...rest}
            disabledHourFrom={this.props.disabledHourFrom}
            disabledHourTo={this.props.disabledHourTo}
          />
        ) : (
          <GregorianCalendar
            disabledHourFrom={this.props.disabledHourFrom}
            disabledHourTo={this.props.disabledHourTo}
          />
        )}
      </div>
    );
  }
}

export default RangePicker;
