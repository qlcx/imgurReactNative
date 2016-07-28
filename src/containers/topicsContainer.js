import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TopicList from '../components/topicList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
})

class TopicsContainer extends Component {
  render() {
    const { state, navigator } = this.props;

    return(
      <View style={styles.container}>
        <TopicList 
          status={state.status}
          topicsData={state.topics}
          navigator={navigator} />
      </View>
    );
  }
}

export default connect(
  state => ({
    state: state.Topics,
  })
)(TopicsContainer)