let deadLine = "2024-03-20";

function getTimeRemaining(endtime) {
    let convertmilisec = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor(convertmilisec / 1000 % 60),
        minutes = Math.floor(convertmilisec / (1000 * 60) % 60),
        // hours = Math.floor(convertmilisec / (1000 * 60 * 60));
        hours = Math.floor(convertmilisec / (1000 * 60 * 60) % 24),
        days = Math.floor(convertmilisec / (1000 * 60 * 60 * 24));
    return {
        "stoptimer": convertmilisec,
        "days": days,
        "hours": hours,
        "minutes": minutes,
        "seconds": seconds,

    };
}

function setClock(id, endtime) {
    let timer = document.getElementById(id),
        days = timer.querySelector(".days");
    hours = timer.querySelector(".hours"),
        minutes = timer.querySelector(".minutes"),
        seconds = timer.querySelector(".seconds");
    timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
        let tim = getTimeRemaining(endtime);
        days.textContent = tim.days;
        hours.textContent = tim.hours;
        minutes.textContent = tim.minutes;
        seconds.textContent = tim.seconds;

    }
}
setClock("timer", deadLine);

let colors = ['white', 'rgb(54, 52, 52) '];
let colInx = 0;
(function changeColor() {
    document.querySelector("#message, #message1, #message2").style.color = colors[colInx++ % colors.length];
    setTimeout(changeColor, 1000);
})();

let colors1 = ['white', 'rgb(54, 52, 52) '];
let colInx1 = 0;
(function changeColor() {
    document.querySelector("#message1").style.color = colors[colInx1++ % colors1.length];
    setTimeout(changeColor, 1000);
})();
let colors2 = ['white', 'rgb(54, 52, 52) '];
let colInx2 = 0;
(function changeColor() {
    document.querySelector("#message2").style.color = colors[colInx2++ % colors2.length];
    setTimeout(changeColor, 1000);
})();