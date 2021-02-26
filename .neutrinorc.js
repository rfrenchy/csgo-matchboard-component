const reactComponents = require("@neutrinojs/react-components");
const jest = require("@neutrinojs/jest");
const neutrino = require("neutrino");

// Function format
module.exports = (neutrino) => {
  // access the Neutrino API

  neutrino.config.module
    .rule("compile")
    .use("babel")
    .tap((options) =>
      merge(options, {
        plugins: ["@babel/preset-typescript"],
      })
    );
};

module.exports = {
  options: {
    root: __dirname,
  },
  use: [reactComponents(), jest()],
};
