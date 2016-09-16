var path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    webpack = require('webpack');

root_path = path.join(__dirname, '..');

module.exports = function make(env) {
    return {
        devtool: getDevtool(env),
        entry: getEntry(env),
        plugins: getPlugins(env),
        resolve: {
            extensions: ['', '.ts', '.js', '.scss', '.css', '.html']
        },
        module: {
            loaders: [
                {test: /\.ts$/, loader: 'ts!angular2-template', exclude: /node_modules/},
                {test: /\.css$/, loader: 'to-string!css'},
                {test: /\.scss$/, loader: 'to-string!css!sass'},
                {test: /\.html$/, loader: 'html?-minimize'}
            ]
        }
    }
};

function getDevtool(env) {
    if (isTest(env))
        return 'eval';

    if (isProd(env))
        return 'cheap-module-source-map'

    return 'source-map';
}

function getEntry(env) {
    if (isTest(env))
        return undefined;

    return {
        vendor: path.join(root_path, './src/vendor.ts'),
        app: path.join(root_path, './src/main.ts')
    };
}

function getPlugins(env) {
    var plugins = [
        new HtmlWebpackPlugin({
            template: path.join(root_path, './src/index.html'),
            filename: 'index.html',
            inject: 'body'
        }),
        new webpack.DefinePlugin({
            process: {
                env: {
                    ENV: JSON.stringify(env)
                }
            }
        })
    ];

    if (isProd(env)) {
        plugins.push(new CopyWebpackPlugin([
            { from: path.join(root_path, 'config.prod.json'), to: 'config.json' }
        ]));
    } else {
        plugins.push(new CopyWebpackPlugin([
            { from: path.join(root_path, 'config.local.json'), to: 'config.json' }
        ]))
    }

    if (isTest(env))
        return plugins;

    plugins.push(new webpack.optimize.DedupePlugin());
    plugins.push(new webpack.optimize.OccurenceOrderPlugin());
    plugins.push(new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity
    }));

    if (isProd(env))
        plugins.push(new webpack.optimize.UglifyJsPlugin({
            mangle: false
        }));

    return plugins;
}

function isTest(env) {
    return env === 'test';
}

function isProd(env) {
    return env === 'prod';
}