/* @flow */

import React, { PureComponent } from "react";
import { GregorianCalendar, PersianCalendar } from "./Calendars";
import { Button } from "antd";
import "antd/dist/antd.css";

class Rangepicker extends PureComponent {
  state = {
    rangePickerValue: null,
    isPersian: false
  };

  changeCalendarHandler = () => {
    this.setState({
      isPersian: !this.state.isPersian
    });
  };

  render() {
    const {
      startPlaceholder,
      endPlaceholder,
      seprated,
      disabledHourFrom,
      disabledHourTo,
      ...rest
    } = this.props;
    const { rangePickerValue, isPersian } = this.state;

    return (
      <div className="c--rangepicker">
        {isPersian ? (
          <PersianCalendar
            value={rangePickerValue}
            startPlaceholder={startPlaceholder}
            endPlaceholder={endPlaceholder}
            seprated={seprated}
            disabledHourFrom={disabledHourFrom}
            disabledHourTo={disabledHourTo}
            renderExtraFooter={() => (
              <div className="extraFooter">
                <Button onClick={this.changeCalendarHandler}>
                  تقویم میلادی
                </Button>
              </div>
            )}
            onChange={rangePickerValue => this.setState({ rangePickerValue })}
            {...rest}
          />
        ) : (
          <GregorianCalendar
            value={rangePickerValue}
            startPlaceholder={startPlaceholder}
            endPlaceholder={endPlaceholder}
            seprated={seprated}
            disabledHourFrom={disabledHourFrom}
            disabledHourTo={disabledHourTo}
            renderExtraFooter={() => (
              <div className="extraFooter">
                <Button onClick={this.changeCalendarHandler}>
                  Shamsi Calendar
                </Button>
              </div>
            )}
            onChange={rangePickerValue => this.setState({ rangePickerValue })}
            {...rest}
          />
        )}
      </div>
    );
  }
}

export default Rangepicker;
