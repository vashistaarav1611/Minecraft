var canvas = new fabric.Canvas('myCanvas')
block_img_width = 30;
block_img_height = 30;
player_x = 10;
player_y = 10;

var player_object="";
var block_img_object="";

function plyer_update(){
 fabric.Image.fromURL("player.png",function(img){
  player_object=img;
  
  player_object.scaleToWidth(150);
  player_object.scaleToHeight(140);
  player_object.set({
   top:player_y,
   left:player_x
  });
  canvas.add(player_object);
  
 });
}

function new_img(get_img){
 fabric.Image.fromURL(get_img,function(img){
  block_img_object = img;
  
  block_img_object.scaleToWidth(block_img_width);
  block_img_object.scaleToHeight(block_img_height);
  block_img_object.set({
   top:player_y,
   left:player_x
  });
  canvas.add(block_img_object);
  
 });
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
 var keypressed = e.keyCode;
 console.log(keypressed);
 if(e.shiftKey == true&& keypressed == '80'){
  console.log("p and shift");
  block_img_width = block_img_width+10;
  block_img_height = block_img_height+10;
  document.getElementById("current-width").innerHTML= block_img_width;
  document.getElementById("current-height").innerHTML= block_img_height;
 }
 if(e.shiftKey && keypressed == '77'){
    console.log("m and shift");
    block_img_width= block_img_width- 10;
    block_img_height= block_img_height-10;
    document.getElementById()
    }
 if(keypressed=='38'){
    up();
    }
 if(keypressed=='40'){
    down();
    }
 if(keypressed=='37'){
    left();
    }
 if(keypressed=='39'){
    right();
    }
 if(keypressed=='87'){
    new_img('wall.jpg');
    }
 if(keypressed=='71'){
    new_img('ground.png');
    }
 if(keypressed=='76'){
    new_img('light_green.png');
    }
 if(keypressed=='84'){
    new_img('trunk.jpg');
    }
 if(keypressed=='82'){
    new_img('roof.jpg');
    }
 if(keypressed=='89'){
    new_img('yellow_wall.png');
    }
 if(keypressed=='68'){
  new_img('dark_green.png');
 }
 if(keypressed=='85'){
    new_img('unique.png');
    }
 if(keypressed=='67'){
  new_img('cloud.jpg');
 }
}
function up()
{
	if(player_y >=0)
	{
		player_y = player_y - block_img_height;
		console.log("block image height = " + block_img_height);
		console.log("When Up arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		plyer_update();
	}
}

function down()
{
	if(player_y <=500)
	{
		player_y = player_y + block_img_height;
		console.log("block image height = " + block_img_height);
		console.log("When Down arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		plyer_update();
	}
}

function left()
{
	if(player_x >0)
	{
		player_x = player_x - block_img_width;
		console.log("block image width = " + block_img_width);
		console.log("When Left arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		plyer_update();
	}
}

function right()
{
	if(player_x <=850)
	{
		player_x = player_x + block_img_width;
		console.log("block image width = " + block_img_width);
		console.log("When Right arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		plyer_update();
	}
}
