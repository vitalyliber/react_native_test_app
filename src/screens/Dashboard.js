import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';

import Background from '../components/Background';
import Card from '../components/Card';
import PanelButton from '../components/PanelButton';

export default class Dashboard extends PureComponent {
  state = {
    date: new Date(),
  };

  render() {
    const { date } = this.state;

    return (
      <Background footer={this.renderFooter()}>
        <Card date={date} />
      </Background>
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