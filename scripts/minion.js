var eye_radius = 200;
var factor = 1;
$(document).ready(function () {
  var cWidth = window.innerWidth;
  var cHeight = window.innerHeight;
  var centerX = cWidth/2;
  var centerY = cHeight/2;
  if (cWidth < 360) {
    eye_radius = 120;
    factor = 0.6;
    $(".eye_wrapper").css('transform','scale(0.6)');
    $("#band").css('height','39.6px');
  }
  else if (cWidth < 450) {
    eye_radius = 160;
    factor = 0.8;
    $(".eye_wrapper").css('transform','scale(0.8)');
    $("#band").css('height','52.8px');
  }
  else {
    eye_radius = 200;
    factor = 1;
    $(".eye_wrapper").css('transform','scale(1)');
    $("#band").css('height','66px');
  }
  $("#stuart")[0].checked = true;
  $("body").mousemove(function(e) {
    //console.log(e.pageX, e.pageY)
    var dx = e.pageX - centerX;
    var dy = e.pageY - centerY;
    var angle = Math.atan2(dx, -(dy));
    var dist = Math.sqrt(dx*dx + dy*dy)
    var offx = Math.sin(angle);
    var offy = -Math.cos(angle);
    $(".eye_pupil_wrapper").css("left", Math.sqrt(Math.abs(offx)* 800 * dist/centerX) * Math.sign(dx));
    $(".eye_pupil_wrapper").css("top", Math.sqrt(Math.abs(offy)* 800 * dist/centerY) * Math.sign(dy));
  })
  window.onresize = function() {
    cWidth = window.innerWidth;
    cHeight = window.innerHeight;
    centerX = cWidth/2;
    centerY = cHeight/2;
    if ($("#stuart")[0].checked == true){
      $("#eye2").css('display','none');
      $("#eye1").css('left','50%');
    }
    if ($("#kevin")[0].checked == true){
      $("#eye2").css('display','block');
      $("#eye1").css('left',cWidth/2 - eye_radius/2 + 10*factor);
      $("#eye2").css('left',cWidth/2 + eye_radius/2 - 10*factor);
    }
    if (cWidth < 360) {
      eye_radius = 120;
      factor = 0.6;
      $(".eye_wrapper").css('transform','scale(0.6)');
      $("#band").css('height','39.6px');
    }
    else if (cWidth < 450) {
      eye_radius = 160;
      factor = 0.8;
      $(".eye_wrapper").css('transform','scale(0.8)');
      $("#band").css('height','52.8px');
    }
    else {
      eye_radius = 200;
      factor = 1;
      $(".eye_wrapper").css('transform','scale(1)');
      $("#band").css('height','66px');
    }
  }
  $("#stuart").change(function() {
    if ($("#stuart")[0].checked == true){
      $("#kevin")[0].checked = false;
      $("#eye2").css('display','none');
      $("#eye1").css('left','50%');
    }
  })
  $("#kevin").change(function() {
    if ($("#kevin")[0].checked == true){
      $("#stuart")[0].checked = false;
      $("#eye2").css('display','block');
      $("#eye1").css('left',cWidth/2 - eye_radius/2 + 10 * factor);
      $("#eye2").css('left',cWidth/2 + eye_radius/2 - 10 * factor);
    }
  })

})

function angle(x1,y1,x2,y2) {
  var angle = Math.atan2(x1 - x2, -(y1 - y2) );
  return angle;
}