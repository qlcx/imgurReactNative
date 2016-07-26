import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/Action_getImages';
import ImageList from '../components/imageList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

class RenderPage extends Component {
  render() {
    const {state, actions} = this.props;
    return(
      <View style={styles.container}>
        <ImageList />
      </View>
    );
  }
}

export default connect(
  state => ({
    state: state.GetTopics
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(RenderPage);

