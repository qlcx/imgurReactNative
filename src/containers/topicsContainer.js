import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
})

class TopicsContainer extends Component {
  render() {
    return(
      <View style={styles.container}>
      </View>
    );
  }
}

export default connect(
)(TopicsContainer)