import moment from 'moment';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

@connect(({ tags }) => ({ tags }))
export default class Event extends PureComponent {
  static propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderLocationRow()}
        {this.renderTimeRow()}
        {this.renderTagsRow()}
      </View>
    );
  }

  renderLocationRow() {
    return (
      <View style={styles.row}>
        <Text style={[styles.label, styles.labelFixed]}>Start in</Text>

        <Text style={styles.value}>Moscow</Text>
      </View>
    );
  }

  renderTimeRow() {
    const { date } = this.props;

    return (
      <View style={styles.row}>
        <Text style={[styles.label, styles.labelFixed]}>when</Text>

        <TouchableOpacity style={styles.calendarButton}>
          <Text style={styles.valueTime}>{moment(date).format('DD.MM.YYYY')}</Text>

          <Icon color="#c3c3c3" name="calendar" size={27} style={styles.calendarIcon} />
        </TouchableOpacity>
      </View>
    );
  }

  renderTagsRow() {
    const { tags } = this.props;

    return (
      <View style={styles.area}>
        <Text style={styles.label}>#Tag your event</Text>

        <View style={styles.tagsContainer}>
          {
            tags.map((tag, index) => (
              <TouchableOpacity key={tag} style={styles.tag}>
                <Text style={styles.tagText}>#{tag}</Text>
              </TouchableOpacity>
              )
            )
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
  row: {
    alignItems: 'flex-end',
    borderBottomColor: '#f5f5f5',
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 55,
    padding: 15,
  },
  area: {
    padding: 15,
  },
  label: {
    color: '#b6b6b6',
    fontSize: 19,
  },
  labelFixed: {
    width: 70,
  },
  value: {
    color: '#000000',
    fontSize: 20,
  },
  valueTime: {
    color: '#000000',
    fontSize: 21,
  },
  calendarIcon: {
    marginLeft: 15,
  },
  calendarButton: {
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  tag: {
    borderColor: '#9d9d9d',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 7,
    marginRight: 7,
    paddingHorizontal: 12,
    paddingVertical: 9,
  },
  tagText: {
    color: '#a8a8a8',
    fontSize: 16,
  },
});