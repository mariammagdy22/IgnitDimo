import { StackNavigator } from 'react-navigation'
import BreedsDetails from '../Containers/BreedsDetails'
import BreedsList from '../Containers/BreedsList'
import LaunchScreen from '../Containers/LaunchScreen'
import React from "react";
import { Scene, Actions,Router } from 'react-native-router-flux';

import styles from './Styles/NavigationStyles'

const PrimaryNav = Actions.create(
  <Scene key="root" hideNavBar>
    <Scene  initial key="home" component={BreedsList} />
    <Scene  key="page" component={BreedsDetails} />
  </Scene>
)

export default PrimaryNav