song_p="";
song_h="";
leftWrist_x=0;
leftWrist_y=0;
rightWrist_x=0;
rightWrist_y=0;
score_left_wrist = 0;
song_peter_pan = 0;
score_right_wrist = 0;
song_harry_potter_theme = 0;

function setup()
{
    canvas = createCanvas(600,530);
    canvas.center();

    video= createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function draw()
{
    image(video,0,0,600,530);

    fill("#ff0000");
    stroke("#00FF00");

    song_peter_pan = song_p.isPlaying();
    console.log(song_peter_pan);

    song_harry_potter_theme = song_p.isPlaying();
    console.log(song_harry_potter_theme);

    if(score_left_wrist > 0.2){
    circle(leftWrist_x,leftWrist_y,20);
    harry_potter_song.stop();
    if(song_peter_pan == false){
        peter_pan_song.play();
    }
    else{
        document.getElementById("").innerHTML = "Song Name: Peter Pan Song";
    }
}
}

    if(score_right_wrist > 0.2){
    circle(rightWrist_x,rightWrist_y,20);
    peter_pan_song.stop();
    if(song_harry_potter_theme == false){
        harry_potter_song.play();
    }
    else{
        document.getElementById("").innerHTML = "Song Name: Harry Potter Song";
    }
}


function preload()
{
    
}

function modelLoaded()
{
    console.log("PoseNet Is Initialized !");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        score_left_wrist = results[0].pose.keypoints[9].score;
        console.log("left Wrist Score ="+score_left_wrist);

        score_right_wrist = results[0].pose.keypoints[9].score;
        console.log("Right Wrist Score ="+score_right_wrist);

        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("Left Wrist x = "+leftWrist_x+"Left Wrist y = "+leftWrist_y);

        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        console.log("Right Wrist x = "+rightWrist_x+"Right Wrist y = "+rightWrist_y);
    }
}