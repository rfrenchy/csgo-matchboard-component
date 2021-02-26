// Whilst the configuration object can be modified here, the recommended way of making
// changes is via the presets' options or Neutrino's API in `.neutrinorc.js` instead.
// Neutrino's inspect feature can be used to view/export the generated configuration.
const neutrino = require("neutrino");
const CopyPlugin = require("copy-webpack-plugin");

const config = neutrino().webpack();

const tsLoader = {
  test: /\.tsx?$/,
  loader: "ts-loader",
};

config.module.rules.unshift(tsLoader);

config.plugins.unshift(
  new CopyPlugin({
    patterns: [
      {
        from: "**/*.d.ts",
        context: "./src",
        to: "[name].[ext]",
      },
    ],
  })
);

module.exports = {
  ...config,
  entry: {
    app: "./src/components/Matchboard/index.js",
  },
  output: {
    path: `${__dirname}/lib/Matchboard`,
    filename: "index.js",
    libraryTarget: "umd",
  },
  optimization: {
    minimize: false,
  },
};
