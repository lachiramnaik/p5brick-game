var ball_x, ball_y, ball_diameter, ball_dx, ball_dy;
var paddle_x, paddle_y, paddle_width, paddle_height, paddle_dx;
var b_height, bwidth, b1_x, b1_y;
var waitTime = 3;
// var button;

var score = 0;

function setup() {
    createCanvas(500, 500);
    background("black")
    ball_x = width / 2;
    ball_y = height / 2 + 10;
    ball_diameter = 25;
    ball_dx = 3;
    ball_dy = 2;
    circle(ball_x, ball_y, ball_diameter)

    paddle_height = 20;
    paddle_width = 70;
    paddle_x = (width / 2) - (paddle_width) / 2;
    paddle_y = height - (20);
    paddle_dx = 4;

    b1_height = 15;
    b_width = 50;
    b1_x = 40;
    b1_y = 40;
}
let boxArray = []
let x = 5;
let y = 50;
for (let i = 0; i < 35; i++) {
    boxArray[i] = {}
    boxArray[i].posX = x;
    boxArray[i].posY = y;
    boxArray[i].height = 20;
    boxArray[i].width = 60;
    x += 70;
    if (boxArray.length % 7 == 0) {
        x = 5
        y += 25;
    }
    //rect( boxArray[i].posX, boxArray[i].posY, boxArray[i].width, boxArray[i].height)
}


function draw() {
    background("black");
    circle(ball_x, ball_y, ball_diameter)
    rect(paddle_x, paddle_y, paddle_width, paddle_height)
    stroke('yellow')
        // rect(b1_x, b1_y, b_width, b1_height)
        //making boxArray
    for (let j = 0; j < boxArray.length; j++) {
        rect(boxArray[j].posX, boxArray[j].posY, boxArray[j].width, boxArray[j].height)
    }

    ball_x += ball_dx;
    ball_y += ball_dy; // y direction opposite
    if (ball_x + (ball_diameter / 2) >= width) {
        ball_dx = -(ball_dx)
    }
    if (ball_x - (ball_diameter / 2) <= 0) {
        ball_dx = -(ball_dx)

    }
    if (ball_y + (ball_diameter / 2) >= height) {
        ball_dy = 0;
        ball_dx = 0;
        paddle_dx = 0;
        // fill('yellow')

        textSize(30);
        // text('You Loose', 200, 200);
        // strike('yellow')
        // fill("blue");
        text('Game Over', 130, 250);
        //fill();
        text('Score :' + score, 10, 30);
        noLoop();

        //text("You Loose",300,300);
        // timeDelay(0.2)

    }
    if (ball_y - (ball_diameter / 2) <= 0) {
        ball_dy = -(ball_dy)
    }
    if (keyIsDown(RIGHT_ARROW) && (paddle_x + paddle_width) < width) {
        paddle_x += paddle_dx
    }

    if (keyIsDown(LEFT_ARROW) && (paddle_x) > 0) {
        paddle_x -= paddle_dx
    }
    if (((ball_y + ball_diameter / 2) >= height - paddle_height) && (ball_x + ball_diameter / 2 > paddle_x) && (ball_x - ball_diameter / 2 < paddle_x + paddle_width)) {
        ball_dy = -(ball_dy)

    }

    for (j = 0; j < boxArray.length; j++) {


        if (ball_y > boxArray[j].posY + boxArray[j].height) {
            if ((ball_y - ball_diameter / 2 <= boxArray[j].posY + boxArray[j].height) && (ball_x + ball_diameter / 2 > boxArray[j].posX) && (ball_x - ball_diameter / 2 < boxArray[j].posX + boxArray[j].width)) {
                ball_dy = -(ball_dy)
                boxArray[j].height = 0
                boxArray[j].width = 0
                boxArray[j].posX = 10000
                boxArray[j].posY = 10000
                score += 1;
            }
        }
        if (ball_y < boxArray[j].posY) {
            if ((ball_y + ball_diameter / 2 >= boxArray[j].posY) && (ball_x + ball_diameter / 2 > boxArray[j].posX) && (ball_x - ball_diameter / 2 < boxArray[j].posX + boxArray[j].width)) {
                ball_dy = -(ball_dy)
                boxArray[j].height = 0
                boxArray[j].width = 0
                boxArray[j].posX = 10000
                boxArray[j].posY = 10000
                score += 1;
            }
        }
        if (score == 35) {
            textSize(32)
                // textAlign(CENTER)
                // text('Great', 180, 230);
            fill('green')
            textAlign(CENTER, TOP)
            text('You Won', 100, 0);
            ball_dx = 0;
            ball_dy = 0;
            noLoop()
        }

    }
    console.log(`Score is ${score}`)

}