/**
 * Created by mac on 16/7/6.
 */
$(function () {
    var img, div, box;

    function main() {
        img = $("#img");
        div = $("#div");
        box = $("#box");
        box.click(function (event) {
            img.animate({width: "0"}, 1000, function () {
                img.hide().next().show();
                div.animate({width: "220px"}, 1000);
            });
        });
    }

    main();
});