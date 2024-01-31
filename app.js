const photo = document.querySelector('.photos');
const searchInput = document.querySelector('.search');
const forms = document.querySelector('form');
const key =
"xLdPq3JkoEB1yIzQinBLP1qVpRYZNsiCHKqgoabIaVVh1QP21G9ZJEha"

forms.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value.trim();
    searchPhotos(searchTerm );
});
async function searchPhotos(term) {
  photo.innerHTML = '';

  const link = `https://api.pexels.com/v1/search?query=${term}&per_page=9`;
  const response = await fetch(link, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: key
    }
    
  });
  const data = await response.json();
  console.log(data)
  data.photos.forEach(imageData => {
    const image = document.createElement('img');
    image.classList.add('jsphoto');
    image.src = imageData.src.large;
    photo.appendChild(image);
  });
}
