/* *GET DOM
 *  作者：王海涛
 *  日期：2017/08/21
 *  获取DOM节点,包含class、id、name和tag
 *
 * */
function g(e) {
	var i = e.substr(0, 1);
	var s = e.substr(1);
	var d;
	switch(i) {
		case '#':
			d = document.getElementById(s);
			break;
		case '.':
			d = document.getElementsByClassName(s)//.length > 1 ? document.getElementsByClassName(s) : document.getElementsByClassName(s)[0];
			break;
		case '$':
			d = document.getElementsByName(s);
			break;
		default:
			d = document.getElementsByTagName(e);
			break;
	}
	if(d.length == undefined){
		return d;
	}else{
		return d.length>1?d:d[0];
	};
}