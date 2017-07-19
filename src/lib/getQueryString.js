// 取url参数
function getQueryString(name) { 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
    var _search = decodeURIComponent(window.location.search);
    var r = _search.length > 0 ? _search.substr(1).match(reg) : null;

    if ( r != null ) return decodeURI(r[2]); return null;
}

module.exports = getQueryString;