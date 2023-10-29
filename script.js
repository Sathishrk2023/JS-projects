function showTime() {
    const Time = new Date();
    let hr = Time.getHours();
    let min = padZero(Time.getMinutes());
    let sec = padZero(Time.getSeconds());
    if (hr>12) {
        hr = hr - 12;
        document.getElementById("ampm").innerHTML = "PM";
    }
    
    document.getElementById("hours").innerHTML = padZero(hr);
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;

}
function padZero(num) {
    return num<10?"0"+num:num;
}
setInterval(showTime,1000)