$(function(){
 $('.reg').dialog({
	   buttons:{
	   '注册':function(){},
	   '取消':function(){$(this).dialog('close');},
	   },
	   show:'scale',
	   hide:'scale',
	   autoOpen:false,
	   modal:true,
	   resizable:false,
	   width:300,
	   height:340,
	   closeText:'关闭'
	   });
 $('.login').dialog({
	    buttons:{
	   '登录':function(){},
	   '取消':function(){$(this).dialog('close');},
	   },
	   show:'scale',
	   hide:'scale',
	   autoOpen:false,
	   modal:true,
	   resizable:false,
	   width:300,
	   height:340,
	   closeText:'关闭'
	   });

   $('#reg_a').click(function(){
      $('.reg').dialog('open');
   });
    $('#login_a').click(function(){
      $('.login').dialog('open');
   });
   
   //dialog更换皮肤
   $('.reg').buttonset();
   $('#date').datepicker({
      dateFormat: 'yy-mm-dd',
	  dayNameMin:['日','一','二','三','四','五','六'],
	  showWeek:true,
	  weekHeader:'周',
	  showOtherMonths:true,
	  selectOtherMonths:true,
	  changeMonth:true,
	  changeYear:true,
	  showButtonPanel:true,
	  maxDate:0,
	  yearRange:'1920:3000',
	  hideIfNoPrevNext:true,
   });
   $('.reg input[title]').tooltip({
   position:{
   my:'left+5 center',
   at:'right center'
   }
   });
   $('#email').autocomplete({
      delay:0,
	  autoFocus:true,
      source:function(request,response){
	  //绑定数据源
	  var hosts=['163.com','qq.com','263.com','sina.com.cn','gmail.com'],
	      term=request.term,        //获取用户输入内容
		  name=term,               //邮箱的用户名
		  host='',                //邮箱的域名
	      ix=term.indexOf('@'),  //@的位置
		  result=[];
	  
	      result.push(term);
		  //当有@的时候，重新分配用户名和域名
		  if(ix>-1){
		     name=term.slice(0,ix);
			 host=term.slice(ix+1); 
		  }
		  if(name){
		     var findedHosts=(host ? $.grep(hosts,function(value,index){return value.indexOf(host)>-1;}):hosts);
		     var findedResult =$.map(findedHosts,function(value,index){return name+'@'+value;});
			  result=result.concat(findedResult);
		  }
		  response(result);  
	  }
   });
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
});