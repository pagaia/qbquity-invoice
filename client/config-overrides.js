const path = require("path");
module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      invoice: path.resolve(__dirname, "src/components/invoice"),
      primitives: path.resolve(__dirname, "src/components/primitives"),
    },
  };
  return config;
};
