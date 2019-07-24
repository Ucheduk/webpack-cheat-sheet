const makeImage = (url, height = 100, weight = 100) => {
  const image = document.createElement('img');

  image.height = height;
  image.weight = weight;
  image.src = url;
  return image;
}

export default makeImage;