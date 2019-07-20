/* @flow */

import React, { PureComponent } from "react";
import { DatePicker, LocaleProvider } from "antd";
import en_GB from "antd/lib/locale-provider/en_GB";
import moment from "moment";

const { RangePicker } = DatePicker;

moment.locale("en");

class GregorianCalendar extends PureComponent {
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
    return current && !current.valueOf() < Date.now();
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

  disabledDateTime = () => {
    return {
      disabledHours: () => range(0, 24).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56]
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
      <LocaleProvider locale={en_GB}>
        <div className="c--gregorian-calendar">
          {seprated ? (
            <div className="seprated-rangepicker">
              <DatePicker
                className="seprated-rangepicker--input input-from"
                size="large"
                showTime={showTime}
                disabledDate={this.disabledStartDate}
                format={format ? format : "YYYY-MM-DD HH:mm:ss"}
                value={startValue}
                placeholder={startPlaceholder ? startPlaceholder : "Start Date"}
                onChange={this.onStartChange}
                onOpenChange={this.handleStartOpenChange}
                {...rest}
              />
              <DatePicker
                className="seprated-rangepicker--input input-to"
                size="large"
                showTime={this.props.showTime}
                disabledDate={this.disabledEndDate}
                format={format ? format : "YYYY-MM-DD HH:mm:ss"}
                value={endValue}
                placeholder={endPlaceholder ? endPlaceholder : "End Date"}
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
                startPlaceholder ? startPlaceholder : "Start Date",
                endPlaceholder ? endPlaceholder : "End Date"
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

export default GregorianCalendar;
