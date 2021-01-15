import React from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/home'
const AppNavigation = createStackNavigator(
  {
    Home:{screen:Home},


  },{
    headerMode:'none'
  })
export default AppNavigation