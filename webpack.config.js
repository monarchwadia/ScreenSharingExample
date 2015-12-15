module.exports = {
    context: __dirname + "/app",
    entry: "./main",
    output: {
        path: __dirname + "/example",
        filename: "screencap.js"
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel' // 'babel-loader' is also a legal name to reference
        }
      ]
    }
}