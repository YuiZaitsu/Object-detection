img="";

status="";
objects= [];


function preload(){
img=loadImage("gettyimages-157482774-612x612.jpg");
}

function draw(){
    image(img,0,0,640,420);
    if(status!="")
    {
       for(i=0; i<=objects.length; i++){
          document.getElementById("status").innerHTML="status: Objects detected";
          fill("red");
          percent=floor(objects[i].confidence*100);
          text(objects[i].label+" "+percent+"%", objects[i].x, objects[i].y);
          noFill();
          stroke("red");
          rect( objects[i].x,objects[i].y,objects[i].width,objects[i].height);
       }
    }

}

 function setup(){
 canvas=createCanvas(640,420);
 canvas.center();
 objectdetector=ml5.objectDetector("cocossd",modelloaded);
document.getElementById("status").innerHTML="status: detecting objects";

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

function modelloaded(){
    console.log("Model Is Loaded");
    status=true;

    objectdetector.detect(img,gotresult);

 }

 function gotresult(error,results)
 {
    if(error){
console.log(error);

    }
  console.log(results);
    objects=results;
 }