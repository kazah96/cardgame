const path = require("path");

module.exports = {
  mode: "development",
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, "client/public"),
    filename: "bundlick.js",
  },
  resolve: {
    extensions: [".css", ".wasm", ".mjs", ".js", ".json", ".jsx"],
    alias: {
      components: path.resolve(__dirname, "client/components"),
      images: path.resolve(__dirname, "client/images"),
      actions: path.resolve(__dirname, "client/actions"),
      reducers: path.resolve(__dirname, "client/reducers"),
    },
  },
  module: {
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        test: /\.(js|jsx|mjs)$/,
        enforce: "pre",
        // these are matching conditions, each accepting a regular expression or string
        // test and include have the same behavior, both must be matched
        // exclude must not be matched (takes preference over test and include)
        // Best practices:
        // - Use RegExp only in test and for filename matching
        // - Use arrays of absolute paths in include and exclude

        // - Try to avoid exclude and prefer include

        // flags to apply these rules, even if they are overridden (advanced option)
        loader: "babel-loader",
        // the loader which should be applied, it'll be resolved relative to the context
        // -loader suffix is no longer optional in webpack2 for clarity reasons
        options: {
          plugins: ["@babel/plugin-transform-react-jsx", "@babel/plugin-proposal-class-properties"],
          presets: ["@babel/preset-env", "@babel/preset-react"],

        },
        // see webpack 1 upgrade guide

        // options for the loader
      },
      {
        test: /\.css/,
        loader: "style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]",

      },
      {
        test: /\.(jpg|png)/,
        loader: "file-loader",
        options: {
          limit: 100000,
          name: "[name].[hash:8].[ext]",
          outputPath: "eeed/",
        },

      },
    ],
  },
};
