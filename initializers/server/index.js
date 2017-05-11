const path = require('path');
require('app-module-path').addPath(path.join(process.cwd(), 'src'));
require('./globals');
require('babel-core/register');
require.extensions['.css'] = () => {
};

const express = require('express');
const application = express();

application.use(express.static('src/static'));
application.set('views', __dirname);
application.set('view engine', 'ejs');
application.get('*', require('./render').default);
application.listen(3000, () => {
  console.log('Server')
});

const webpack = require('webpack');
const config = require('../../webpack.config.js').default;
const webpackDev = require('webpack-dev-middleware');
const webpackHot = require('webpack-hot-middleware');
const compiler = webpack(config);

application.use(webpackHot(compiler));
application.use(
  webpackDev(
    compiler,
    {
      hot: true,
      publicPath: config.output.publicPath,
      stats: { colors: true }
    }
  )
);
