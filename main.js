status = "";
function setup(){
    canvas = createCanvas(430,330);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function start(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    input_value = document.getElementById("input").value;
}
function modelLoaded(){
    console.log("Model Loaded");
    status = true;
}
function draw(){
    image(video,0,0,430,330);
}