console.log('Loaded now!');
//get
alert("I'm your master clicl OK to confirm.");
//ser
var img=document.getElementById('madi');
var marginLeft= 0;
function moveRight(){
    marginLeft= marginLeft + 5;
    img.style.marginLeft= marginLeft + 'px';
}

 img.onclick = function() {
     var interval = setInterval(moveRight, 10);
 };