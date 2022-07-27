module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "transform-inline-environment-variables",
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          root: ["./"],
          extensions: [
            ".ios.js",
            ".android.js",
            ".js",
            ".ts",
            ".tsx",
            ".json",
            ".cjs",
            ".reaaca173c4",
            ".native.aca173c4",
          ],
          alias: {
            "@config": "./src/config", // <— remove /*
          },
        },
      ],
    ],
  };
};
