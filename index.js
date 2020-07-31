const canvas = $("#canvas")[0];
const ctx = canvas.getContext("2d");
var drawing = false
var color='black';
var size = 20;
var x, y;
$(document).mousedown(function(){
  drawing=true;
  x = event.clientX - canvas.offsetLeft;
  y = event.clientY - canvas.offsetTop;
  ctx.beginPath();
  ctx.arc(x, y, size*0.5, 0, 2 * Math.PI, false);
  ctx.fillStyle = color;
  ctx.fill();
});
$(document).mouseup(function(){
  drawing=false;
});
$("#canvas").mousemove(function(){
  if(!drawing){
    return;
  }
  ctx.beginPath();
  ctx.lineWidth = size;
  ctx.lineCap = 'round';
  ctx.strokeStyle = color;
  ctx.moveTo(x, y);
  x = event.clientX - canvas.offsetLeft;
  y = event.clientY - canvas.offsetTop;
  ctx.lineTo(x, y);
  ctx.stroke()
});

$("button").mousedown(function(e){
  e.preventDefault()
});

$("button").click(function(){
  $("button").removeClass("button-selected");
  $(this).addClass("button-selected");
  color = this.classList[0];
  $(".sizeDemo").css("background-color", color);
});

var sliding=true;

$(".slider").click(function() {
  $(".sizeDemo").css("width", $(this).val());
  $(".sizeDemo").css("height", $(this).val());
  size = $(this).val();
  sliding=true;
});

$(".slider").mouseup(function() {
  sliding=false;
});

$(".slider").mousemove(function(){
  if(sliding){
    $(".sizeDemo").css("width", $(this).val());
    $(".sizeDemo").css("height", $(this).val());
  }
  size = $(this).val();
});
