window.onload = async () => {
  let url = new URLSearchParams(window.location.search);
  let artista = url.get("idArtist");
  console.log(artista);
  let id = url.get("idAlbum");
  if (!id) window.location.assign("/index.html");
  console.log(id);

  // prima sezione
  const firstSection = async () => {
    let row = document.querySelector(".containerAlbum");
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/album/" + id
    );
    let album = await res.json();
    console.log(album);
    row.innerHTML += ` <img
    src="${album.cover_medium}"
    alt=""
  />
  <div class="album-cont">
    <p>ALBUM</p>
    <h2>${album.title}</h2>
    <p class="paragrafoAlbum">
      <ion-icon name="person-circle-outline"></ion-icon>
      ${album.artist.name} - ${new Date(
      album.release_date
    ).getFullYear()} - Brani: ${album.nb_tracks}, Durata: ${Math.floor(
      album.duration / 60
    )}min
    </p>
  </div>`;
  };
  firstSection();

  // seconda sezione
  const secondSection = async () => {
    let row = document.querySelector(".containerTabella");
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/album/" + id
    );
    console.log(res);
    let data = await res.json();
    const songs = data.tracks.data;
    console.log(songs);
    for (let i = 0; i < songs.length; i++) {
      row.innerHTML += `<td class="ms-5 col col-1" scope="row">${i + 1}</td>
      <td colspan="1" class="col col-5">${songs[i].title_short}</td>
      <td class="col col-5">${songs[i].rank} </td>
      <td class="col col-1" colspan="5">
        ${(songs[i].duration / 60).toFixed(2)} min
      </td>`;
    }
  };
  secondSection();

  //terza sezione
  const thirdSection = async () => {
    let row = document.querySelector(".thirdSection");
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artista
    );
    console.log(res);
    let data = await res.json();
    console.log(data);
    const canzoni = data.data;
    console.log(canzoni);
    for (let i = 0; i < canzoni.length; i++) {
      const albums = canzoni[i].album;
      // console.log(albums);
      // if (i <= 5) {
      //   console.log(albums);
      //   row.innerHTML += `<div class="cards">
      // <img
      // src="${canzoni[i].album.cover_medium}"
      // alt="${canzoni[i].album.title}"
      // height="130px"
      // />
      // <div>
      // <a href="./album.html?idAlbum=${canzoni[i].id}">
      // <h5>${canzoni[i].title}</h5></a>
      // <a href="./artists.html?idArtist=${canzoni[i].artist.id}">
      // <p>${canzoni[i].artist.name}</p></a>
      // </div>
      // </div>`;
      // }
    }

    // const albums = data.album;
    // console.log(albums);
    // let otherSongs = [albums[0], albums[1], albums[3], albums[4], albums[5]];
    // console.log(otherSongs);
    // otherSongs.forEach((elements) => {
    // row.innerHTML += `<div class="cards">
    // <img
    // src="${elements.album.cover_medium}"
    // alt="${elements.album.title}"
    // height="130px"
    // />
    // <div>
    // <a href="./album.html?idAlbum=${elements.id}">
    // <h5>${elements.title}</h5></a>
    // <a href="./artists.html?idArtist=${elements.artist.id}">
    // <p>${elements.artist.name}</p></a>
    // </div>
    // </div>`;
    // });
  };
  thirdSection();
};
