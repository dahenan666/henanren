/*
* @Author: Administrator
* @Date:   2017-09-18 18:51:58
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-19 19:55:59
*/

    let outs=document.getElementsByClassName('out')[0];
	let lis=outs.getElementsByTagName('li');
	let items=document.getElementsByClassName('item');
	  for(let i=0;i<lis.length;i++){
	  	lis[i].onmouseover=function(){
	  		items[i].style.display='block';
	  	}
	  	lis[i].onmouseout=function(){
	  		items[i].style.display='none';
	  	}
	  }
	  /*第二种办法*//*问题*/
	  // let outs=document.getElementsByClassName('out')[0];
	  // let lis=outs.getElementsByTagName('li');
	  // let items=document.getElementsByClassName('item');
	  // for(let i=0;i<lis.length;i++){
	  // 	lis[i].onmouseover=function(){
	  // 		items[i].ClassName='items nblock';
	  // 	}
	  // 	lis[i].onmouseout=function(){
	  // 		items[i].ClassName='items';
	  // 	}
	  // }
	  // let outs=document.getElementsByClassName('out')[0];
	  // let lis=outs.getElementsByTagName('li');
	  // for(let i=0;i<lis.length;i++){
	  // 	lis[i].onmouseover=function(){
	  // 			let items=this.getElementsByClassName('item')[0];
	  // 			items.style.display='block';
	  // 	}
	  // 	lis[i].onmouseout=function(){
	  // 			let items=this.getElementsByClassName('item')[0];
	  // 			items.style.display='none';
	  // 	}
	  // }
	  
	   // let banners=document.getElementsByClassName('banner')[0];
	   // let imgs=banners.getElementsByTagName('li');
    //  let quanquans=document.getElementsByClassName('quanquan')[0];
    //  let liss=quanquans.getElementsByTagName('li');

    //    for(let i=0;i<liss.length;i++){
    //    	 liss[i].onclick=function(){
    //    	 	for(let i=0;i<imgs.length;i++){
    //    	 		imgs[i].style.display="none";
    //    	 		liss[i].style.background='#ccc'
    //    	 	}
       	 	
    //    	 	imgs[i].style.display='block';
    //    	 	liss[i].style.background='black'
    //    	 }
    //    }

      /*轮播图*/
      let banners=document.getElementsByClassName('banner')[0];
      let imgs=banners.getElementsByTagName('li');
      let quanquans=document.getElementsByClassName('quanquan')[0];
      let liss=quanquans.getElementsByTagName('li');
      let mains=document.getElementsByTagName('main')[0];
      let lefts=document.getElementsByClassName('left')[0];
      let rights=document.getElementsByClassName('right')[0];
      /////////////////////////////////
      for(let i=0;i<liss.length;i++){
         liss[i].onclick=function(){
          for(let i=0;i<imgs.length;i++){
            imgs[i].style.display="none";
            liss[i].style.background='#ccc'
          }
          
          imgs[i].style.display='block';
          liss[i].style.background='black'
          num=i;
         }
       }   
   //////////////////////////////////////
      let num=0;
      let t;
      t=setInterval(move,2000);


       mains.onmouseover=function(){
        clearInterval(t)
         }
       mains.onmouseout=function(){
        t=setInterval(move,2000);
         }
         /////////////////////////
         rights.onclick=function(){
          move();
         }
         lefts.onclick=function(){
          moves();
         }
     ///////////////////
       function move(){
        num++;
        if(num==imgs.length){
          num=0
        }
        for(let i=0;i<imgs.length;i++){  
        imgs[i].style.display='none'; 
        liss[i].style.background='#ccc'

        imgs[num].style.display='block';
        liss[num].style.background='black'
        }
       }



       function moves(){
        num--;
        if(num<0){
          num=imgs.length-1
        }
        for(let i=0;i<imgs.length;i++){  
        imgs[i].style.display='none'; 
        liss[i].style.background='#ccc'

        imgs[num].style.display='block';
        liss[num].style.background='black'
        }
       }













            /*窗口 点击 的办法*/
       /*let banners=document.getElementsByClassName('banner')[0];
	   let imgs=banners.getElementsByTagName('li');
       let quanquans=document.getElementsByClassName('quanquan')[0];
       let liss=quanquans.getElementsByTagName('li');
       let now=0;
         for(let i=0;i<liss.length;i++){
         	liss[i].onclick=function(){
         		imgs[now].style.display='none';
         	    imgs[i].style.display='block'
         	    now=i
         	}
         	
         }*/
         /*let banners=document.getElementsByClassName('banner')[0];
	     let imgs=banners.getElementsByTagName('li');
         let quanquans=document.getElementsByClassName('quanquan')[0];
         let liss=quanquans.getElementsByTagName('li');
         let now=0;        
         for(var i=0;i<liss.length;i++){
         	liss[i].index=i;
         	liss[i].onclick=function(){
         		imgs[now].style.display='none';
         	    imgs[this.index].style.display='block'
                 now=this.index;
             }
         }*/



         /*闭包函数去写*/
      //    let banners=document.getElementsByClassName('banner')[0];
	     // let imgs=banners.getElementsByTagName('li');
      //    let quanquans=document.getElementsByClassName('quanquan')[0];
      //    let liss=quanquans.getElementsByTagName('li');
      //    let now=0;
      //    for(var i=0;i<liss.length;i++){
      //    	liss[i].index=i;
      //    	liss[i].onclick=(function(i){
      //    		return function(){
      //    		imgs[now].style.display='none';
      //    	    imgs[i].style.display='block'
      //    	    now=i;	
      //    		}
      //    	})(i);
      //    }
     