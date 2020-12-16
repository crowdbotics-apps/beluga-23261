import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen5183575Navigator from '../features/BlankScreen5183575/navigator';
import BlankScreen4183574Navigator from '../features/BlankScreen4183574/navigator';
import BlankScreen3183321Navigator from '../features/BlankScreen3183321/navigator';
import BlankScreen2183320Navigator from '../features/BlankScreen2183320/navigator';
import BlankScreen0183318Navigator from '../features/BlankScreen0183318/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen5183575: { screen: BlankScreen5183575Navigator },
BlankScreen4183574: { screen: BlankScreen4183574Navigator },
BlankScreen3183321: { screen: BlankScreen3183321Navigator },
BlankScreen2183320: { screen: BlankScreen2183320Navigator },
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
