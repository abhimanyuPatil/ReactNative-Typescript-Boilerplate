var path = require('path');
const metroBundler = require('metro-bundler');

module.exports = {
  extraNodeModules: {
    'react-native': path.resolve(__dirname, 'node_modules/react-native'),
    react: path.resolve(__dirname, 'node_modules/react'),
  },
  getProjectRoots() {
    return [
      // Keep your project directory.
      path.resolve(__dirname),
      path.resolve(__dirname, '../native'), // path to the external module
    ];
  },
  getTransformModulePath() {
    return require.resolve('react-native-typescript-transformer');
  },
  getSourceExts() {
    return ['ts', 'tsx'];
  },
};
