function preload(){
 img = LoadImage('dog_cat.jpg');
}


function setup() {
    canvas = CreateCanvas(640, 420);
    canvas.center();
}

img = "";

function draw() {
    image(img, 0, 0, 640, 420);
    Fill("#FF0000")
    text("Dog", 45, 75);
    noFill();
    stroke("#FF0000")
    rect(30, 60, 450,  350 );

    fill("#FF0000")
    text("Cat", 320, 120);
    noFill();
    stroke("#FF0000")
    rect(300, 90, 270, 320 );
}