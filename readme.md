# Publish a new version

1.  Replace main with `index.ts` on `package.json`
2.  Delete all dependencies from `package.json`
3.  npm publish

# Development

1.  Replace main with `node_modules/expo/AppEntry.js` in `package.json`
2.  Add all packages again to dependencies in `package.json`
3.  `expo start` or `npm start` and scan QR code on `expo go`

# Dependencies of package.json

```json
    "@akalli/icons": "^0.0.6",
    "@react-native-async-storage/async-storage": "~1.17.3",
    "@react-navigation/drawer": "^6.4.1",
    "@react-navigation/native": "^6.0.8",
    "@react-navigation/native-stack": "^6.4.1",
    "@react-navigation/stack": "^6.1.1",
    "babel-plugin-transform-inline-environment-variables": "^0.4.3",
    "expo": "~45.0.0",
    "expo-status-bar": "~1.3.0",
    "native-base": "^3.4.9",
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "react-native": "0.68.2",
    "react-native-reanimated": "^2.8.0",
    "react-native-safe-area-context": "4.2.4",
    "react-native-svg": "12.3.0",
    "react-native-web": "0.17.7",
    "react-redux": "^7.2.6",
    "redux-persist": "^6.0.0",
    "redux-persist-transform-filter": "^0.0.20",
    "@reduxjs/toolkit": "^1.7.2",
    "react-native-gesture-handler": "~2.2.1"
```
