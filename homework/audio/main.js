/**
 * Created by mac on 16/6/25.
 */


(function () {
    function Main() {
        this.getElements();
        this.addEventListener();
    }

    Main.prototype.getElements = function () {
        this._playListContainer = document.getElementById('playlist-container');
        this._player = document.getElementById('player');
        this._songs = [];
    };

    Main.prototype.hasSong = function (song) {
        for (var i = 0 ;i < this._songs.length; i++){
            if(this._songs[i].isEqual(song)){
                return true;
            }
        }
        return false;
    };

    Main.prototype.addSong = function (song) {
        this._songs.push(song);
    };


    Main.prototype.selectFileHandler = function (file) {
        var reader = new FileReader();
        reader.onload = function () {
            this._player.src = reader.result;
        }.bind(this);
        reader.readAsDataURL(file);
    };

    Main.prototype.handleDropFiles = function (files) {
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            switch (file.type) {
                case "audio/mp3":
                case "audio/mpeg":
                    var song = new ucai.Song(file);
                    song.onselect = this.selectFileHandler.bind(this);
                    if (!this.hasSong(song)) {
                        this.addSong(song);
                    }
                    this.recreatePlayList();
                    break;
            }
        }
    };

    Main.prototype.recreatePlayList = function () {
        if (this._currentPlaylistUl) {
            this._currentPlaylistUl.parentNode.removeChild(this._currentPlaylistUl);
        }

        this._currentPlaylistUl = document.createElement("ul");
        this._currentPlaylistUl.id = "playlist";
        for (var i = 0; i < this._songs.length; i++) {
            this._currentPlaylistUl.appendChild(this._songs[i].node);
        }
        this._playListContainer.appendChild(this._currentPlaylistUl);
        $("#playlist").menu();
    };

    Main.prototype.addEventListener = function () {
        (function (self) {
            document.ondragover = function (event) {
                event.preventDefault();
            };
            document.ondrop = function (event) {
                event.preventDefault();

                self.handleDropFiles(event.dataTransfer.files)
            };
        })(this);
    };

    new Main();

})();