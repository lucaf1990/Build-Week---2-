const searchInput = document.getElementById("searchBar");
const resultsContainer = document.getElementById("resultsContainer");
resultsContainer.innerHTML = "";
let myFunc = async () => {
  searchInput.addEventListener("input", async function (event) {
    const searchValue = event.target.value;
    console.log(searchValue);

    try {
      resultsContainer.innerHTML = "";
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchValue}`
      );
      const data = await res.json();
      // console.log(data);
      const songs = data.data;
      console.log(songs);
      for (let i = 0; i < songs.length; i++) {
        if (searchValue.length === 1) {
          resultsContainer.innerHTML += `
      <div class="card m-3 bg-black" style="width: 18rem;">
        <img class="mt-3" src="${songs[i].album.cover_medium}" class="card-img-top" alt="${songs[i].title}">
        <div class="card-body">
        <a href="./album.html?idAlbum=${songs[i].album.id}"><h5 class="card-title">${songs[i].title}</h5></a>  <a href="./artists.html?idArtist=${songs[i].artist.id}"><p class="card-text">${songs[i].artist.name}</p></a>

        </div>
      </div>
    `;
        } else if (searchValue.length === 2) {
          resultsContainer.innerHTML += `
      <div class="card m-3 bg-black" style="width: 18rem;">
        <img class="mt-3" src="${songs[i].album.cover_medium}" class="card-img-top" alt="${songs[i].title}">
        <div class="card-body">
        <a href="./album.html?idAlbum=${songs[i].album.id}"><h5 class="card-title">${songs[i].title}</h5></a>  <a href="./artists.html?idArtist=${songs[i].artist.id}"><p class="card-text">${songs[i].artist.name}</p></a>
    
        </div>
      </div>
    `;
        } else if (searchValue.length === 3) {
          resultsContainer.innerHTML += `
      <div class="card m-3 bg-black" style="width: 18rem;">
        <img class="mt-3" src="${songs[i].album.cover_medium}" class="card-img-top" alt="${songs[i].title}">
        <div class="card-body">
        <a href="./album.html?idAlbum=${songs[i].album.id}"><h5 class="card-title">${songs[i].title}</h5></a>  <a href="./artists.html?idArtist=${songs[i].artist.id}"><p class="card-text">${songs[i].artist.name}</p></a>
    
        </div>
      </div>
    `;
        } else if (searchValue.length === 4) {
          resultsContainer.innerHTML += `
      <div class="card m-3 bg-black" style="width: 18rem;">
        <img class="mt-3" src="${songs[i].album.cover_medium}" class="card-img-top" alt="${songs[i].title}">
        <div class="card-body">
        <a href="./album.html?idAlbum=${songs[i].album.id}"><h5 class="card-title">${songs[i].title}</h5></a>  <a href="./artists.html?idArtist=${songs[i].artist.id}"><p class="card-text">${songs[i].artist.name}</p></a>
    
        </div>
      </div>
    `;
        } else if (searchValue.length === 5) {
          resultsContainer.innerHTML += `
      <div class="card m-3 bg-black" style="width: 18rem;">
        <img class="mt-3" src="${songs[i].album.cover_medium}" class="card-img-top" alt="${songs[i].title}">
        <div class="card-body">
        <a href="./album.html?idAlbum=${songs[i].album.id}"><h5 class="card-title">${songs[i].title}</h5></a>  <a href="./artists.html?idArtist=${songs[i].artist.id}"><p class="card-text">${songs[i].artist.name}</p></a>
    
        </div>
      </div>
    `;
        } else if (searchValue.length === 6) {
          resultsContainer.innerHTML += `
      <div class="card m-3 bg-black" style="width: 18rem;">
        <img class="mt-3" src="${songs[i].album.cover_medium}" class="card-img-top" alt="${songs[i].title}">
        <div class="card-body">
        <a href="./album.html?idAlbum=${songs[i].album.id}"><h5 class="card-title">${songs[i].title}</h5></a>  <a href="./artists.html?idArtist=${songs[i].artist.id}"><p class="card-text">${songs[i].artist.name}</p></a>
    
        </div>
      </div>
    `;
        } else if (searchValue.length === 7) {
          resultsContainer.innerHTML += `
      <div class="card m-3 bg-black" style="width: 18rem;">
        <img class="mt-3" src="${songs[i].album.cover_medium}" class="card-img-top" alt="${songs[i].title}">
        <div class="card-body">
        <a href="./album.html?idAlbum=${songs[i].album.id}"><h5 class="card-title">${songs[i].title}</h5></a>  <a href="./artists.html?idArtist=${songs[i].artist.id}"><p class="card-text">${songs[i].artist.name}</p></a>
    
        </div>
      </div>
    `;
        } else if (searchValue.length === 8) {
          resultsContainer.innerHTML += `
      <div class="card m-3 bg-black" style="width: 18rem;">
        <img class="mt-3" src="${songs[i].album.cover_medium}" class="card-img-top" alt="${songs[i].title}">
        <div class="card-body">
        <a href="./album.html?idAlbum=${songs[i].album.id}"><h5 class="card-title">${songs[i].title}</h5></a>  <a href="./artists.html?idArtist=${songs[i].artist.id}"><p class="card-text">${songs[i].artist.name}</p></a>
    
        </div>
      </div>
    `;
        } else if (searchValue.length === 9) {
          resultsContainer.innerHTML += `
      <div class="card m-3 bg-black" style="width: 18rem;">
        <img class="mt-3" src="${songs[i].album.cover_medium}" class="card-img-top" alt="${songs[i].title}">
        <div class="card-body">
        <a href="./album.html?idAlbum=${songs[i].album.id}"><h5 class="card-title">${songs[i].title}</h5></a>  <a href="./artists.html?idArtist=${songs[i].artist.id}"><p class="card-text">${songs[i].artist.name}</p></a>
    
        </div>
      </div>
    `;
        } else if (searchValue === "") {
          resultsContainer.innerHTML += cubi;
        }
      }
    } catch (error) {
      console.error(error);
    }
  });
};

myFunc();

let cubi = () => {
  let prova = [
    "Pop",
    "Rock",
    "Hip Hop",
    "Jazz",
    "Classical",
    "R&B",
    "Country",
    "Blues",
    "Soul",
    "Reggae",
    "Metal",
    "Dance",
    "Electronic",
  ];

  let paginaIniziale = "";
  for (let i = 0; i < prova.length; i++) {
    paginaIniziale += `
      <div id="hoSonno" class="card m-3 bg-black " style="width: 10rem;  height:12rem">
      <i id="searchIcon" class="bi bi-spotify"></i>
        <h5 class="card-title">${prova[i]}</h5>
        <p> Feeling like ${prova[i]}
        </div>
      </div>
    `;
  }
  resultsContainer.innerHTML = paginaIniziale;
};

window.onload = cubi();
