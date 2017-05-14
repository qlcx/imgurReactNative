import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'
import tabBarBottomIcon from '../utils/Icons' 

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return <Text>Hello, Navigation!</Text>;
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
});

export default class Home extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => tabBarBottomIcon('home') 
  }

  render() {
    return (
      <ScrollView>
        <SimpleApp />
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
      </ScrollView>
    )
  }
}