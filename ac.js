img="";


function preload(){
img=loadImage("gettyimages-157482774-612x612.jpg");
}

function draw(){
image(img,0,0,640,420);
fill("red");
stroke("red");
text("AC",45,75);
noFill();

rect(30,60,450,350);

}

 function setup(){
 canvas=createCanvas(640,420);
 canvas.center();

 }
 function ac()
{
   
    window.location = "ac.html";
    
}
function bedroom()
{
   
    window.location = "bedroom.html";
    
}

function fan()
{
   
    window.location = "fan.html";
    
}