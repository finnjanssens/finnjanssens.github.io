function imageGallery() {
  const currentImage = document.querySelector('#preview'),
    galleryProjects = document.querySelectorAll('.gallery-projects img'),
    title = document.querySelector('.gallery-preview h1'),
    text = document.querySelector('.gallery-preview p');

  galleryProjects.forEach(function (preview) {
    preview.addEventListener('click', function () {
      const smallSrc = preview.src;
      currentImage.src = smallSrc;
      if (currentImage.src.includes('lyrical-poster')) {
        title.innerHTML = "Lyrical Poster Project";
        text.innerHTML = "Lyrical Poster Project: A series of black and white typographical posters that illustrate a lyric from the song “Collide” by EARTHGANG and Tiana Major9";
      } else if (currentImage.src.includes('digital-era')) {
        title.innerHTML = "The Digital Era Project";
        text.innerHTML = "The Digital Era Project: A t-shirt design i did for everpress. This design is meant to illustrate a world that is getting more and more digital";
      }
    });
  });
}

imageGallery();