var webpack = require('webpack');
var  BrowserSyncPlugin  =  require('browser-sync-webpack-plugin'); 

module.exports = {
    entry: {
        './resources/word-to-picture.js': './src-client/word-to-picture.ts',
    },
    output: {
        path: './',
        filename: '[name]'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [{
            test: /\.tsx?$/,
            loader: 'ts-loader'
        }]
    },
      ts:  {
        exclude: []
    },
    plugins: [new  BrowserSyncPlugin({  
            host:   'localhost',
                  port:  3000,
                  server:  { 
                baseDir:  ['./resources'] 
            }    
        })
        // // Uglify
        // , new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: true,
        //     mangle: false,
        //     test: /\.(js|jsx)$/
        // })
    ]

};