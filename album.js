window.onload = async () => {
  let url = new URLSearchParams(window.location.search);
  let id = url.get("idAlbum");
  if (!id) window.location.assign("/index.html");
  console.log(id);

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
};
