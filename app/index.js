/**
 * This is the entry file for the application
 */

import 'babel-polyfill';

import 'sanitize.css/sanitize.css';

/*
  globalDefaults.css exists because we're now using a different version of sanitize.css
  and there are some differences (for example, button borders were removed in the previous version
  we used, but not in this one), so some styles break as a result of the change.
*/
// import 'styles/globalDefaults.css';

import '!file-loader?name=[name].[ext]!./favicon.ico';
import '!file-loader?name=[name].[ext]!./manifest.json';
import rootRender from './rootRender';
// import handleFontsLoad from 'utils/handleFontsLoad';

rootRender();
// handleFontsLoad();

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install();
}






// var RecordRTC = require('recordrtc');

// var options = {
//     recorderType: MediaStreamRecorder,
//     mimeType: 'audio/webm' // Firefox also supports: "audio/ogg" 
// };
// var recordRTC = RecordRTC(stream, options);