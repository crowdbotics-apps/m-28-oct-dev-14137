import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen213359Navigator from '../features/BlankScreen213359/navigator';
import BlankScreen113358Navigator from '../features/BlankScreen113358/navigator';
import BlankScreen013357Navigator from '../features/BlankScreen013357/navigator';
import BlankScreen013350Navigator from '../features/BlankScreen013350/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen213359: { screen: BlankScreen213359Navigator },
BlankScreen113358: { screen: BlankScreen113358Navigator },
BlankScreen013357: { screen: BlankScreen013357Navigator },
BlankScreen013350: { screen: BlankScreen013350Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
