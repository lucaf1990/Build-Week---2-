const APIUrl = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

const fetchByQuery = async (query) => {
  const res = await fetch(`${APIUrl}${query}`);
  const { data: songs } = await res.json();
  return songs;
};

const firstSection = async () => {
  let row = document.querySelector(".bodyFirstSection");
  let song = await fetchByQuery("flowers");
  console.log(song);
  let mainAlbum = [song[0]];
  mainAlbum.forEach(({ album, title, artist, preview }) => {
    row.innerHTML += `

  <img
    height="180px"
    src="${album.cover_xl} "
    alt=""
  />
  <div>
    <p>ALBUM</p>
    <a href="./album.html">
    <h1>${title}</h1></a>
    <a href="./artists.html">
    <h4>${artist.name}</h4></a>
    <h6>Ascolta il nuovo singolo</h6>
    <div class="buttonsSection">
      <button class="play">Play</button>
      <button class="salva">Salva</button>
      <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
    </div>
  </div>`;
  });
};

firstSection();

const secondSection = async () => {
  let songs = await fetchByQuery("dance");
  console.log(songs);
  let row = document.querySelector(".secondSection");
  let mySongs = [songs[4], songs[2], songs[10], songs[8], songs[15], songs[20]];
  console.log(mySongs);
  mySongs.forEach(({ album, title, link }) => {
    row.innerHTML += `<div class="card" >
    <div>
    <img
      src="${album.cover_small}"
      alt="${album.title}"
      height="80px"
    />
    </div>
    <div class="title" style="width:100%; justify-content:left">
    <a href="./album.html">
    <p>${title}</p></a>
    </div>
    <div class="play-icon">
    <i class="bi bi-play-circle-fill"></i>
    </div>
  </div>`;
  });
};

const thirdSection = async () => {
  let songs = await fetchByQuery("Caparezza");
  console.log(songs);
  let row = document.querySelector(".thirdSection");
  let mySongs = [songs[1], songs[12], songs[6], songs[8], songs[20]];
  console.log(mySongs);
  mySongs.forEach(({ album, title, artist, link }) => {
    row.innerHTML += `<div class="cards">
    <img
      src="${album.cover_medium}"
      alt="${album.title}"
      height="130px"
    />
    <div>
    <a href="./album.html">
    <h5>${title}</h5>
</a>
    <a href="./artists.html">
    <p>${artist.name}</p></a>
    </div>
  </div>`;
  });
};

const fourthSection = async () => {
  try {
    let arrayArtisti = [
      "Madonna",
      "lost frequencies",
      "Dua Lipa",
      "eminem",
      "oasis",
    ];

    for (let i = 0; i < arrayArtisti.length; i++) {
      const artisti = arrayArtisti[i];
      console.log(artisti);
      let [albums] = await fetchByQuery(artisti);
      let { album, artist } = albums;
      console.log(albums);
      let row = document.querySelector(".fourthSection");
      row.innerHTML += `<div class="cards">
      <img
        src="${album.cover_medium}"
        alt="${album.title}"
        height="130px"
      />
      <div>
      <a href="./album.html">
      <h5>${album.title}</h5></a>
      <a href="./artists.html">
      <p>${artist.name}</p></a>
      </div>
    </div>`;
    }
  } catch (error) {
    console.log(error);
  }
};
secondSection();
thirdSection();
fourthSection();
