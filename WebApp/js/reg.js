//用于验证手机号和密码
var regLgn = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
var regPsw = /^[a-zA-Z]\w{5,15}$/;
var aTest = function(obj,reg){
	return reg.test(obj);
}
//用于计算字符长度
String.prototype.gblen = function() {  
	var len = 0;  
	for (var i=0; i<this.length; i++) {  
		if (this.charCodeAt(i)>127 || this.charCodeAt(i)==94) {  
			len += 2;  
		} else {  
			len ++;  
		}  
	}
	return len;  
}
//验证方法
var btnTest = function(lgn,psw,nkn){
	var nkn = nkn || ""
	if( aTest( lgn , regLgn) ){
		if ( aTest( psw , regPsw) ){
			if ( nkn.gblen().length >= 20){
				alert("昵称不能大于20个字符。");
			}else{
				return true;
			}
		}else{
			alert("请输入6~16位的密码！");
			return false;
		}
		
	}else{
		alert("请输入正确的手机号！");
		return false;
	}
}