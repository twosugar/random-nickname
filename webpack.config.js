/*
 * @Description: 
 * @Author: ytang5
 * @Date: 2021-10-12 12:04:43
 * @LastEditors: ytang5
 * @FilePath: /random-nickname/webpack.config.js
 * @LastEditTime: 2021-10-12 14:36:53
 */
const path = require('path')
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist'),
        libraryTarget: 'umd',
        globalObject: 'this'
    }
}