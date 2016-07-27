import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionFetchData from '../actions/actionFetchData';
import ImageList from '../components/imageList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

class RenderPage extends Component {
  render() {
    const {state, actionFetchData } = this.props;
    let actions = Object.assign({}, actionFetchData);

    return(
      <View style={styles.container}>
        <ImageList
          {...actions} 
          images={state.Images.Images} 
          topBarSta={state.Topics.topBarSta} />
      </View>
    );
  }
}

export default connect(
  state => ({
    state: state,
  }),
  dispatch => ({
    actionFetchData: bindActionCreators(actionFetchData, dispatch)
  })
)(RenderPage);

