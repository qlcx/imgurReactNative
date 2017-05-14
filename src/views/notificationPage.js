import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import tabBarBottomIcon from '../utils/Icons'

export default class NotificationPage extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => tabBarBottomIcon('bell') 
  }

  render() {
    return(
      <View>
        <Text>notification page</Text>
      </View>
    )
  }
}