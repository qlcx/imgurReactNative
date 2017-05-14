import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import tabBarBottomIcon from '../utils/Icons' 

export default class Home extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => tabBarBottomIcon('home') 
  }

  render() {
    return (
      <View>
        <Text>Home Page</Text>
        <Button 
          onPress={() => this.props.navigation.dispatch({type: 'TopicsPage'})}
          title='click me' />
      </View>
    )
  }
}