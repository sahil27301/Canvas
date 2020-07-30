const canvas = $("#canvas")[0];
const ctx = canvas.getContext("2d");
var drawing = false;
//i've used the american spelling for color to keep it consistent lol
var color='black';
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
  // First remove highlighting for any other colours
  $("button").removeClass("button-selected");
  // Then add it to whichevr one you want
  $(this).addClass("button-selected");
  // Now make it the active colour
  color = this.classList[0];
});
