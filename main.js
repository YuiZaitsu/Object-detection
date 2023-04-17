img="";


function preload(){
img=loadImage("");
}

function draw(){
image(img,0,0,640,420);
fill("red");
stroke("red");
text("dog",45,75);
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