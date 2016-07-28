'use strict';
import React, { Component } from 'react';
import { 
  StyleSheet, 
  View, 
  Text,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native';

import * as IconType from '../constants/icons'; 
import * as types from '../actions/actionsConstant';

const { height, width } = Dimensions.get('window');
const TOPBAR_HEIGHT = height / 11;
const ICON_DOWN_SECTION = width / 2;
const ICON_REMAIN_SECTION = width / 8;

const styles = StyleSheet.create({
  topBar: {
		height: TOPBAR_HEIGHT,
		width: width,
		flexDirection: 'row',
		backgroundColor: '#222222',
	},

  iconDownSection: {
    height: TOPBAR_HEIGHT,
    width: ICON_DOWN_SECTION,
  },

  iconRemainSection: {
    height: TOPBAR_HEIGHT,
    width: ICON_REMAIN_SECTION,
    justifyContent: 'center',
  }


});

export default class TopBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arrowAnim: new Animated.Value(0),
    };

    this._onPress = this._onPress.bind(this);
  }

  componentWillMount() {
    const { getsData } = this.props;
    getsData('topics/defaults', types.GET_TOPICS);
  }

  _onPress() {
    const { setTopBarStatus, topBarSta } = this.props;
    if(!this.arrowAnimValue) {
      setTopBarStatus(true, topBarSta);
    } else {
      setTopBarStatus(false, topBarSta);
    }
    
    Animated.timing(
      this.state.arrowAnim,
      {
        toValue: this.arrowAnimValue ? 0 : 1,
        duration: 200,
      },
    )
    .start(() => {
      this.arrowAnimValue = !this.arrowAnimValue;
    });
  }

  render() {
    const { topics, topBarSta } = this.props;
    let topBarStaName = topBarSta ? topBarSta.name : ''; 

    return(
      <View style={styles.topBar}> 
        <View style={styles.iconDownSection}>
          <TouchableOpacity
            style={{ 
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }} 
            onPress={this._onPress.bind(this)} >
            <Text
              numberOfLines={1} 
              style={{
                width: width / 5,
                marginHorizontal: 10, 
                color: '#fff', 
                fontSize: 16
              }} >
              {topBarStaName}
            </Text>
            <Animated.View 
              style={{
                transform: [{
                  rotateZ: this.state.arrowAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '180deg']
                  })
                }]
              }}>
              {IconType.ICON_DOWN}
            </Animated.View>
          </TouchableOpacity>
        </View>
        <View style={styles.iconRemainSection}>
          {IconType.ICON_USER}
        </View>
        <View style={styles.iconRemainSection}>
          {IconType.ICON_BELL}
        </View>
        <View style={styles.iconRemainSection}>
          {IconType.ICON_SEARCH}
        </View>
        <View style={styles.iconRemainSection}>
          {IconType.ICON_SORT}
        </View>
      </View>
    );
  }
}