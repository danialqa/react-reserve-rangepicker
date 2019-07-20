/* @flow */

import React, { PureComponent } from "react";
import { DatePicker, LocaleProvider } from "antd";
import fa_IR from "antd/lib/locale-provider/fa_IR";
import "moment/locale/fa";
import moment from "moment";

const { RangePicker } = DatePicker;

moment.locale("fa");

class PersianCalendar extends PureComponent {
  state = {
    startValue: null,
    endValue: null,
    endOpen: false
  };

  // Seprated Range Picker Functions
  disabledStartDate = startValue => {
    const { endValue } = this.state;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  };

  disabledEndDate = endValue => {
    const { startValue } = this.state;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  };

  onChange = (field, value) => {
    this.setState({
      [field]: value
    });
  };

  onStartChange = value => {
    this.onChange("startValue", value);
  };

  onEndChange = value => {
    this.onChange("endValue", value);
  };

  handleStartOpenChange = open => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  };

  handleEndOpenChange = open => {
    this.setState({ endOpen: open });
  };

  // Normal Range Picker Functions
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
    const {
      seprated,
      showTime,
      format,
      startPlaceholder,
      endPlaceholder,
      disableDate,
      ...rest
    } = this.props;
    const { startValue, endValue, endOpen } = this.state;

    return (
      <LocaleProvider locale={fa_IR}>
        <div className="c--persian-calendar">
          {seprated ? (
            <div className="seprated-rangepicker">
              <DatePicker
                className="seprated-rangepicker--input input-from"
                size="large"
                showTime={showTime}
                disabledDate={this.disabledStartDate}
                format={format}
                value={startValue}
                placeholder={startPlaceholder ? startPlaceholder : "تاریخ شروع"}
                onChange={this.onStartChange}
                onOpenChange={this.handleStartOpenChange}
                {...rest}
              />
              <DatePicker
                className="seprated-rangepicker--input input-to"
                size="large"
                showTime={this.props.showTime}
                disabledDate={this.disabledEndDate}
                format={format}
                value={endValue}
                placeholder={endPlaceholder ? endPlaceholder : "تاریخ پایان"}
                onChange={this.onEndChange}
                open={endOpen}
                onOpenChange={this.handleEndOpenChange}
                {...rest}
              />
            </div>
          ) : (
            <RangePicker
              size="large"
              showTime={showTime}
              placeholder={[
                startPlaceholder ? startPlaceholder : "تاریخ شروع",
                endPlaceholder ? endPlaceholder : "تاریخ پایان"
              ]}
              disabledDate={disableDate ? this.disabledDate : null}
              disabledTime={this.disabledTime}
              {...rest}
            />
          )}
        </div>
      </LocaleProvider>
    );
  }
}

export default PersianCalendar;
