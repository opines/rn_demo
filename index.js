/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Circles from './demo/Circles';
import Ellipses from './demo/Ellipses';
import PaginationDemo from './demo/PaginationDemo';
import LinearGradient1 from './demo/LinearGradient1';
import SvgComponentPlaceholderTestDemo from './demo/SvgComponentPlaceholderTestDemo';
import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => Circles);
// AppRegistry.registerComponent(appName, () => Ellipses);
AppRegistry.registerComponent(appName, () => PaginationDemo);
// AppRegistry.registerComponent(appName, () => LinearGradient1);
// AppRegistry.registerComponent(appName, () => SvgComponentPlaceholderTestDemo);
