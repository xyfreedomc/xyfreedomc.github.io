/**
 * Created by Administrator on 2016/3/25.
 */

var indcan = document.getElementById("index");
var ctx = indcan.getContext("2d");



onload = function () {
    draw();
};



function draw() {
    ctx.beginPath();
    ctx.fillStyle = 'rgb(192, 80, 77)'; // 红
    ctx.arc(250,283.3, 35, 0, Math.PI*2, false);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = 'rgb(155, 187, 89)'; // 绿
    ctx.arc(225,333.3, 35, 0, Math.PI*2, false);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = 'rgb(128, 100, 162)'; // 紫
    ctx.arc(275,333.3, 35, 0, Math.PI*2, false);
    ctx.fill();
}


