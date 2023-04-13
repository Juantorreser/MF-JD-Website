let days = 29;
let hours = 24;
let minutes = 0;
let seconds = 0;
setSeconds();

//Seconds
function setSeconds(){
    let txtSeconds;

    if (seconds < 0){
        seconds = 59;
    }

    if(seconds < 10){
        txtSeconds =  `0${seconds}`;

    } else{
        txtSeconds = seconds;
    }
    document.getElementById("seconds").innerHTML = txtSeconds;
    seconds --;

    setMinutes(seconds);
}

setInterval(setSeconds,1000);

//Minutes
function setMinutes(seconds){
    let txtMinutes;

    if(seconds == -1 && minutes !==0){
        setTimeout(() =>{
            minutes--;
        },500)

    }else if(seconds == -1 && minutes == 0){
        setTimeout(() =>{
            minutes = 59;
        },500)
    }

    if(minutes < 10){
        txtMinutes =` 0${minutes}`;

    }else{
        txtMinutes = minutes;
    }
    document.getElementById("minutes").innerHTML = txtMinutes;

    setHours(seconds,minutes);
}

//Hours
function setHours(seconds,minutes){
    let txtHours;

    if(seconds == -1 && minutes == 0 && hours !==0 ){
        setTimeout(() =>{
            hours--;
        },500)

    }else if(seconds == -1 && minutes == 0 && hours ==0){
        setTimeout(() =>{
            hours=24;
        },500)
    }

    if(hours < 10 ){
        txtHours = `0${hours}`;

    }else{
        txtHours = hours;
    }
    document.getElementById("hours").innerHTML=txtHours;
    setDays(hours,minutes,seconds)
}

//Days
function setDays(hours,minutes,seconds){
    let txtDays;

    if(seconds == -1 && minutes == 0 && hours == 0 && days !==0){
        setTimeout(() =>{
            days--;
        },500)

    }else if(seconds == -1 && minutes == 0 && hours == 0 && days == 0){
        setTimeout(() =>{
            days=44;
        },500)
    }

    if(days < 10 ){
        txtDays = `0${days}`;

    }else{
        txtDays = days;
    }
    document.getElementById("days").innerHTML=txtDays;

}