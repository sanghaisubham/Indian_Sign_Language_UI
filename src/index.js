import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use Parcel to bundle this sandbox, you can find more info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

var img = document.getElementById("Keyboard");
var imglearning = document.getElementById("Learning");
var imgtranslator = document.getElementById("Translator");
var modal = document.getElementById("myModal");
var myForm = document.getElementById("myForm");
var myForm1 = document.getElementById("myForm1");
var span = document.getElementsByClassName("close")[0];
var span0 = document.getElementsByClassName("close0")[0];
var span1 = document.getElementsByClassName("close1")[0];
var modalImg = document.getElementById("img01");
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};
span0.onclick = function() {
  myForm.style.display = "none";
};

span1.onclick = function() {
  myForm1.style.display = "none";
};
img.onclick = function() {
  modal.style.display = "block";
  modalImg.src = "/src/Images/Capture.PNG";
};
imglearning.onclick = function() {
  myForm.style.display = "block";
};

imgtranslator.onclick = function() {
  myForm1.style.display = "block";
};
