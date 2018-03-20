import React, { PureComponent, Fragment } from 'react';
import { Platform } from 'react-native';
import {
  StyleSheet,
  DatePickerIOS,
  DatePickerAndroid,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { date_set } from "../actions/date";
import { datepicker_close } from "../actions/datepicker";

class DatePicker extends PureComponent {
  render() {
    const { date, date_set, datepicker } = this.props;

    if (datepicker && Platform.OS === 'ios') {
      return <DatePickerIOS style={styles.datePicker}
                            date={date}
                            onDateChange={date_set}
                            mode='date'
      />
    }
    return null
  }

  componentWillReceiveProps(nextProps) {
    const { datepicker } = nextProps;
    const { datepicker_close } = this.props;

    if (datepicker && Platform.OS === 'android') {
      datepicker_close();
      this.DatePickerAndroid();
    }
  }

  DatePickerAndroid = async () => {
    const { date_set, date } = this.props;

    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        date: date
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        date_set(new Date(year, month, day))
      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      date_set,
      datepicker_close,
    },
    dispatch
  );

const mapStateToProps = state => ({
  date: state.date,
  datepicker: state.datepicker,
});

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);

const styles = StyleSheet.create({
  datePicker: {
    marginTop: 5,
    backgroundColor: '#ffffff',
  },
});
