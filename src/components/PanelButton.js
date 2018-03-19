import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Button extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
  };

  render() {
    const { label, icon, style, ...props } = this.props;

    return (
      <TouchableOpacity {...props} style={[styles.container, style]}>
        <Text style={styles.label}>
          {label.toUpperCase()}
        </Text>

        {
          icon != null && (
            <Icon name={icon} size={14} style={styles.icon} />
          )
        }
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    backgroundColor: '#EBBF73',
    flexDirection:'row',
    height: 60,
    justifyContent:'center',
  },
  label: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight:'bold',
    color: '#2C2C2C',
  },
  icon:{
    marginLeft: 10,
  }
});