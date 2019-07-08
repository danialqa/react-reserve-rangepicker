/* @flow */

import React, { PureComponent } from "react";
import { DatePicker, LocaleProvider, Icon } from "antd";
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

  render() {
    const {
      seprated,
      showTime,
      format,
      startPlaceholder,
      endPlaceholder
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
                format={format ? format : "jYYYY-jMM-jDD HH:mm:ss"}
                value={startValue}
                placeholder={startPlaceholder ? startPlaceholder : "Start Date"}
                onChange={this.onStartChange}
                onOpenChange={this.handleStartOpenChange}
              />
              <DatePicker
                className="seprated-rangepicker--input input-to"
                size="large"
                showTime={this.props.showTime}
                disabledDate={this.disabledEndDate}
                format={format ? format : "jYYYY-jMM-jDD HH:mm:ss"}
                value={endValue}
                placeholder={endPlaceholder ? endPlaceholder : "End Date"}
                onChange={this.onEndChange}
                open={endOpen}
                onOpenChange={this.handleEndOpenChange}
              />
            </div>
          ) : (
            <RangePicker
              size="large"
              showTime={showTime}
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
                    range(
                      this.props.disabledHourFrom,
                      this.props.disabledHourTo
                    ),
                  disabledMinutes: () =>
                    range(
                      this.props.disabledMinuteFrom,
                      this.props.disabledMinuteTo
                    )
                };
              }}
            />
          )}
        </div>
      </LocaleProvider>
    );
  }
}

export default PersianCalendar;
