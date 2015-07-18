var moreBio = document.getElementById("more-bio");
 
function expandBio() {
  var hiddenText = document.getElementById("more-bio-text");
  hiddenText.style.display ="inline";
}
moreBio.addEventListener("click", expandBio, false);

expandBio();
