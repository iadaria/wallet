/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { Root } from './src/navigator';
import * as Sentry from '@sentry/react-native';
import { SENTRY_DSN } from 'src/config';
import './src/initial-imports';
import '@store/init';

Sentry.init({
  dsn: SENTRY_DSN,
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const App = () => <Root />;

const AppWithSentry = Sentry.wrap(App);

AppRegistry.registerComponent(appName, () => AppWithSentry);
