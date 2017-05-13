import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native'

export default class Home extends Component {
  static navigationOptions = {
    headerLeft: <Button onPress={() => console.log('click event')} title='Home' /> 
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