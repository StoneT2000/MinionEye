$(document).ready(function () {
  var cWidth = window.innerWidth;
  var cHeight = window.innerHeight;
  var centerX = cWidth/2;
  var centerY = cHeight/2;
  $("body").mousemove(function(e) {
    //console.log(e.pageX, e.pageY)
    var dx = e.pageX - centerX;
    var dy = e.pageY - centerY;
    var angle = Math.atan2(dx, -(dy));
    var dist = Math.sqrt(dx*dx + dy*dy)
    var offx = Math.sin(angle);
    var offy = -Math.cos(angle);
    $("#eye_pupil_wrapper").css("left", offx* 36 * dist/centerX);
    $("#eye_pupil_wrapper").css("top", offy* 36 * dist/centerY);
  })
  window.onresize = function() {
    cWidth = window.innerWidth;
    cHeight = window.innerHeight;
    centerX = cWidth/2;
    centerY = cHeight/2;
  }

})

function angle(x1,y1,x2,y2) {
  var angle = Math.atan2(x1 - x2, -(y1 - y2) );
  return angle;
}