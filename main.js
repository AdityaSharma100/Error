img ="";
status = "";
objects = [];
objectDetector = "";

function preload(){
img = loadImage("dog_cat.jpg");
}

function setup(){
 canvas = createCanvas(640, 420);
 canvas.center();
 objectDetector = ml5.objectDetector("cocossd", modelLoaded);
}


function modelLoaded() {
 console.log("Model is Loaded!");
 status = true;
 objectDetector.detect(img, gotResults);
 document.getElementById('status').innerHTML = "Status : Detecting Objects";
}

function gotResults(error, results) {
 if (error){
    console.error(error);
 }else if(results) {
    console.log(results);

 }
  objects = results;
  console.log(objects);
}

function draw(){
   image(img, 0, 0, 640, 420);
   if(status != ""){
      console.log(objects);
      noFill();
      stroke("black");
      rect(objects[0].x, objects[0].y, objects[0].width, objects[0].height);
      fill("#FF0000");
      text(objects[0].label, objects[0].x, objects[0].y); 
      document.getElementById('status').innerHTML = "Status : Detected Objects";
   }
   //rect(300, 75, 200, 300);
   //text("Cat", 400, 100);
   }