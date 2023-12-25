/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Circles from './demo/Circles';
import Ellipses from './demo/Ellipses';
import PaginationDemo from './demo/PaginationDemo';
import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => Circles);
// AppRegistry.registerComponent(appName, () => Ellipses);
AppRegistry.registerComponent(appName, () => PaginationDemo);
