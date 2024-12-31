const logoCont = document.querySelector("main");

logos.forEach(element => {
  if (element.is_logo = true) {
    if (element.uses == false) {
      var imgEl = document.createElement("image");
      logoCont.appendChild(imgEl);
    }
  } else {
    if (element.uses == true) {
      // Add attributes to used post
    } else {
      // create proxy logo with flag
    }
  }
});
