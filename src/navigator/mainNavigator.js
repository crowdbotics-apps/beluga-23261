import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen2183320Navigator from '../features/BlankScreen2183320/navigator';
import BlankScreen1183319Navigator from '../features/BlankScreen1183319/navigator';
import BlankScreen0183318Navigator from '../features/BlankScreen0183318/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen2183320: { screen: BlankScreen2183320Navigator },
BlankScreen1183319: { screen: BlankScreen1183319Navigator },
BlankScreen0183318: { screen: BlankScreen0183318Navigator },

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
