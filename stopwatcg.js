var tens = 0;
var seconds = 0;
var appendSecond = document.getElementById("seconds");
var appendTens = document.getElementById("tens");
var start = document.getElementById("start");
var stops = document.getElementById("stop");
var reset = document.getElementById("reset");
var Interval;
// reset re-initialize khởi tạo lại
reset.onclick = function () {
	clearInterval(Interval);
	tens = "00";
	seconds = "00";
	appendTens.innerHTML = tens;
	appendSecond.innerHTML = seconds;
}
// start 
start.onclick = function () {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);
 
}
 stops.onclick = function () {
	 clearInterval(Interval);
  }
function startTimer() {
	 tens++; 
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSecond.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
}








