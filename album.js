window.onload = async () => {
  let url = new URLSearchParams(window.location.search);
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
      "https://striveschool-api.herokuapp.com/api/deezer/album/" + id
    );
    let data = await res.json();
    console.log(data);
    let res2 = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${data.artist.name}`
    );
    let data2 = await res2.json();
    console.log(data2);
    let myAlbums = [
      data2.data[4],
      data2.data[2],
      data2.data[10],
      data2.data[8],
      data2.data[15],
      data2.data[20],
    ];
    console.log(myAlbums);
    myAlbums.forEach(({ album, title, link }) => {
      row.innerHTML += `<div class="card" >
    <div>
    <img
      src="${data2.cover_small}"
      alt="${data2.title}"
      height="80px"
    />
    </div>
    <div class="title" style="width:100%; justify-content:left">
    <a href="./album.html?idAlbum=${data2.id}">
    <p>${title}</p></a>
    </div>
    <div class="play-icon">
    <i class="bi bi-play-circle-fill"></i>
    </div>
  </div>`;
    });
  };
  thirdSection();
};
