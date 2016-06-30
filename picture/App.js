/**
 * Created by mac on 16/6/29.
 */
(function () {
    function Main() {
        this._MAX_VALUE = 100;
        this._data = {
            "html": {"chrome": 90, "firefox": 89, "ie": 10},
            "css": {"chrome": 95, "firefox": 96, "ie": 5},
            "js": {"chrome": 98, "firefox": 95, "ie": 4}
        };

        this._context2d = document.getElementById("canvas").getContext("2d");

        this._html = this.getNumber(this._data.html);
        this._css = this.getNumber(this._data.css);
        this._js = this.getNumber(this._data.js);

        this.drawData(this._html, 20);
        this.drawData(this._css, 140);
        this.drawData(this._js, 260);

        this.iteam();
    }

    Main.prototype.getNumber = function (obj) {
        var arr = [];
        for (var i in obj) {
            arr.push(obj[i]);
        }
        return arr;
    };

    Main.prototype.iteam = function () {
        this._context2d.save();
        this._context2d.fillText('chorome',380,65);
        this._context2d.fillStyle="#00ffff";
        this._context2d.fillRect(350,50,20,20);
        this._context2d.restore();

        this._context2d.save();
        this._context2d.fillText('firefox',380,115);
        this._context2d.fillStyle="#0000ff";
        this._context2d.fillRect(350,100,20,20);
        this._context2d.restore();

        this._context2d.save();
        this._context2d.fillText('ie',380,165);
        this._context2d.fillStyle="#ff00ff";
        this._context2d.fillRect(350,150,20,20);
        this._context2d.restore();
    };

    Main.prototype.drawData = function (obj, position) {
        this._context2d.save();
        var y1 = 200*(1-obj[0]/this._MAX_VALUE);
        this._context2d.fillStyle="#00ffff";
        this._context2d.fillRect(position,y1,20,200-y1);
        this._context2d.restore();

        this._context2d.save();
        var y2 = 200*(1-obj[1]/this._MAX_VALUE);
        this._context2d.fillStyle="#0000ff";
        this._context2d.fillRect(position+20,y2,20,200-y2);
        this._context2d.restore();

        this._context2d.save();
        var y3 = 200*(1-obj[2]/this._MAX_VALUE);
        this._context2d.fillStyle="#ff00ff";
        this._context2d.fillRect(position+40,y3,20,200-y3);
        this._context2d.restore();
    };
    
    new Main();
})();