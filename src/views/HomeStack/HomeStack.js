import { StackNavigator } from 'react-navigation'

import Home from './Home'

const HomeStack = StackNavigator({
  Home: { screen: Home },
})

export default HomeStack