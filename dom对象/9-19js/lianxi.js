/*
* @Author: Administrator
* @Date:   2017-09-19 14:59:53
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-19 17:09:58
document.getElementsByClassName*/



function getClass(classname){
	if(false){
		return document.getElementsByClassName('classname');
	}else{
		let newarr=[];
		var all=document.getElementsByTagName('*');
		for(var i=0;i<all.length;i++){
			if(checkClass(all[i].className,classname)){
				newarr.push(all[i]);
			}
		}
		return newarr;
	}
} 
  function checkClass(className,classname){
       var arr=className.split(' ');
       for(var i=0;i<arr.length;i++){
       	if(arr[i]==classname){
       		return true
       	}
       }
       return false;
  }

   /*方便快捷写好*/
//    function $(select){
//    var first=select.charAt(0);
//    if(first=='.'){
//    	return getClass(select.substring(1));
//    }else if(first=='#'){
//    	return document.getElementById(select.substring(1));
//    }else if(/^[a-z][a-z1-6]{0,7}$/.test(select)){
//      return document.getElementsByTagName(select);
//    }
// } 
/*设置一个范围*/  
function $(select，rang){
   var first=select.charAt(0);
   if(first=='.'){
    return getClass(select.substring(1));
   }else if(first=='#'){
    return document.getElementById(select.substring(1));
   }else if(/^[a-z][a-z1-6]{0,7}$/.test(select)){
     return document.getElementsByTagName(select);
   }
} 