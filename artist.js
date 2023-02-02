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
  <p>ALBUM</p>
  <h2>${artist.name}</h2>
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
    // for (let i = 0; i < songs.length; i++) {
    //   row.innerHTML += `<td class="ms-5 col col-1" scope="row">${i + 1}</td>
    //   <td colspan="1" class="col col-5">${songs[i].title_short}</td>
    //   <td class="col col-5">${songs[i].rank} </td>
    //   <td class="col col-1" colspan="5">
    //     ${(songs[i].duration / 60).toFixed(2)} min
    //   </td>`;
    // }
  };
  secondSection();
};
