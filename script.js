const gallery = document.querySelector("main");

logos.forEach(element => {
    var fig = document.createElement("figure"),
      img = document.createElement("img"),
      figCap = document.createElement("figcaption");
    img.src = `l/${element["cc"]}.png`;
    figCap.textContent = `${element["name"]}, ${element["cc"]}`;
    fig.appendChild(img);
    fig.appendChild(figCap);
    fig.id = element["cc"];
    gallery.appendChild(fig);
});
