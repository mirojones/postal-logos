const mainEl = document.querySelector("main");

logos.forEach(element => {
  if (element["name"] == true) {
    var fig = document.createElement("figure"),
      img = document.createElement("img"),
      figCap = document.createElement("figcaption");
    img.src = `l/${element["cc"]}.png`;
    fig.appendChild(img);
    fig.appendChild(figCap);
    mainEl.appendChild(fig);
  } else if (element["uses"] == true) {
    // add classes to used post
  } else if (element["uses"] == false && element["name"] == false) {
    // proxy logo
    var fig = document.createElement("figure"),
      img = document.createElement("img"),
      figCap = document.createElement("figcaption");
    img.src = `data:text/svg,<svg viewBox="0 0 100 100"><text x="10" y="10">[no postal service] - ${element["cc"]}</text></svg>`;
    fig.appendChild(img);
    fig.appendChild(figCap);
    mainEl.appendChild(fig);
  }
});
