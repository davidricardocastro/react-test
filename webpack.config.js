module.exports = {
    entry: { main: './src/index.js', // this file you have to create
             homepage: './src/homepage.js',
             vendor: './src/vendor.js'
            }, 

    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js' // this will be the output that you load in index.html
    },
    module: {
        loaders: [
            {  
                test: /\.(js|jsx)$/,   // all files ending with .js or jsx
                loader: 'babel-loader',   // should be loaded with the babel loader
                exclude: /node_modules/,   // except those in /node_modules/
                query: {
                    presets: ['es2015', 'react']   // these presets should be used on them
                }
            }
        ]
    }
}