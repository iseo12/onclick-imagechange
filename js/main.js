//set new elements to variables
var newDiv = document.createElement('div');
var newHeader = document.createElement('h1');
var btn = document.createElement('button');
var img = document.createElement('img');

//add header to new div
newHeader.textContent = "Exercise Header";
newDiv.setAttribute('id', 'container-2');
newDiv.appendChild(newHeader);
img.setAttribute('src', 'img/cat-1.png');
btn.innerHTML = "Click to change image";
document.getElementById('newDivContainer').appendChild(newDiv);
document.getElementById('newDivContainer').appendChild(img);
document.getElementById('newDivContainer').appendChild(btn);

//funcntion to change image on button click
function swapImage() {
  if (img.getAttribute('src') == 'img/cat-1.png') {
    img.setAttribute('src', 'img/cat-2.png');
    img.setAttribute('alt', 'cat-2');
  }
  else if (img.getAttribute('src') == 'img/cat-2.png') {
    img.setAttribute('src', 'img/cat-3.png');
    img.setAttribute('alt', 'cat-3');
  }
  else {
    img.setAttribute('src', 'img/cat-1.png');
    img.setAttribute('alt', 'cat-1');
  }
}

//runs swapImage function on button click
document.querySelector('button').addEventListener('click', function(){
  swapImage();
}, false);
