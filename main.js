Webcam.set({
    width:300,
    height:400,
    image_format:"png",
    png_quality:90,
});

camera= document.getElementById("webcam")
Webcam.attach(camera)
 
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("toDelete").innerHTML='<img id="captured-image" src = "'+data_uri+'"/>'
    });  
}

classifier=ml5.imageClassifier('MobileNet', modelloaded)

function modelloaded(){
    
}

function check(){
    img=document.getElementById("captured-image")
    classifier.classify(img, gotResults)
}
function gotResults(error, results){
    if(error){
        console.log(error)
    }else{
        console.log(results)
        document.getElementById("object-name").innerHTML = results[0].label
    }
}

