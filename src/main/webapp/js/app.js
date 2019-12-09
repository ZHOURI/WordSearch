(function($){
	

	function showTig(msg){
		$(".login-tip").html(msg);
		$(".login-tip").css({"opacity":"1"});
		$(".tip").css({"opacity":"0"})
	}
	
		
	$.fn.handleLogin=function(){
		$(this).click(function()
		{
			showTig("&nbsp;");
			var username=$(".username").val();
		    var password=$(".password").val();
		    if(username.replace(/\s+/i,"").length==0 && username==""){
		    	showTig("用户名不能为空");
			    return;				    
		    }
		    if(password.replace(/\s+/i,"").length==0 && password==""){
		    	showTig("密码不能为空");
			    return;	
		    }
		    $("#myform").submit();
		});
				
	}
	
	
	$.fn.handleRegister=function(){	
		$(this).click(function(){
			showTig("");
			var username=$(".username").val();
			var email=$(".email").val();
		    var checkcode=$(".checkcode").val();
		    var password=$(".password").val();
		    var serviceCode="123"
		    if(username.replace(/\s+/,"").length==0 && username==""){
					showTig("用户名不能为空");
					return;
				}						
			
			if(password.replace(/\s+/,"").length==0 && password==""){
					showTig("密码不能为空");
					return;
			}						
		});		
	}
	
})(jQuery);
	