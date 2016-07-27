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
  },
})

class TopicsContainer extends Component {
  render() {
    return(
      <View />
    );
  }
}

export default connect(
)(TopicsContainer)