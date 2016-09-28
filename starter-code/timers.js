// your code here:

function init(){


var seconds = 0;
var timerID = 0;

var reset = document.getElementById('reset');
reset.addEventListener('click', resetIt);

var start = document.getElementById('start');
start.addEventListener('click', startIt);


var pause = document.getElementById('pause');
pause.addEventListener('click', pauseIt);




  function updateTime(){
       var h1timer = document.querySelector('#timer')
  h1timer.textContent = 'Timer: ' + seconds + 's'
  seconds++
  }



function resetIt(){
   clearInterval(timerID);
  timerID = 0
   seconds = 0;
  var h1timer = document.querySelector('#timer')
   h1timer.textContent = "Stop Watch";
}

function startIt(){


if (timerID === 0) {
  timerID = setInterval(updateTime, 1000);
  console.log(timerID);

  }else{
    timerID = clearInterval(pauseIt, 1000);
  }




}



   function pauseIt(){
       clearInterval(timerID);
      timerID = 0
  }



}



init();
