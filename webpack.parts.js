const path = require("path");
const APP_SOURCE = path.join(__dirname, "src");

exports.loadJavaScript = () => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        include: APP_SOURCE, // Consider extracting as a parameter
        use: "babel-loader",
      },
    ],
  },
});