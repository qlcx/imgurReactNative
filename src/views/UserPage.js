import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import tabBarBottomIcon from '../utils/Icons'

export default class UserPage extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => tabBarBottomIcon('user') 
  }

  render() {
    return(
      <View>
        <Text>user page</Text>
      </View>
    )
  }
}