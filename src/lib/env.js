import UA from '@dp/util-m-ua'
import Qs from './getQueryString.js'

var uA = UA(),
		host,
		eventId,
		isWx,
		isBrowser,
		isDpApp,
		isMtApp,
		isApp,
		source = 3,	//点评测 访问途径 1-pc页面 2-app 3-m站
		tryCallApp,
		isMt = false,
		synthesisUrl		//综合链接;
		//无需唤起的环境：点评和美团APP 需要唤起的环境：微信/浏览器
if(uA.env == "beta" || !uA.env) {
  // eventId = '29';
	if(uA.source == "meituan"){
		host = '//test-g.meituan.com';
		synthesisUrl = 'http://tpl.dianping.com/firework/callApp?type=meituan&appurl=imeituan%3A%2F%2Fwww.meituan.com%2Fweb%3Furl%3Dhttps%253a%252f%252ftest-g.meituan.com%252fapp%252fgfe-app-wedding-free-photo%252findex.html&weburl=https%3A%2F%2Ftest-g.meituan.com%2Fapp%2Fgfe-app-wedding-free-photo%2Findex.html%3FisTuneup%3Dyes';
		isMt = true;
	} else {
		host = '//m.51ping.com';
		synthesisUrl = 'https://evt.dianping.com/synthesislink/11528.html';
	}
} else if(uA.env == "product"){
    // eventId = '787';
  	if(uA.source == "meituan"){
  		host = '//g.meituan.com';
  		synthesisUrl = 'http://tpl.dianping.com/firework/callApp?type=meituan&appurl=imeituan%3A%2F%2Fwww.meituan.com%2Fweb%3Furl%3Dhttps%253a%252f%252fg.meituan.com%252fapp%252fgfe-app-wedding-free-photo%252findex.html%253fisTuneup%253dyes&weburl=https%3A%2F%2Fg.meituan.com%2Fapp%2Fgfe-app-wedding-free-photo%2Findex.html%3FisTuneup%3Dyes';
  		isMt = true;
  	} else {
  		host = '//m.dianping.com';
  		synthesisUrl = 'https://evt.dianping.com/synthesislink/11527.html';
  	}
}
eventId = Qs('eventId');
if (eventId) {
	eventId = eventId.replace(/\D/g,'');	//\D非数字
} else {
	// eventId = uA.env == "product" ? '787' : '29'	//兼容第一版
	// eventId = uA.env == "product" ? '805' : '29'	//兼容第二版
	// eventId = uA.env == "product" ? '815' : '29'	//兼容第三版
	eventId = uA.env == "product" ? '834' : '29'	//兼容第三版
}
switch (uA.type) {
	case 'weixin' : isWx = true; break;
	case 'dpapp' : isDpApp = true; break;
	case 'mtgroup' : isMtApp = true; break;
	default : isBrowser = true;
}
if(isDpApp || isMtApp) {
	isApp = true;
	source = 2;
} else {
	tryCallApp = true;	//无需唤起的环境：点评和美团APP 需要唤起的环境：微信/浏览器
}

export { host, eventId, tryCallApp ,source, isWx, isApp, isMt ,synthesisUrl }
