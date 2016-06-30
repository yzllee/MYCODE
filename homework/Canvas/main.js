/**
 * Created by mac on 16/6/27.
 */
(function () {
    function Main() {
        /**
         *
         * @type {HTMLCanvasElement}
         * @private
         */
        // this._canvas = document.getElementById('canvas');
        // this._context2d = this._canvas.getContext('2d');
        var array = [];
        var currentX = 0;
        var currentY = 0;
        var m_down = false;

        function paint() {
            var canvas = document.getElementById('canvas');
            var ctx = canvas.getContext('2d');
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(array[0][0], array[0][1]);
            if (array.length == 1) {
                ctx.lineTo(array[0][0] + 1, array[0][1] + 1);
            } else {
                var i = 1;
                for (i in array) {
                    ctx.lineTo(array[i][0], array[i][1]);
                    ctx.moveTo(array[i][0], array[i][1]);
                }
            }
            ctx.closePath();
            ctx.stroke();
        }

        canvas.onmousedown = function (event) {
            m_down = true;
            currentX = event.offsetX;
            currentY = event.offsetY;
            array.push([currentX, currentY]);
            paint();
        };

        canvas.onmouseup = function (event) {
            m_down = false;
            array = [];
        };

        canvas.onmousemove = function (event) {
            if (m_down) {
                currentX = event.offsetX;
                currentY = event.offsetY;
                array.push([currentX, currentY]);
                paint();
            }
        };
    }

    // Main.prototype.drawRect = function () {
    //     this._context2d.fillStyle = "#ff0000";
    //     this._context2d.fillRect(10, 10, 200, 100);
    //
    //     this._context2d.lineWidth = 3;
    //     this._context2d.strokeRect(10, 10, 200, 100);
    // };
    //
    // Main.prototype.drawCircle = function () {
    //
    //     this._context2d.arc(100, 100, 50, 0, Math.PI * 2);
    //     this._context2d.stroke();//描边
    //     this._context2d.closePath();//结束画画笔路径
    //
    //     this._context2d.beginPath();//开始画笔路径
    //     this._context2d.arc(100, 200, 50, 0, Math.PI);
    //     this._context2d.closePath();
    //     this._context2d.fillStyle = "#ff0000";
    //     this._context2d.fill();
    //     this._context2d.stroke();
    //
    //     this._context2d.beginPath();
    //     this._context2d.moveTo(200, 100);
    //     this._context2d.arc(200, 100, 50, 0, Math.PI / 2);
    //     this._context2d.closePath();
    //     this._context2d.stroke();
    // };
    //
    // Main.prototype.drawLine = function () {
    //     this._context2d.moveTo(0, 0);
    //     this._context2d.lineTo(200, 100);
    //     this._context2d.stroke();
    // };
    //
    // Main.prototype.drawText = function () {
    //     this._context2d.font = "32px 微软雅黑";
    //     this._context2d.fillStyle = "red";
    //     this._context2d.fillText("Hello World", 10, 50);
    //
    // };
    //
    // Main.prototype.drawImage = function () {
    //     var img = document.createElement('img');
    //     img.onload = function () {
    //         this._context2d.drawImage(img, 0, 0);
    //     }.bind(this);
    //     img.src = "bear.jpg";
    // };


    new Main();
})();