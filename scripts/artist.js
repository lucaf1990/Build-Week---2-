window.onload = async () => {
  let url = new URLSearchParams(window.location.search);
  let id = url.get("idArtist");
  if (!id) window.location.assign("/index.html");
  console.log(id);

  //prima sezione
  const firstSection = async () => {
    let container = document.querySelector(".containerArtist");
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/artist/" + id
    );
    let artist = await res.json();
    console.log(artist);
    container.innerHTML = `<img class="coverBig"
    src="${artist.picture_xl}"
    alt="${artist.name}"
  />
  <div class="artist">
  <div class="album-cont">
  <p><i class="bi bi-patch-check-fill"></i> Artista Verificato</p>
  <a href="./artists.html?idArtist=${artist.id}">
  <h2>${artist.name}</h2></a>
  <p>Ascoltatori mensili: ${artist.nb_fan}</p>
</div>
  </div>`;
  };
  firstSection();

  //seconda sezione
  const secondSection = async () => {
    let row = document.querySelector(".containerTabella");
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/artist/" + id
    );
    console.log(res);
    let data = await res.json();
    console.log(data);

    let res2 = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${data.name}`
    );
    let data2 = await res2.json();
    console.log(data2);
    let mySongs = [
      data2.data[0],
      data2.data[6],
      data2.data[1],
      data2.data[3],
      data2.data[4],
    ];
    console.log(mySongs);
    for (let i = 0; i < mySongs.length; i++) {
      row.innerHTML += `<td class=" col col-1 text-white align-items-center" scope="row">${
        i + 1
      }</td>
      <td colspan="1" class="col col-1"><img src="${
        mySongs[i].album.cover_small
      }" alt="${mySongs[i].artist.name}"></td>
      <td colspan="1" class="col col-6 text-white ">${
        mySongs[i].title_short
      }</td>
      <td class="col col-2 text-white">${mySongs[i].rank} </td>
      <td class="col col-2 text-white" colspan="5">
        ${(mySongs[i].duration / 60).toFixed(2)} min
      </td>`;
      // fine tabella

      // inizio like
      let row2 = document.querySelector(".braniCheTiPiacciono");
      row2.innerHTML = `<h4>Brani che ti piacciono</h4>
      <div class="likes row">
        <div class="col col-md-3 mt-2">
          <img src="${mySongs[i].artist.picture_small}" alt="${
        mySongs[i].artist.name
      }" class="rounded-circle"/>
        </div>
        <div class=" col col-md-9 mt-2">
            <h6>Hai messo mi piace a ${Math.floor(
              Math.random() * 20
            )} brani</h6>
            <p>di ${mySongs[i].artist.name} </p>
        </div>
      </div>
      `;
    }
  };
  secondSection();

  // sezione 3
  //terza sezione
  const thirdSection = async () => {
    let row = document.querySelector(".thirdSectionArtist");
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/artist/" + id
    );
    let data = await res.json();
    console.log(data);
    let res2 = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${data.name}`
    );
    let data2 = await res2.json();
    console.log(data2);
    let myAlbums = [
      data2.data[12],
      data2.data[7],
      data2.data[14],
      data2.data[8],
      data2.data[20],
    ];
    console.log(myAlbums);
    myAlbums.forEach(({ album, artist }, i) => {
      row.innerHTML += `<div class="cards col col-5 col-md-2 ${
        i == 4 ? "nascondiCard" : " "
      }">
      <img
        src="${album.cover_medium}"
        alt="${album.title}"
        
      />
      <div>
      <a href="./album.html?idAlbum=${album.id}">
      <h5 class="text-truncate">${album.title}</h5></a>
      <a href="./artists.html?idArtist=${artist.id}">
      <p class="text-truncate">${artist.name}</p></a>
      </div>
    </div>`;
    });
  };
  thirdSection();
};
