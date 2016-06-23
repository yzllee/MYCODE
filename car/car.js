/**
 * Created by mac on 16/6/22.
 */
(function () {
    var oLabel = document.getElementsByTagName('label');
    // var oLi = document.getElementsByTagName('li');
    var t = document.getElementById('t');
    var right = document.getElementById('right');
    var judge = document.getElementById('judge');
    var input = document.getElementsByTagName('input');
    var next = document.getElementById('next');
    var last = document.getElementById('last');
    var desc = document.getElementById('desc');
    var j = 0;
    function main() {
        $.get("question.json").done(function (data) {
            function get(m) {
                t.innerHTML = data[m].question;
                oLabel[0].innerHTML = 'A:' + data[m].a;
                oLabel[1].innerHTML = 'B:' + data[m].b;
                oLabel[2].innerHTML = 'C:' + data[m].c;
                oLabel[3].innerHTML = 'D:' + data[m].d;
            };
            get(j);
            
            var both = oLabel && input;
            for(var i=0;i<oLabel.length;i++){
                (function (i) {
                    both[i].onclick = function () {
                        if(data[j].right == i+1){
                            judge.innerHTML = '回答正确!';
                        }else{
                            judge.innerHTML = '回答错误!';
                        }
                        unable();
                    }
                })(i);
            }


            function clear() {
                for(this._clear = 0;_clear<input.length;_clear++){
                    input[_clear].checked = '';
                }
                right.innerHTML = '';
            }
            clear();

            function unable() {
                for(this._unable = 0;_unable<input.length;_unable++){
                    input[_unable].disabled="disabled";
                }
            }

            function able() {
                for(this._able = 0;_able<input.length;_able++){
                    input[_able].disabled="";
                }
            }
            able();

            next.onclick = function () {
                if(j >= data.length - 1){
                    alert("这是最后一题!");
                }else{
                    get(j + 1);
                    judge.innerHTML = '';
                    j++;
                    clear();
                    able();
                }
            };


            last.onclick = function () {
                if(j === 0){
                    alert("这是第一题!");
                }else{
                    get(j - 1);
                    judge.innerHTML = '';
                    j--;
                    clear();
                    able();
                }
            };

            desc.onclick = function () {
                right.innerHTML = data[j].desc;
            };

        });
    }
    main();
})();