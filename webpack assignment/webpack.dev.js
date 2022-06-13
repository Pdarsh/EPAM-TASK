const { merge } = require("webpack-merge");
const path = require('path')
const commonConfig = require("./webpack.common.js");

const devConfig = {
  mode: "development",
};

module.exports = merge(commonConfig, devConfig);