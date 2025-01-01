const logoCont = document.querySelector("main");

logos.forEach(element => {
  if (element["no_logo"] == false) {
    if (element["uses"] == false) {
      var imgEl = document.createElement("image");
      logoCont.appendChild(imgEl);
    }
  } else {
    if (element.uses == true) {
      // Add attributes to used post
    } else {
      // create proxy logo with flag
      var flag = countries.filter(e => e.cc == element["cc"]);
      var imgEl = document.createElement("img");
      imgEl.src = `data:image/svg+xml,<svg viewBox="0 0 100 100"><text x="30" y="30">${flag} - ${element.name}</text></svg>`;
      logoCont.appendChild(imgEl);
    }
  }
});
