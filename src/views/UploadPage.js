import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import tabBarBottomIcon from '../utils/Icons' 

export default class UploadPage extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => tabBarBottomIcon('camera') 
  }

  render() {
    return(
      <View>
        <Text>upload page</Text>
      </View>
    )
  }
}