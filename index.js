const canvas = $("#canvas")[0];
const ctx = canvas.getContext("2d");
var drawing = false;
var x, y;
$(document).mousedown(function(){
  drawing=true;
  x = event.clientX - canvas.offsetLeft;
  y = event.clientY - canvas.offsetTop;
});
$(document).mouseup(function(){
  drawing=false;
});
$("#canvas").mousemove(function(){
  if(!drawing){
    return;
  }
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#000000';
  ctx.moveTo(x, y);
  x = event.clientX - canvas.offsetLeft;
  y = event.clientY - canvas.offsetTop;
  ctx.lineTo(x, y);
  ctx.stroke()
});
