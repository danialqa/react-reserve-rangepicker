/* @flow */

import React, { PureComponent } from "react";
import { GregorianCalendar, PersianCalendar } from "./Calendars";
import { Button } from "antd";
import "antd/dist/antd.css";

class Datepicker extends PureComponent {
  state = {
    datePickerValue: null,
    isPersian: false
  };

  changeCalendarHandler = () => {
    this.setState({
      isPersian: !this.state.isPersian
    });
  };

  render() {
    const { disabledHourFrom, disabledHourTo, ...rest } = this.props;

    const { datePickerValue, isPersian } = this.state;

    return (
      <div className="c--datepicker">
        {isPersian ? (
          <PersianCalendar
            value={datePickerValue}
            disabledHourFrom={disabledHourFrom}
            disabledHourTo={disabledHourTo}
            renderExtraFooter={() => (
              <div className="extraFooter">
                <Button onClick={this.changeCalendarHandler}>
                  تقویم میلادی
                </Button>
              </div>
            )}
            onChange={datePickerValue => this.setState({ datePickerValue })}
            {...rest}
          />
        ) : (
          <GregorianCalendar
            value={datePickerValue}
            disabledHourFrom={disabledHourFrom}
            disabledHourTo={disabledHourTo}
            renderExtraFooter={() => (
              <div className="extraFooter">
                <Button onClick={this.changeCalendarHandler}>
                  Shamsi Calendar
                </Button>
              </div>
            )}
            onChange={datePickerValue => this.setState({ datePickerValue })}
            {...rest}
          />
        )}
      </div>
    );
  }
}

export default Datepicker;
