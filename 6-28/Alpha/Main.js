/**
 * Created by mac on 16/6/28.
 */
(function () {
    function Main() {
        this._context2d = document.getElementById('canvas').getContext('2d');

        var img = new Image();
        img.onload = function () {
            this.draw(img);
        }.bind(this);
        img.src = 'photo.jpg';
    }

    Main.prototype.draw = function (img) {
        var g = this._context2d;
        g.drawImage(img, 0, 0);
        g.save();
        g.fillStyle = '#0066ff';
        g.globalAlpha = 0.5;
        g.beginPath();
        g.rect(0, 0, 300, 300);
        g.arc(100, 100, 80, 0, Math.PI * 2);
        g.closePath();
        g.fill('evenodd');
        g.clip();
    };

    new Main();
})();