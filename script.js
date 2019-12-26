function reveal() {
  document.getElementById("one").style.display = 'block';
};

function giant() {
  
  var text = document.getElementById("small").value;
  document.getElementById("big").style.display = 'block';
  document.getElementById("big").innerText = text;
  document.getElementById("small").style.display = 'none';
  document.getElementById("button").style.display = 'none';
  document.getElementById("copy").style.display = 'ruby';
};

function appear() {

  document.getElementById("small").style.display = 'ruby';
  document.getElementById("button").style.display = 'ruby';
  document.getElementById("big").style.display = 'none';
  document.getElementById("copy").style.display = 'none';
};

function copy() {
  var clickcopy = document.getElementById("UpText");
  clickcopy.select();
  clickcopy.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.getElementById("copy").style.display = 'none';
}; 

function uppercase() {
  var input = document.getElementById("UpInput").value;
  document.getElementById("UpText").style.display = "block";
  document.getElementById("UpText").innerText = input;
  document.getElementById("UpButton").style.display = "none";
  document.getElementById("UpInput").style.display = "none";
  document.getElementById("UpCopy").style.display = "ruby";
function UpCopy() {
  /* Get the t)ext field */
  var copyText = document.getElementById("UpText");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}

