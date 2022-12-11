const display = document.querySelector(".timer");
const bg = document.querySelector(".bg");
const text = document.querySelector("#text");
text.focus();
const music = new Audio("news.mp3");
let time = "100";
let totime = time;
let isPaused = false;
let onOff = true;

function times() {
    const setinterval = setInterval(() => {
        if (isPaused)
            time -= 1;
            let Hour = String(Math.floor(time / 3600)).padStart(2, '0');
            let Minute = String(Math.floor(Math.floor(time % 3600) / 60)).padStart(2, '0');
            let Second = String(time % 60).padStart(2, '0');
            display.textContent = Hour + ":" + Minute + ":" + Second;
            bg.style.width = `${(time / totime) * 100}%`;
        if (time <= 0) {
            clearInterval(setinterval)
            display.textContent = "00:00:00"
            music.play();
        }
    }, 1000);
}

text.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
        if (onOff) {
            time = text.value;
            totime = text.value;
            times() 
            onOff = false ;
        }
    }
})

window.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
        (isPaused) ? isPaused = false : isPaused = true ;
    }
    if (e.code === "ArrowRight") {
        time -= 5;
    }
    if (e.code === "ArrowLeft") {
        time += 5;
    }
})