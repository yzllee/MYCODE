/**
 * Created by mac on 16/6/28.
 */
(function () {
    function Main() {
        this._canvas = document.getElementById('canvas');
        this._context2d = this._canvas.getContext('2d');
        this._btnsave = document.getElementById('btnsave');

        this.addEventListener();
    }

    Main.prototype.mouseDownHandler = function (event) {
        this._context2d.moveTo(event.layerX, event.layerY);
        this._canvas.onmousemove = function (e) {
            this._context2d.lineTo(e.layerX, e.layerY);
            this._context2d.stroke();
        }.bind(this);
    };

    Main.prototype.mouseUpHandler = function (event) {
        this._canvas.onmousemove = null;
    };

    Main.prototype.addEventListener = function () {
        this._canvas.onmousedown = this.mouseDownHandler.bind(this);
        this._canvas.onmouseup = this.mouseUpHandler.bind(this);

        this._btnsave.onclick = function () {
            var url = this._canvas.toDataURL();
            var a = document.createElement('a');
            a.href = url;
            a.target = '_blank';
            a.innerHTML = '下载图片';
            document.body.appendChild(a);
        }.bind(this);
    };


    new Main();
})();