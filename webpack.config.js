const path = require('path')
const StylelintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    publicPath: '/dist/',
    watchOptions: {
      ignored: ['dist', 'node_modules']
    }
  },
  plugins: [
    new StylelintPlugin({
      context: './styles',
      files: '*.less',
      fix: true
    })
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              [
                '@babel/plugin-transform-react-jsx',
                {
                  runtime: 'automatic', // defaults to classic (classic == createElement calls)
                  importSource: 'preact' // NOT preact/jsx-runtime
                }
              ],
              [
                'module-resolver',
                {
                  root: ['./src'],
                  alias: {
                    views: './src/views',
                    components: './src/components',
                    hooks: './src/hooks',
                    contexts: './src/contexts'
                  }
                }
              ]
            ],
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: 'firefox 37'
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          { loader: 'less-loader', options: { sourceMap: true } },
        ]
      }
    ]
  }
};
