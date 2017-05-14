import React, { Component } from 'react'
import { BackAndroid, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation'

import Home from './views/Home'
import ChatPage from './views/ChatPage'
import UploadPage from './views/UploadPage'
import NotificationPage from './views/notificationPage'
import UserPage from './views/UserPage'
import TopicsPage from './views/TopicsPage'

import Icons from 'react-native-vector-icons/FontAwesome'

export const AppNavigator = TabNavigator({
  Home: { screen: Home },
  ChatPage: { screen: ChatPage },
  UploadPage: { screen: UploadPage },
  NotificationPage: { screen: NotificationPage },
  UserPage: { screen: UserPage },
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      style: {
        backgroundColor: '#33353d'
      }
    }
  }
)


class AppWithNavigationState extends Component {
  constructor(props) {
    super(props)

    this.handleHardBackPress = this.handleHardBackPress.bind(this)
  }

  componentWillMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.handleHardBackPress)
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.handleHardBackPress)
  }

  handleHardBackPress() {
    const { dispatch, nav } = this.props
    let navigation = addNavigationHelpers({ dispatch, state: nav })    

    if (navigation.state.index) {
      navigation.goBack()
      return true
    }

    // 退出软件
    return false
  }

  render() {
    const { dispatch, nav } = this.props

    return  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
  }
}

const mapStateToProps = state => ({
  nav: state.router.nav,
})

export default connect(mapStateToProps)(AppWithNavigationState)
