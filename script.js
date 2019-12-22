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
}

function copy() {
  var clickcopy = document.getElementById("small");
  clickcopy.select();
  clickcopy.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.getElementById("copy").style.display = 'none';
} 
