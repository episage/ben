/**
 * This is the entry file for the application
 */

import 'babel-polyfill';

import 'sanitize.css/sanitize.css';

import '!file-loader?name=[name].[ext]!./favicon.ico';
import '!file-loader?name=[name].[ext]!./manifest.json';
import rootRender from './rootRender';
import handleFontsLoad from 'utils/handleFontsLoad';

rootRender();
handleFontsLoad();

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install();
}
