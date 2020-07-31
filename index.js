const canvas = $("#canvas")[0];
const ctx = canvas.getContext("2d");
var drawing = false
var color='black';
<<<<<<< HEAD
var size = 20;
=======
var size = 1;
>>>>>>> 9523084fcf32477c8c3059a5d9f3e093c059fc45
var x, y;
$(document).mousedown(function(){
  drawing=true;
  x = event.clientX - canvas.offsetLeft;
<<<<<<< HEAD
  y = event.clientY - canvas.offsetTop;
  ctx.beginPath();
  ctx.arc(x, y, size*0.5, 0, 2 * Math.PI, false);
  ctx.fillStyle = color;
  ctx.fill();
=======
  y = event.clientY - canvas.offsetTop + 10;
>>>>>>> 9523084fcf32477c8c3059a5d9f3e093c059fc45
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
});

<<<<<<< HEAD
var sliding=false;

$(".slider").click(function() {
  size = $(this).val();
  sliding=true;
  $(".sizeDemo").css("width", $(this).val());
  $(".sizeDemo").css("height", $(this).val());
});

$(".slider").mouseup(function() {
  sliding=false;
});

$(".slider").mousemove(function(){
  if(sliding){
    $(".sizeDemo").css("width", $(this).val());
    $(".sizeDemo").css("height", $(this).val());
  }
=======
$(".slider").click(function() {
  size = $(this).val();
>>>>>>> 9523084fcf32477c8c3059a5d9f3e093c059fc45
});
