import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import SearchScreen from './src/screens/SearchScreen'
import RestaurantDetailScreen from './src/screens/RestaurantDetailScreen'

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    RestaurantShow: RestaurantDetailScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search',
    },
  })

export default createAppContainer(navigator)
