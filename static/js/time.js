window.onload = Time;
setInterval(Time, 1000);
function Time() {
    today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var date = today.getDate();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    if (h < 10) h = '0' + h;
    if (m < 10) m = '0' + m;
    if (s < 10) s = '0' + s;
    document.querySelector("#current-time").innerHTML = year + ' - ' + month + ' - ' + date + '&nbsp;&nbsp;<i class="far fa-clock"></i>&nbsp;&nbsp;' + h + ' : ' + m + ' : ' + s;
}