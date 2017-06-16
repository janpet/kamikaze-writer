module.exports = {
  context: __dirname,
    entry: [
        "./src/js/index.js"
    ],
    output: {
        path: __dirname + "/src/",
        filename: "bundle.js"
    },
    devtool: "inline-source-map",
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: "babel",
            query: {
                presets: ["react", "es2015", "stage-1"]
            }
        }]
    },
    resolve: {
        extensions: ["", ".js", ".jsx"]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: "./"
    }
};
