var FontFaceObserver = require('fontfaceobserver');

export default function () {
  const fontLoadObserver = new FontFaceObserver('Roboto', {
    weight: 400,

  });
  fontLoadObserver.load(null, 10000).then(() => {
    document.body.classList.add('fontLoaded');
  }, (error) => {
    console.log(error);
    document.body.classList.remove('fontLoaded');
  });
}
