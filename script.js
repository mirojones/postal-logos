const mainEl = document.querySelector("main");

logos.forEach(element => {
  var img = document.createElement("img");
  img.src = `l/${element["cc"]}.png`;
  mainEl.appendChild(img);
});
