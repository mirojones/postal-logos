const mainEl = document.querySelector("main");

logos.forEach(element => {
    var fig = document.createElement("figure"),
      img = document.createElement("img"),
      figCap = document.createElement("figcaption");
    img.src = `l/${element["cc"]}.png`;
    fig.appendChild(img);
    fig.appendChild(figCap);
    fig.id = element["cc"];
    mainEl.appendChild(fig);
});
