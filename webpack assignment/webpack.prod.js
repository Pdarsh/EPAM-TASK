const { merge } = require("webpack-merge");
const path = require('path')
const commonConfig = require("./webpack.common.js");

const prodConfig = {
  mode: "production",
};

module.exports = merge(commonConfig, prodConfig);