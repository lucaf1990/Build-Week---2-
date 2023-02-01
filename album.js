window.onload = async () => {
  let url = new URLSearchParams(window.location.search);
  let id = url.get("id");
  if (!id) window.location.assign("/index.html");
};
