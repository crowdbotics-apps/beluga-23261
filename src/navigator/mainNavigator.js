import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList4189208Navigator from '../features/ArticleList4189208/navigator';
import BlankScreen2189207Navigator from '../features/BlankScreen2189207/navigator';
import SignIn41186093Navigator from '../features/SignIn41186093/navigator';
import BlankScreen0186092Navigator from '../features/BlankScreen0186092/navigator';
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
ArticleList4189208: { screen: ArticleList4189208Navigator },
BlankScreen2189207: { screen: BlankScreen2189207Navigator },
SignIn41186093: { screen: SignIn41186093Navigator },
BlankScreen0186092: { screen: BlankScreen0186092Navigator },
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
