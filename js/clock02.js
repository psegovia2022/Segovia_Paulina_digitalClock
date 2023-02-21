
function runClock() {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let session = "AM";

    if(hr == 0) {
        hr = 12;
    }

    if(hr > 12) {
        hr = hr - 12;
        session = "PM";
    }

    hr = (hr < 10) ? "0" + hr : hr;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    let time = hr + ":" + min + ":" + sec + " " + session;

    document.querySelector('#clockbox').innerText = time;
    let t = setInterval(runClock, 1000);

}

runClock();