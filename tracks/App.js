import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import AccountScreen from './src/screens/AccountScreen'
import SigninScreen from './src/screens/AccountScreen'
import SignupScreen from './src/screens/AccountScreen'
import TrackCreateScreen from './src/screens/AccountScreen'
import TrackDetailScreen from './src/screens/AccountScreen'
import TrackListScreen from './src/screens/AccountScreen'

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createMaterialBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  })
})

export default createAppContainer(switchNavigator)
