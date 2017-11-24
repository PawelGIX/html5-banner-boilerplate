/**
 * Universal ClickTag
 */
(function(){
    HTMLElement.prototype.wrap = function(wrapper){
        this.parentNode.insertBefore(wrapper, this);
        wrapper.appendChild(this);
    }

    var url;

    var getUriParams = function() {
    	var query_string = {}
    	var query = window.location.search.substring(1);
    	var parmsArray = query.split('&');
    	if(parmsArray.length <= 0) return query_string;
    	for(var i = 0; i < parmsArray.length; i++) {
    		var pair = parmsArray[i].split('=');
    		var val = decodeURIComponent(pair[1]);
    		if (val != '' && pair[0] != '') query_string[pair[0]] = val;
    	}
    	return query_string;
    }();

    if(window.clickTag)
        url = window.clickTag;
    else if(window.click)
        url = window.click;
    else if(window.clickTAG)
        url = window.clickTAG;
    else if(getUriParams.clicktag)
        url = getUriParams.clicktag;
    else if(getUriParams.clickTAG)
        url = getUriParams.clickTAG;
    else if(getUriParams.clickTag)
        url = getUriParams.clickTag;
    else if(getUriParams.click)
        url = getUriParams.click;
    if(url)
        window.clickTag  = url;
    console.log("clickTag URL:" + url);

    document.addEventListener('DOMContentLoaded', function(e){
        if(url){
            var a = document.createElement('a');
            var c = document.getElementById('canvas');
            c.wrap(a);
            a.id = 'clicktag';
            a.target = '_blank';
            a.setAttribute('href', url);
        }

    });

})();
