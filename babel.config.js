module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@src': './',
          '@components': './src/components',
          '@store': './src/store',
          '@utils': './src/utils',
          '@constants': './src/consts',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
