var DOSWASMSETTINGS = {
    CLOUDSAVEURL: "",
    DEFAULTIMG: window.location.href.indexOf('github.io') !== -1 ? "/kamas-web/static/kamas.img" : "/static/kamas.img",
}

var rando = Math.floor(Math.random() * Math.floor(100000));
var script = document.createElement('script');
script.src = 'script.js?v=' + rando;
document.getElementsByTagName('head')[0].appendChild(script);
