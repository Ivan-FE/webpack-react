/* 
* @Author: johan
* @Date:   2016-04-15 12:55:06
* @Last Modified By:   johan
* @Last Modified time: 2016-04-15 18:38:35
*/

'use strict';

const path = require("path"); //nodejs path模块
const htmlwebpack = require("html-webpack-plugin"); // webpack自动创件html
const node_modules = path.resolve(__dirname,'node_modules');
//const pathToReact = path.resolve(node_modules,'react/dist/react.min.js');

module.exports = {
    entry:['webpack/hot/dev-server',path.resolve(__dirname,'app/entry.jsx')] ,
    // resolve: {
    //     alias: {
    //         'react': pathToReact
    //     }
    // },
    output: {
        path: path.resolve(__dirname,'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: node_modules,
                loader: 'babel',
                query: {
                  presets: ['es2015', 'react']
                }
            }
        ],
        noParse:[pathToReact]
    },
    plugins: [
        new htmlwebpack({
            title:'myapp'
        })
    ]
}