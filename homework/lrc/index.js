/**
 * Created by mac on 16/6/20.
 */
window.onload = function () {
    function init() {
        $.get("Heartbeats.lrc").done(function (data) {
            var pattern = /\[\d{2}:\d{2}.\d{2}\]/g;
            var lyric = data.replace(pattern,'');
            lyric = lyric.split('\n');
            var timer = [];
            var time = data.match(pattern);
            time.forEach(function (v1,i1,a1) {
                var t = v1.slice(1,-1).split(':');
                timer.push((parseInt(t[0],10) * 60) + parseFloat(t[1]));
            })
            var i = 0;
            var oDiv = document.getElementById('div');
            var terval = setInterval(function () {
                audio = document.getElementById("audio");
                if(audio.currentTime.toFixed(1) == timer[i].toFixed(1)){
                    oDiv.innerHTML = lyric[i];
                    i++;
                };
                // console.log(audio.currentTime.toFixed(2));
                console.log(audio.currentTime.toFixed(2));
                if(audio.currentTime > 235){
                    clearInterval(terval);
                }
            },100);
        })
    }
    init();
};