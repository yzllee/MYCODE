/**
 * Created by mac on 16/6/27.
 */
(function () {
    function Main() {
        this._canvas = document.getElementById('canvas');
        this._context2d = this._canvas.getContext('2d');
        this.paint();
    }

    Main.prototype.paint = function () {
        this._context2d.lineWidth = 3;
        var mdowm = false;
        (function (self) {
            self._canvas.onmousedown = function (event) {
                self.mdown = true;
                self._context2d.beginPath();
            };

            self._canvas.onmousemove = function (event) {
                if (self.mdown) {
                    var x = event.clientX + scrollX;
                    var y = event.clientY + scrollY;
                    self._context2d.lineTo(x, y);
                    self._context2d.stroke();
                }

            };

            self._canvas.onmouseup = function (event) {
                self.mdown = false;
            }


        })(this);
    };

    new Main();
})();