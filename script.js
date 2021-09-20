function cap() {
    var alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V'
        , 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
        'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '#', '$', '%', '^', '&', '*', '+'];
    var a = alpha[Math.floor(Math.random() * 71)];
    var b = alpha[Math.floor(Math.random() * 71)];
    var c = alpha[Math.floor(Math.random() * 71)];
    var d = alpha[Math.floor(Math.random() * 71)];
    var e = alpha[Math.floor(Math.random() * 71)];
    var f = alpha[Math.floor(Math.random() * 71)];

    var final = a + b + c + d + e + f;
    document.getElementById("capt").value = final;
}
function validcap() {
    var stg1 = document.getElementById('capt').value;
    var stg2 = document.getElementById('textinput').value;
    if (stg1 == stg2) {
        alert("Form is Submitted Succesfully");
        return true;
    }
    else {
        alert("Please Enter Valid Captcha");
        return false;
    }

}
// const startingMinutes = 10;
// let time = startingMinutes * 60;

// const countdownEl = document.getElementById('countdown');

// setInterval(updateCountdown, 1000);

// function updateCountdown() {
//     const minutes = Math.floor(time / 60);
//     let seconds = time % 60;

//     seconds = seconds < 10 ? '0' + seconds : seconds;
//     countdownEl.innerHTML = '$ {minutes}:  ${seconds}';
//     time--;
// }

// // Set the date we're counting down to
// var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();
    
//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;
    
//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
//   // Output the result in an element with id="demo"
//   document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";
    
//   // If the count down is over, write some text 
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("countdown").innerHTML = "EXPIRED";
//   }
// }, 1000);
(function(endTime){
    endTime*=1000; // javascript works with milliseconds
    endTime+=new Date().getTime();// add the current system time into the equation
    // your timeSync function
    (function timerSync() {
        // get elapsed time as a Date Object
        var diff = new Date(endTime - new Date().getTime());
        // get timer span
        var timer=document.getElementById('countdown');
        // has the timer finished?
        if(diff<=0)return timerEnd(timer);
        // set the current time difference
        timer.innerHTML = 
        	doubleDigits(diff.getUTCHours())
        	+ ':' +
        	doubleDigits(diff.getUTCMinutes())
            + ':' +
        	doubleDigits(diff.getUTCSeconds())
        ;
        // recursion
        setTimeout(timerSync,1000);
    })();// also call it to start the timer
    // your timer end function
	function timerEnd(timer) {
        timer.innerHTML='Timer has stopped now';
    }
    // double digit formatting
    function doubleDigits(number) {
    	return number<10
        	? '0'+number
        	: number
        ;
    } 
})(
    (0 * 0)+ (3 * 60) + (00)
);// time to elapse 1:30:10