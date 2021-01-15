//AuthNavigation.js
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../authentication/login';

const AuthNavigation = createStackNavigator(
  {
    Login: {screen: Login},
  },
  {
    headerMode: 'none',
  },
);

export default AuthNavigation;
