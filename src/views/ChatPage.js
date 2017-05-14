import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import tabBarBottomIcon from '../utils/Icons' 

export default class ChatPage extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => tabBarBottomIcon('commenting') 
  }

  render() {
    return(
      <View>
        <Text>chat page</Text>
      </View>
    )
  }
}