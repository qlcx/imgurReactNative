import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionFetchData from '../actions/actionFetchData';
import TopicList from '../components/topicList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
})

class TopicsContainer extends Component {
  render() {
    const { state, navigator, actionFetchData } = this.props;
    let actions = Object.assign({}, actionFetchData);

    return(
      <View style={styles.container}>
        <TopicList 
          {...actions}
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
  }),
  dispatch => ({
    actionFetchData: bindActionCreators(actionFetchData, dispatch),
  })
)(TopicsContainer);