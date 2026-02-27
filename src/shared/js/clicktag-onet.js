var params = {};
window.location.href.replace(
    /[?#&]+([^=&]+)=([^&]*)/gi,
    function (m, key, value) {
        params[key] = decodeURIComponent(value);
    },
);
var clickTag =
    params["click"] === undefined ? "http://onet.pl" : params["click"];
    
document.addEventListener('DOMContentLoaded', function(e){
    if(clickTag){
        var a = document.getElementById('clicktag');
        if(!a){
            var a = document.createElement('a');
            var c = document.getElementById('canvas');
            c.wrap(a);
        }
        a.id = 'clicktag';
        a.target = '_blank';
        a.setAttribute('href', clickTag);
        a.removeAttribute('onclick');
    }

});