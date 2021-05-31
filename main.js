prediction_1 = ""
prediction_2 = ""

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:100
});

camera=document.getElementById("camera");
Webcam.attach("#camera");

function Capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='picture' src='"+data_uri+"'>";
    });
}

console.log("ml5 version:",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/lLQkrRV3z/model.json',modellodded);

function modellodded(){
    console.log("model lodded");
}





