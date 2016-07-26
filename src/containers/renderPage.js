import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionImage from '../actions/Action_getImages';
import ImageList from '../components/imageList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

class RenderPage extends Component {
  render() {
    const {stateImages, stateTopics, actionImage} = this.props;
    return(
      <View style={styles.container}>
        <ImageList 
          {...actionImage} 
          ImageInfo={stateImages.initialState.Images} />
      </View>
    );
  }
}

export default connect(
  state => ({
    stateImages: state.GetImages,
    stateTopics: state.GetTopics,
  }),
  dispatch => ({
    actionImage: bindActionCreators(actionImage, dispatch)
  })
)(RenderPage);

