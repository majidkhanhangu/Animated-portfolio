// to add typing animation with help of javascript//
// for animated protfolio website

var messageArray = ["Frontend Developer .","YouTuber",];
var textPosition = 1;
var speed = 100; 

typewriter = () => {
  document.querySelector("#multipleStrings").
  innerHTML = messageArray[0].substring(0,textPosition) + "<span>\u25ae</span>";

  if (textPosition++ != messageArray[0].length)
  setTimeout(typewriter, speed);
}
window.addEventListener("load", typewriter);
