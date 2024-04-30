# error react-native-camera

https://github.com/moaazsidat/react-native-qrcode-scanner
https://bobbyhadz.com/blog/react-native-viewproptypes-has-been-removed-from-react-native

# error 'deprecated-react-native-prop-types'

https://bobbyhadz.com/blog/react-native-viewproptypes-has-been-removed-from-react-native

# error #new target SDK 21 doesn't support runtime permissions

> adb uninstall androidx.test.services

https://stackoverflow.com/questions/63926908/android-test-orchestrator-com-android-ddmlib-installexception-26

# env cache clean

Got it fixed by generating GeneratedDotEnv.m on every build

Inside Edit scheme... -> Build -> Pre-actions

cp "${PROJECT_DIR}/../.env.production" "${PROJECT_DIR}/../.env"
"${SRCROOT}/../../../node_modules/react-native-config/ios/ReactNativeConfig/BuildXCConfig.rb" "${SRCROOT}/../.env" "${SRCROOT}/tmp.xcconfig"
"${SOURCE_ROOT}/../../../node_modules/react-native-config/ios/ReactNativeConfig/BuildDotenvConfig.rb" "${SOURCE_ROOT}/../.env" "${SOURCE_ROOT}/../../../node_modules/react-native-config/ios/ReactNativeConfig/"
^ Add this line and change relative path to your node_modules

# svg

https://www.npmjs.com/package/react-native-svg-transformer

### need update

moment
react-i18next

### need check

/screens/ProfileMenu
