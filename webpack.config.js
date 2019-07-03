const path = require("path");

let conf = {
    entry: "./index.js",
    output: {
        path: path.join(__dirname, "/public"),
        filename: "index_bundle.js"
    },
    devServer: {
        contentBase: './',
        publicPath: '/public/',
        historyApiFallback: true 
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader"
                },
                {
                    loader: 'eslint-loader'
                }]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: 'base64-inline-loader?limit=10000&name=[name].[ext]'
            },

    
        {
            test: /\.css$/,
            use: [{
                    loader: "style-loader"
                },
                {
                    loader: 'css-loader',
                    options: {
                        url: true
                    }
                },
            ]
        },
        {
            test: /\.scss$/,
            use: [
                "style-loader", 
                "css-loader", 
                "sass-loader" 
            ]
        },
        {
            test: /\.(woff|woff2|eot|ttf)$/,
            use:  {
                loader: 'file-loader?name=./style/[name].[ext]'
            }
        }
    ]
    }
}


module.exports = (env, options) => {
    let mode = options.mode === 'production';
    conf.devtool = mode ? false :
        'cheap-module-source-map';
    return conf;
}