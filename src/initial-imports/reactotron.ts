//import AsyncStorage from '@react-native-community/async-storage';
import Reactotron, {
  networking,
  ReactotronReactNative,
  trackGlobalErrors,
  openInEditor,
  asyncStorage,
} from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';

let reactotron: ReactotronReactNative | null = null;

if (__DEV__) {
  reactotron = Reactotron.configure({
    host: '192.168.1.117',
  }).setAsyncStorageHandler!(AsyncStorage)
    .useReactNative()
    //.use(asyncStorage({ display: 'json' }))
    .use(trackGlobalErrors({}))
    .use(networking())
    .use(openInEditor())
    .connect();
}

export const configuredReactotron = reactotron;
