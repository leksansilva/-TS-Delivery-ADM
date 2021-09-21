
function loadImage(img, src) {
  return new Promise((resolve, reject) => {
      img.src = src;
      img.completed ? resolve(img) : img.addEventListener('load', function () {
          resolve(img)
      });
      img.addEventListener('error', reject);
  })
}

export default function Resize(src, options) {

  return loadImage(document.createElement('img'), src).then(function (image) {

      var canvas = document.createElement('canvas');

      if (options.width && !options.height) {
          options.height = image.height * (options.width / image.width)
      } else if (!options.width && options.height) {
          options.width = image.width * (options.height / image.height)
      }

      Object.assign(canvas, options);

      canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height);

      return new Promise(function (resolve) {
          canvas.toBlob(resolve, options.type || 'image/png', options.quality)
      })
  })
}