module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
        alias: {
          "@View": "./src/view",
          "@Resources": "./src/resources",
          "@Utils": "./src/utils",
          "@Navigation": "./src/navigation",
          "@State": "./src/state",
          "@Api": "./src/api",
        },
      },
    ],
  ],
};
