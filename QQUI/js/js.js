


		$(document).on("pageInit","#message-page",function(e,pageID,$page){
			document.title = "消息";
		})
		$(document).on("pageInit","#ab-page",function(e,pageID,$page){
			document.title = "联系人";
		})
		$(document).on("pageInit","#dt-page",function(e,pageID,$page){
			document.title = "动态";
		})
		
		//初始化SUI
		$.init();