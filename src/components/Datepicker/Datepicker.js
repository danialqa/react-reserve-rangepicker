/* @flow */

import React, { PureComponent } from "react";
import { GregorianCalendar, PersianCalendar } from "./Calendars";
import "antd/dist/antd.css";

class Datepicker extends PureComponent {
  render() {
    const { disabledHourFrom, disabledHourTo, ...rest } = this.props;

    return (
      <div className="c--datepicker">
        {this.props.isPersian ? (
          <PersianCalendar
            disabledHourFrom={this.props.disabledHourFrom}
            disabledHourTo={this.props.disabledHourTo}
            {...rest}
          />
        ) : (
          <GregorianCalendar
            disabledHourFrom={this.props.disabledHourFrom}
            disabledHourTo={this.props.disabledHourTo}
            {...rest}
          />
        )}
      </div>
    );
  }
}

export default Datepicker;
