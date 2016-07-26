import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ListView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import * as types from '../actions/actionsConstant';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  }
});

export default class ImageList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { getsData, topBarSta } = this.props;
    if(topBarSta){
      getsData('topics/' + topBarSta.id, types.GET_IMAGES);
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.topBarSta && this.topBarSta_cpy != nextProps.topBarSta) {
      nextProps.getsData('topics/' + nextProps.topBarSta.id, types.GET_IMAGES);
    }
    this.topBarSta_cpy = nextProps.topBarSta
  }

  render() {
    const { images } = this.props;
    let aa = '';
    if(images)
       aa = <Image source={{uri: 'http://i.imgur.com/' + images[0].id + 'h.jpg'}} style={{width: 100, height: 100}} />;
    return(
      <View style={styles.container}>
      <Text>
        {aa}
        </Text>
      </View>
    );
  }
}