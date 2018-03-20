import React, { PureComponent, Fragment } from 'react';
import { StyleSheet } from 'react-native';

import Background from '../components/Background';
import Card from '../components/Card';
import PanelButton from '../components/PanelButton';
import DatePicker from "../components/DatePicker"

export default class Dashboard extends PureComponent {

  render() {
    return (
      <Fragment>
        <Background footer={this.renderFooter()}>
          <Card/>
        </Background>
        <DatePicker/>
      </Fragment>
    );
  }

  renderFooter() {
    return (
      <PanelButton icon="long-arrow-right" label="Next" style={styles.nextButton} />
    );
  }
}

const styles = StyleSheet.create({
  nextButton: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    width: '100%',
  },
});