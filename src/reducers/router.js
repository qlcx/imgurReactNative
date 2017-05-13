import { combineReducers } from 'redux'
import { NavigationActions } from 'react-navigation'

import { AppNavigator } from '../AppNavigator'

const HomeAction = AppNavigator.router.getActionForPathAndParams('Home')
const tempNavState = AppNavigator.router.getStateForAction(HomeAction)
const TopicsPageAction = AppNavigator.router.getActionForPathAndParams('TopicsPage')
// const initialNavState = AppNavigator.router.getStateForAction(HomeAction, tempNavState)
const initialNavState = AppNavigator.router.getStateForAction(HomeAction)

function nav(state = initialNavState, action) {
  switch(action.type) {
    case 'Home':
    case 'TopicsPage':
      return AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'TopicsPage' }), state)    
    default:
      // 返回
      return AppNavigator.router.getStateForAction(action, state)
  }

  return state
}

export default combineReducers({
  nav,
})