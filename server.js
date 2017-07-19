'use strict';
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const open = require('open');
var port = 8080;
var config = require("./webpack.config.js");

for (var key in config.entry) {
    var ar = config.entry[key];
    ar.unshift("webpack-dev-server/client?http://0.0.0.0:"+port+"/", "webpack/hot/dev-server");
}

config.plugins = config.plugins || [];
config.plugins.push(new webpack.HotModuleReplacementPlugin());

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, config.devServer);



server.listen(port, '0.0.0.0', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('Listening at localhost:' + port);
    console.log('Opening your system browser...');
    open('http://127.0.0.1:' + port + '/webpack-dev-server/');
});
