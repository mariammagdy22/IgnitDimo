import { StackNavigator } from 'react-navigation'
import BreedsList from '../Containers/BreedsList'
import LaunchScreen from '../Containers/LaunchScreen'
import React from "react";
import { Scene, Actions } from 'react-native-router-flux';

import styles from './Styles/NavigationStyles'

const PrimaryNav = Actions.create(
  <Scene key="root" hideNavBar>
    <Scene key="home" component={BreedsList} />
  </Scene>,
)

export default PrimaryNav