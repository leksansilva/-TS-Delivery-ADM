import Compress from "compress.js"

const compress = new Compress()


export default async function Resize(file) {

  const resizedImage = await compress.compress([file], {
    size: .08,
    quality: 1,
    maxWidth: 1080,
    maxHeight: 1080,
    resize: true
  })
  const img = resizedImage[0];
  const base64str = img.data
  const imgExt = img.ext
  const resizedFiile = Compress.convertBase64ToFile(base64str, imgExt)
  return resizedFiile;
}