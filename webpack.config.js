const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  /* Este objeto es para decirle a webpack que tiene que hacer. Cual es el archivo de entrada y cual de salida */
  entry: './src/main.js',
  output: { /* conversion del archivo */
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'] /* style-loader hace que los archivos sean pasados a codigo js y el css loader hace que todos los archivos css puedan ser importados desde javascript */
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html'
    })
  ]
};
