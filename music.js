song1 = "";
music = "";
leftWristX =0;
leftWristY =0;
rightWristX =0;
rightWristY =0;


function preload(){
    
    song1 = loadSound("new_1.mp3");
    music = loadSound("new_2.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    

    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses)
}
function draw(){
    img(video,0,0,600,500);
}


function play(){
 song1.play();
 music.play();
}
  
function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function gotPoses(){
    if(results.length < 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX" +leftWristX+"leftWristY"+leftWristY);

        
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX" +rightWristX+"rightWristY"+rightWristY);
    }
}


