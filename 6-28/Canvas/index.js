/**
 * Created by mac on 16/6/28.
 */
(function () {
    function Main() {
        this._canvas = document.getElementById('canvas');
        this._context2d = this._canvas.getContext('2d');


        this.drawRect();
    }

    Main.prototype.drawRect = function () {
        // this._context2d.save();
        // this._context2d.translate(50, 0);
        // this._context2d.fillRect(0, 0, 100, 100);
        //
        // this._context2d.save();
        // this._context2d.translate(150, 0);
        // this._context2d.fillRect(0, 0, 100, 100);
        // this._context2d.restore();
        //
        // this._context2d.save();
        // this._context2d.fillStyle = '#ff0000';
        // this._context2d.translate(200, 50);
        // this._context2d.beginPath();
        // this._context2d.arc(0, 0, 50, 0, Math.PI * 2);
        // this._context2d.closePath();
        // this._context2d.fill();
        // this._context2d.restore();
        //
        // this._context2d.restore();
        //
        // this._context2d.save();
        // this._context2d.translate(150,150);
        // this._context2d.font = '30px null';
        // this._context2d.fillText("Script",0,0);
        // this._context2d.restore();

        this._context2d.save();

        this._context2d.translate(300, 300);
        this._context2d.fillRect(0, 0, 100, 100);
        this._context2d.restore();


        this._context2d.save();

        this._context2d.rotate(45);
        this._context2d.fillRect(0, 0, 100, 100);


        this._context2d.save();

        this._context2d.rotate(45);
        this._context2d.fillRect(0, 0, 100, 100);
        this._context2d.restore();
        this._context2d.save();

        this._context2d.translate(0, 200);
        this._context2d.fillRect(0, 0, 100, 100);
        this._context2d.restore();
    };

    new Main();
})();