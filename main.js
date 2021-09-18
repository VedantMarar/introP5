function preload(){

}

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(150,250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = ""
}

function draw(){
    image(video, 230, 150, 220, 200);
    tint(tint_color);
    fill(17,143,187);
    stroke(255,0,0);
    circle(50,50,80)

    circle(50,430,80)

    circle(590,50,80)

    circle(590,430,80)
    fill(156,200,128);
    stroke(0,128,0);
    rect(90,40,460,20);

    rect(90,420,460,20);

    rect(40,90,20,300);

    rect(580,90,20,300);

    
}

function take_snapshot(){
    save('1.png');
}

function filter_tint(){
    tint_color = document.getElementById("name_colour").value ;
}

