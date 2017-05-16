import { combineReducers } from 'redux'
import { NavigationActions } from 'react-navigation'

import { AppNavigator } from '../AppNavigator'

const HomeAction = AppNavigator.router.getActionForPathAndParams('ChatPage')
const initialNavState = AppNavigator.router.getStateForAction(HomeAction)

function nav(state, action) {
  switch(action.type) {  
    default:
      // 返回
      return AppNavigator.router.getStateForAction(action, state)
  }

  return state
}

export default combineReducers({
  nav,
})