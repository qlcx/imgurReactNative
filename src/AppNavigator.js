import React, { Component } from 'react'
import { BackAndroid } from 'react-native'
import { connect } from 'react-redux'
import { addNavigationHelpers, TabNavigator } from 'react-navigation'

import tabBarBottomIcon from './utils/Icons' 

import HomeStack from './views/HomeStack/HomeStack'
import ChatPage from './views/ChatPage'
import UploadPage from './views/UploadPage'
import NotificationPage from './views/notificationPage'
import UserPage from './views/UserPage'

export const AppNavigator = TabNavigator({
  Home: { 
    screen: HomeStack,
    navigationOptions: { tabBarIcon: ({ tintColor }) => tabBarBottomIcon('home') }
  },
  ChatPage: { 
    screen: ChatPage,
    navigationOptions: { tabBarIcon: ({ tintColor }) => tabBarBottomIcon('commenting') }
  },
  UploadPage: { 
    screen: UploadPage,
    navigationOptions: { tabBarIcon: ({ tintColor }) => tabBarBottomIcon('camera') }
  },
  NotificationPage: { 
    screen: NotificationPage,
    navigationOptions: { tabBarIcon: ({ tintColor }) => tabBarBottomIcon('bell') }
  },
  UserPage: { 
    screen: UserPage,
    navigationOptions: { tabBarIcon: ({ tintColor }) => tabBarBottomIcon('user') }
  },
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    style: {
      backgroundColor: '#33353d'
    }
  }
})

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
    // const { dispatch, nav } = this.props
    // let navigation = addNavigationHelpers({ dispatch, state: nav })    

    // if (navigation.state.index) {
    //   navigation.goBack()
    //   return true
    // }

    // 退出软件
    return false
  }

  render() {
    // const { dispatch, nav } = this.props

    return  <AppNavigator />
  }
}

// const mapStateToProps = state => ({
//   nav: state.router.nav,
// })

// export default connect(mapStateToProps)(AppWithNavigationState)
export default AppWithNavigationState
