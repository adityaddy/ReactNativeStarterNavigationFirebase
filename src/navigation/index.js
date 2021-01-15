import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import AuthNavigation from './AuthNavigation'
import AppNavigation from './AppNavigation'
import AuthLoadingScreen from '../authentication/loadAuth'

const SwitchNavigator = createSwitchNavigator(
  {
    AuthLoad:AuthLoadingScreen,
    Auth: AuthNavigation,
    App: AppNavigation
  },
  {
    initialRouteName: 'AuthLoad',
  }
)

const AppContainer = createAppContainer(SwitchNavigator)

export default AppContainer