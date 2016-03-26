/**
* Created by yao on 2016/3/7.
*/
var can = document.getElementById("Snake");

//        the speed of snake
var speed = 15;

//          2D or 3D
var cxt = can.getContext("2d");

//          The initial coordinate
var x = 15;
var y = 15;

//          location of food;
var foodx = 0;
var foody = 0;


//          length of snake
var len = 3;

//          record the path
var path = [];

//          size of snake
var size = 15;

//          direction   0 up 1 down 2 left 3 right
var direction =3;

//          move

setInterval(function(){
    move();
},1000/speed);

function  move() {

    switch (direction) {
        case 0:
            x = x - size;
            break;
        case 1:
            y = y - size;
            break;
        case 2:
            x = x + size;
            break;
        case 3:
            y = y + size;
            break;
    }

//              case you lose

//              1. touch the wall
    if (x > 450 || x < 0 || y > 450 || y < 0) {
        alert("YOU LOSE! YOU TOUCH THE WALL");
        window.location.href = "middle.html";
    }

//              2. touch yourself    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    for (var i = 0; i < path.length; i++) {
        if (parseInt(path[i].x) == x && (path[i].y) == y) {
            alert("YOU LOSE! YOU TOUCH YOURSELF");
            window.location.href = "middle.html";
        }
    }


//              path memory
    if (path.length > len) {
        var cl = path.shift();
        cxt.clearRect(cl['x'], cl['y'], size, size);
    }

    path.push({'x': x, 'y': y});
    img = new Image;
    img.src = "unit.jpg";
    img.onload = function(){
        cxt.drawImage(img,x,y,15,15);
    };


    if ((foodx * 15) == x && (foody * 15) == y) {
        rand_food();
        len++;
    }

}
rand_food();


document.onkeydown = function(e){
    var code = e.keyCode - 37;
    switch (code){
        case 1 : direction = 1;break;
        case 2 : direction = 2;break;
        case 3 : direction = 3;break;
        case 0 : direction = 0;break;
    }
}

function rand_food(){
    foodx = Math.ceil(Math.random()*30);
    foody = Math.ceil(Math.random()*30);
    img = new Image;
    img.src = "apple.jpg";
    img.onload = function(){
        cxt.drawImage(img,foodx*15,foody*15,15,15);
    };

}
