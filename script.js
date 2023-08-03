//your JS code here. If required.
const form = document.getElementById("form");
const fontSizeInput = document.getElementById("font-size");
const fontColorInput = document.getElementById("font-color");

const defaultFontSize = 16;
const defaultFontColor = "#000000";

let fontSize = defaultFontSize;
let fontColor = defaultFontColor;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fontSize = fontSizeInput.value;
  fontColor = fontColorInput.value;

  // Store the user's preferences in a cookie
  const cookie = {
    fontSize: fontSize,
    fontColor: fontColor,
  };
  document.cookie = JSON.stringify(cookie);
});

// Get the user's preferences from the cookie
if (document.cookie) {
  const cookie = JSON.parse(document.cookie);
  fontSize = cookie.fontSize;
  fontColor = cookie.fontColor;
}

// Set the font size and color
document.body.style.fontSize = fontSize + "px";
document.body.style.color = fontColor;