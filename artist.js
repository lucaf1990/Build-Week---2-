window.onload = async () => {
  let url = new URLSearchParams(window.location.search);
  let id = url.get("idArtist");
  if (!id) window.location.assign("/index.html");
  console.log(id);
};
