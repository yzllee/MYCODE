/**
 * Created by mac on 16/6/29.
 */
(function () {
    function Main() {
        var canvas = document.getElementById("canvas");
        var context2d = canvas.getContext("2d");
        var v = document.getElementById('video');
        
        (function black() {
            context2d.drawImage(v, 0, 0, canvas.width, canvas.height);
            var imgData = context2d.getImageData(0, 0, canvas.width, canvas.height);
            var data = imgData.data;
            for (var i = 0; i < data.length; i += 4) {
                var color = (data[i] + data[i + 1] + data[i + 2]) / 3;
                data[i] = color;
                data[i + 1] = color;
                data[i + 2] = color;
            }
            context2d.putImageData(imgData, 0, 0);
            requestAnimationFrame(black);
        })();
    }

    new Main();
})();