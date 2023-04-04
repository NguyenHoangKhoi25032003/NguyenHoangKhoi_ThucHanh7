let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let minute = 00;
let second = 00;

  
startBtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
});
  
stopBtn.addEventListener('click', function () {
    timer = false;
});
  
resetBtn.addEventListener('click', function () {
    timer = false;
    minute = 0;
    second = 0;
    
    document.getElementById('seconds').innerHTML = "00";
    document.getElementById('tens').innerHTML = "00";
 
});
  
function stopWatch() {
    
    if (timer) {
       
            second++;
           
  
        if (second == 60) {
            minute++;
            second = 0;
        }
  
       
  
       
        let minString = minute;
        let secString = second;
  
      
  
        if (minute < 10) {
            minString = "0" + minString;
        }
  
        if (second < 10) {
            secString = "0" + secString;
        }

  
     
        document.getElementById('tens').innerHTML =secString ;
        document.getElementById('seconds').innerHTML = minString;

        setTimeout(stopWatch, 1000);
    }
}
