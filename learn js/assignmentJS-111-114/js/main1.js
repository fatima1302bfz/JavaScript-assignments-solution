let fonts = document.getElementById("fonts");
let colors = document.getElementById("colors");
let size = document.getElementById("size");
let displayedText = document.querySelector(".show");

// font
// change font family of text
fonts.addEventListener("change", function (e) {
  displayedText.style.fontFamily = e.currentTarget.value;
  //add fontfamily to localstorage
  localStorage.setItem("fontFamily", e.currentTarget.value);
});
//to not lose data in reload or close page
if (localStorage.getItem("fontFamily")) {
  //display font-family in select box
    fonts.value = localStorage.getItem("fontFamily"); 
    //apply selected font-family on text
    displayedText.style.fontFamily =localStorage.getItem("fontFamily");
  }

//color
// change color of displayedText
colors.addEventListener("change", function (e) {
  displayedText.style.color = e.currentTarget.value;
  //add color to localstorage
  localStorage.setItem("color", e.currentTarget.value);
});

//to not lose data in reload or close page
if (localStorage.getItem("color")) {
  //display color in select box
  colors.value = localStorage.getItem("color"); 
  //apply selected color on text
  displayedText.style.color = localStorage.getItem("color");
}

//font size

// change fontsize of displayedText
size.addEventListener("change", function (e) {
  displayedText.style.fontSize = e.currentTarget.value;
  //add fontsize to localstorage
  localStorage.setItem("fontsize", e.currentTarget.value);
});

//to not lose data in reload or close page
if (localStorage.getItem("fontsize")) {
  //display font-size in select box
  size.value = localStorage.getItem("fontsize"); 
    //apply selected font-size on text
  displayedText.style.fontSize =localStorage.getItem("fontsize");
}
