import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { StackNavigator } from 'react-navigation'

import Home from './Home'
import TopicsPage from './TopicsPage'

const HomeNavigator = StackNavigator({
  Home: { screen: Home },
  TopicsPage: { screen: TopicsPage },
})

class HomeStack extends Component {
  render() {
    return <HomeNavigator />
  }
}

export default HomeStack