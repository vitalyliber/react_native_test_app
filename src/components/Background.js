import React, { PureComponent } from 'react';
import {
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { bindActionCreators } from "redux";

class Background extends PureComponent {
  render() {
    const { children, footer, datepicker } = this.props;

    return (
      <ImageBackground
        source={require('../img/travel.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>I gonna</Text>

            <TouchableOpacity style={styles.typeButton}>
              <Text style={styles.typeTitle}>Travel</Text>

              <Icon color="#d5bf9b" name="chevron-down" size={24} style={styles.typeIcon} />
            </TouchableOpacity>
          </View>

          {children}
        </View>

        { !datepicker && Platform.OS === 'ios' &&
          footer
        }
      </ImageBackground>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {},
    dispatch
  );

const mapStateToProps = state => ({
  datepicker: state.datepicker,
});

export default connect(mapStateToProps, mapDispatchToProps)(Background);

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  contentContainer: {
    backgroundColor: 'transparent',
    paddingHorizontal: 10,
  },
  headerContainer: {
    paddingHorizontal: 5,
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
  },
  typeButton: {
    alignItems: 'center',
    flexDirection: 'row', 
  },
  typeTitle: {
    color: '#d5bf9b',
    fontSize: 58,
    marginTop: -5,
  },
  typeIcon: {
    marginLeft: 10,
  },
  nextButton: {
    bottom: 0,
    left: 0,
    marginTop: 50,
    position: 'absolute',
    width: '100%',
  },
});
