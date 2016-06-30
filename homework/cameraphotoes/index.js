/**
 * Created by plter on 6/29/16.
 */

(function () {

    function Main() {

        this._video = document.getElementById("video");
        this._btn = document.getElementById('btn');
        this._canvas = document.getElementById('canvas');
        this._context2d = this._canvas.getContext('2d');
        this._div = document.getElementById('div');

        this.showCamera();

        this.addListeners();
    }

    Main.prototype.showCamera = function () {
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

        navigator.getUserMedia({video: true}, function (stream) {

            var url = URL.createObjectURL(stream);
            this._video.src = url;
            this._video.play();
        }.bind(this), function (error) {
            console.error("无法获取设备");
            console.error(error);
            alert("您拒绝了使用本机设备");
        });
    };

    Main.prototype.addListeners = function () {
        this._btn.onclick = function () {
            this.draw();
            this.album();
        }.bind(this);
    };

    Main.prototype.draw = function () {
        this._context2d.drawImage(this._video, 0, 0, this._canvas.width, this._canvas.height);
        var imgData = this._context2d.getImageData(0, 0, this._canvas.width, this._canvas.height);
        this._context2d.putImageData(imgData, 0, 0);
    };

    Main.prototype.album = function () {
        var img = document.createElement('img');
        img.src = this._canvas.toDataURL("image/png");
        img.width = 150;
        img.height = 100;
        this._div.appendChild(img);
    };
    new Main();
})();