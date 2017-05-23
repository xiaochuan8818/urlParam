define(function() {
	function getParam() {
		var getUrl =  location.href;
		var reg = /[^\?]([\w]+[\=][\d]+)([\&]+([\w]+[\=][\d]+))*/ig;
		var params = reg.exec(getUrl)[0];
		var paramsArray = [];
		if(params.indexOf('&')>-1) {
			var newParam = params.split('&');
			paramsArray = [];
			for(var key=0;key<newParam.length;key++){
				var splitarr = newParam[key].split('=');
				paramsArray.push({
					'key' : splitarr[0],
					'value' : splitarr[1]
				})
			}
		}else{
			paramsArray.push({
				'key' : params.split('=')[0],
				'value' : params.split('=')[1]
			});
		}
		return paramsArray;
	}
	return {
		getParam : getParam
	};
})