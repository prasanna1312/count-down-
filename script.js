const target= new Date("2026-12-13 00:00:00");

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

function count()
{
    const now= new Date();
    let diff = target-now;

    let days= Math.floor(diff/(24*60*60*1000));

    let hours = Math.floor(diff/(60*60*1000)%24);

    let minutes = Math.floor(diff/(60*1000)%60);
    
    let seconds = Math.floor(diff/(1000)%60);

    daysElement.textContent=days;
    hoursElement.textContent=hours;
    minutesElement.textContent=minutes;
    secondsElement.textContent=seconds;
}

count();
setInterval(count, 1000);