canvas = document.getElementById('MyCanvas');
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var Img_image;

img_x = 100;
img_y = 100;

function add() {
	Img_imgTag = new Image();
	Img_imgTag.onload = uploadimg; 
	Img_imgTag.src = Img_image;  
}

function uploadimg() {

	ctx.drawImage(Img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("Keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		{
			aplhabetkey();
			document.getElementById("d1").innerHTML="you Pressed Alphabet Key";
			console.log("alphabet key");
		}
	else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}
}

function aplhabetkey()
{
	Img_image="Alpkey.png";
    add();

}
function numberkey()
{
	Img_image="numkey.png";
    add();
}
function arrowkey()
{
	Img_image="Arrkey.png";
    add();
}
function specialkey()
{
	Img_image="spkey.png";
    add();
}
function otherkey()
{
	Img_image="otherkey.png";
	add();
}
	
