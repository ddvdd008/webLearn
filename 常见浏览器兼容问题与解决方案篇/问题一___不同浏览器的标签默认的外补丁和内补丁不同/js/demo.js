$(function(){

//$('#box').css('color','red');
//$('li:first').css('background','red');
//$('ul:last li:first').css('background','red'); 
//$('li:not(.red)').css('background','red');
//$('li:even').css('background','red');
//$('li:odd').css('background','red');
//$('li:eq(3)').css('background','red');
//$('li:gt(3)').css('background','red');
//$(':focus').css('background','red');
//$('ul:last li:nth-child(odd)').css('background','red');

//alert($('#box').html());
//alert($('#box').text());
//$('#box').html('<em>www.baidu.com</em>');  //替换html内容

//alert($('input').val());
//$('input').val('北风网');
//$('input').val(['女','男','编']);
//alert($('#box').attr('id'));
//$('div').attr('title','woshiyuming');
/*$('div').attr({
'title':'sdsd',
'class':'red',              //class不建议用attr来设置，后面有功能更强大和更丰富的方法代替
'data':'123'
});*/

/*$('div').attr('title',function(index,value){
    return  'yuanlai de title '+value+'woshi'+index+'yuming';

});*/

//$('div').html($('div').html()+'<em>www.ccc.com</em>');

/*$('div').html(function(index,value){
return value+'<em>www.ccc.com</em>';

});*/
/*var box =$('div').css(['color','width','height']);

for(var i in box){
alert(i+':'+box[i]);
}
*/
/*$.each(box,function(attr,value){
alert(attr+':'+value);
});

$('div').each(function(index,element){
alert(index+':'+element);
//.each 回调函数第一个对象时对应数组的下标或者对象名，第二个对象是相应的数组值或者对象内容
});
alert($(document).width());


                              //padding,border,marginBottom
alert($('div').width());         //不包含内边距，外边距，边框
alert($('div').innerWidth());//只包含内边距
alert($('div').outerWidth());//只包含内边距和边框
alert($('div').outerWidth(true));//包含内边距，外边距，边框


alert($('strong').offset().top);
alert($('strong').position().top)

//内部后面插入
var box=$('<div id="box">div</div>');  //创建节点
$('body').append(box);               //插入节点

$('div').append('<strong>DOM</strong>');

$('div').append(function(index,html){ 
return '<strong>DOM</strong>'+index+html;
});

$('strong').appendTo('div');//把strong移入body里面，不需要创建。
//内部前面插入
.prepend
.prependTo
//外部同级后面插入

$('div').after('<strong>DOM</strong>');
.before

//$('strong').insertAfter('div');//不需要创建，把现有的放在div后面
//$('strong').insertBefore('div');

 
//在元素外面包裹节点
$('div').wrap('<strong></strong>');
$('div').wrap('<strong>1<em>123</em>2</strong>');



$('div').wrap(document.createElement('strong'));
$('div').unwrap();//只移除一层
*/
//$('div').wrap('<strong>4</strong>');
//$('div').wrapAll('<strong></strong>')


//.warp()与.wrapAll()的区别在于前者把每一个div当作独立体，分别包裹，后者把所有div当作一个整体，一起只包裹一层。

//在元素里面子内容包裹节点
/*
$('div').wrapInner('<strong>123</strong>');


$('div').clone(true).appendTo('body');//能把事件处理液复制过来


$('div').remove('.box');

$('div').click(function(){

alert('www');
});
//$('div').remove().appendTo('body');//remove删除后再插入不保留原先的时间处理
$('div').detach().appendTo('body');//detach删除后再插入保留原先的时间处理

//$('div').empty();//删除里面子节点和内容

$('div').replaceWith('<span>DOM</span>');
$('<span>DOM</span>').replaceAll('div'); //这两种方法都能替换div，但是事件处理不保留

//表单选择器！


//alert($('input').eq(0).val());//语义不清晰

//alert($('input[type=password]').val());//语义清晰一点

//alert($('input[type=password][name=pass]').val());//语义清晰

//alert($('div').text());


//alert($(':input').size());

//绑定事件

$('input').bind('click',function(){
alert('dd');                              //绑定函数bind()
}); 

$('input').bind('click mouseover',function(){
alert('dd');                              //绑定函数bind()可以绑定多个事件
});


$('input').bind('mouseover mouseout',function(){
$('div').html(function(index,value){
return value +'1';
})                           //绑定函数bind()可以绑定多个事件
});


alert($('div').html());

$('input').bind({
mouseover:function(){
alert('移入');
},
mouseout:function(){
alert('移出');
}                         //分别执行两个不同的函数
});
$('input').unbind();     //删除全部事件
$('input').unbind('click'); //只删除click事件
$('input').unbind('click',fn2); //删除click的fn2函数       

//简写事件(jQuery自己封装的一些常用函数)


$('input').click(function(){
alert('单机');
});

$('input').dblclick(function(){
alert('双机');
});

$('input').mousedown(function(){
alert('左击按下');
});

$(window).unload(function(){
alert('页面刷新');
});

$(window).resize(function(){
alert('文档改变大小');
});

$(window).scroll(function(){
alert('滚动条改变');
});



$('input').select(function(){
alert('文本选定');
});

$('input').change(function(){
alert('文本改变');
});

$('form').submit(function(){
alert('表单提交');
});

$('div').mouseover(function(){
$(this).css('background','green');
}).mouseout(function(){
$(this).css('background','#fcc');
});


$('div').mouseenter(function(){
$(this).css('background','green');
}).mouseleave(function(){
$(this).css('background','#fcc');
});

$('div').mouseover(function(){
$('strong').html(function(index,value){
return value+'1';
});
});   //over会触发子节点

$('div').mouseenter(function(){
	$('strong').html(function(index,value){
		return value+'1';
	});
});   //enter不会触发子节点

//同理mouseout会触发子节点，mouseleave不会触发子节点

$('input').keydown(function(e){
alert(e.keyCode);
});
$('input').keyup(function(e){
alert(e.keyCode);     keydown、keyup返回的是键值码
});
$('input').keypress(function(e){
alert(e.charCode);
});           //   keypress返回的是字符编码

//.focus()和.blur()

$('input').focus(function(){
alert('hah ');
});//光标激活


$('input').blur(function(){
alert('hah ');
});//光标丢失        

$('div').focus(function(){
alert('hah ');
}); //.focus()和.blur()必须是当前元素才能激活。


//.focusin()和.focusout()

$('input').focusin(function(){
alert('hah ');
});//光标激活


$('input').focusout(function(){
alert('hah ');
});//光标丢失        



$('div').focusin(function(){
alert('hah ');
}); //.focusin()和.focusout()可以是子元素也能激活。


//复合事件

//ready(fn)//DOM加载完触发

$(document).ready(function(){
alert('dd');
});

$('div').hover(function(){
$(this).css('background','black');
},function(){
$(this).css('background','red');
});//mouseenter和mouseleave的结合体


//toggle()已被删除

//事件对象

$('input').click(function(e){
//alert(e.type);   获取事件类型 字符串（click）
//alert(e.target);   获取事件绑定元素 (input)
});

$('div').click(function(e){
alert(e.target);  //target是获取触发元素的DOM，触发元素就是你点哪个就是哪个。。
});
$('div').click(function(e){
alert(e.currentTarget);  //currentTarget获取的是监听元素的DOM，你绑定哪个就是哪个。。
});

$('input').click(123,function(e){
alert(e.data);   //额外的数据。。字符串、数字
});
$('input').click([1,12,3,4,5],function(e){
alert(e.data[1]);   //额外的数据。。数组
});
$('input').click({user:'ddvdd',age:100},function(e){
alert(e.data.user);   //额外的数据。。对象
});

$(document).click(function(e){
alert(e.pageX+','+e.screenX+','+e.clientX);
});


$(document).click(function(e){
alert(e.pageY+','+e.screenY+','+e.clientY);
});

//e.pageX/e.pageY:距离页面原点（绝对的）（页面左上角，不包括边框）
//e.screenX/e.screenY:距离浏览器原点（浏览器左上角，包括边框）
//e.clientX/e.clientY:距离可视页面的原点（相对的）（可视页面左上角，不包括边框）
$('input').click(function(){
return 'ddvdd';
});
$('input').click(function(e){
alert(e.result);  //获取上一个相同事件的返回值
});
$('input').click(function(e){
alert(e.timeStamp);//时间戳
});

$('input').mousedown(function(e){
alert(e.which);
});

//altKey、shiftKey、ctrlKey 判断是否按下这三个键

$('input').click(function(e){
alert(e.altKey);
});

//冒泡和默认行为
//冒泡行为
$('input').click(function(){
alert('input');
});

$('div').click(function(){
alert('div');
});

$(document).click(function(){
alert('document');
});   //冒泡行为是，当多个元素层叠在一起，调用相同类型的事件时，
//事件触发从点击的该元素开始出发，向下依次执行其他外层的事件.（从小范围向大范围冒。）

$('input').click(function(e){
e.stopPropagation();//阻止冒泡行为
alert('input');
});

$('div').click(function(){
alert('div');
});

$(document).click(function(){
alert('document');
});

//默认行为
//包括右点页面，点击超链接跳转，点击提交等

$('a').click(function(e){
e.preventDefault();  //阻止默认行为
});

$('input').click(function(e){
e.preventDefault();  //阻止默认行为
alert('表单提交');
});
$('form').submit(function(e){
e.preventDefault();//阻止表单提交默认行为
});
//阻止冒泡，又禁止默认行为

//一般方法
$('input').click(function(e){
e.stopPropagation();//阻止冒泡行为
e.preventDefault();//禁止默认行为
alert('input');
});

$('div').click(function(){
alert('div');
});

$(document).click(function(){
alert('document');
});
//简单方法
$('input').click(function(e){
alert('input');
return false;
});
$('input').click(function(e){
alert('input2');
});
$('input').click(function(e){
e.stopImmediatePropagation();
alert('input1');
});


$('div').click(function(e){
alert(e.currentTarget.tagName);  //target是获取触发元素的DOM，触发元素就是你点哪个就是哪个。。
});
//高级事件

//模拟用户点击操作
$('input').click(function(){
alert('用户模拟操作')
}).trigger('click');

$('input').click(function(e,data1,data2,data3){
alert(data1+'|'+data2+'|'+data3);
}).trigger('click',['123','qbc','dfgfg']);

//trigger额外数据，只有一条的时候，可以省略中括号，两个就不行。


//自定义事件
$('input').bind('myEvent',function(){
alert('自定义事件');
}).trigger('myEvent');

//自定义事件，不跟硬件绑定，所以一般和trigger合起来使用。


$('input').click(function(){
alert('用户模拟操作');
}).triggerHandler('click');

//trigger和triggerHandler的区别（4点）

//1.triggerHandler会模拟触发事件，但是会阻止默认行为。如submit的提交后跳转行为
$('form').trigger('submit');//trigger提交后跳转，没有阻止默认行为
$('form').triggerHandler('submit');//triggerHandler提交后不跳转，阻止默认行为


//2.triggerHandler方法只会影响第一个匹配到的元素，而trigger会影响所有元素

//3.返回值不同：trigger返回jQuery对象，triggerHandler有返回值，返回返回值，无返回值，返回undefind
$('input').click(function(){
alert('用户模拟操作');
}).trigger('click').css('color','red');//trigger不管有没有返回值，只返回jQuery对象，实现连缀

$('input').click(function(){
alert('用户模拟操作');
return 123;
}).triggerHandler('click');//又返回值返回123；

$('input').click(function(){
alert('用户模拟操作');
}).triggerHandler('click');//无返回值返回undefind；


//4.trigger会冒泡，triggerHandler不会冒泡

$('div').bind('click',function(){
alert('自定义事件');
});
$('.d3').trigger('click');//会冒泡

$('div').bind('click',function(){
alert('自定义事件');
});
$('.d3').triggerHandler('click');//不会冒泡



//命名空间可以移除匿名函数
$('input').bind('click.abc',function(){
alert('abc');
});
$('input').bind('click.zxy',function(){
alert('zxy');
});
$('input').unbind('click.abc');


//事件委托
//bind绑定了三个事件
$('.button').bind('click',function(){
alert('事件不委托!');
});

//使用live，绑定的是document，而非button，所以永远绑定一次事件
$('.button').live('click',function(){
alert('事件不委托!');
});
//该方法已经被删除，所以要用向下兼容插件

//bind无法动态绑定事件
$('.button').bind('click',function(){
$(this).clone(true).appendTo('#box');//若没有true，就无法动态绑定事件
});

//live动态绑定事件，因为事件绑定在document上
$('.button').live('click',function(){
$(this).clone().appendTo('#box');
});
//live绑定在document上，而点击button其实是冒泡到document上
//并且点击document之所以没反应是因为需要验证event.type和event.taget才能触发.

//live解绑的函数式die。。和unbind对应


//.live的替代方法delegate(能动态绑定)

$('#box').delegate('.button','click',function(){
$(this).clone().appendTo('#box');
});
//live语义不清晰，由于他没有指定绑定了谁，所以不清晰
//delegate语义清晰，绑定谁，谁就在开头
//解绑函数为undelegate()


//on、off、one方法1.7以后推出整合

//1.7以前的事件绑定

//普通绑定.bind
//普通解绑.unbind

//事件委托.live\.delegate
//解除委托.die\.undelegate

//新方法绑定.on
//新方法解绑.off

$('.button').on('click',function(){
alert('on代替bind！');
});

$('.button').on('click',{user:'lee'},function(e){
alert('on代替bind！'+e.data.user);
});
$('.button').off('click');
//阻止冒泡并禁止默认行为
$('form').on('submit',function(){
return false;
});
$('form').on('submit',false);

//解绑，替代unbind
$('button').off('click');
$('button').off('click',fn);
$('button').off('click.abc');

//替代live和delegate

$('#box').on('click','.button',function(){
$(this).clone().appendTo('#box');
});

//移除事件委托
$('#box').off('click','.button');


$('.button').on('click',function(){
$(this).clone(true).appendTo('#box');
});

//one方法

$('.button').one('click',function(){
alert('仅一次事件触发！');
});

$('#box').one('click','.button',function(){
$(this).clone().appendTo('#box');
});

//动画效果

//显示与隐藏


$('.show').on('click',function(){
$('#box').show();//显示
});

$('.hide').on('click',function(){
$('#box').hide();//隐藏
});
//可以传递两个参数，一个是速度，另一个是回调函数
$('.show').on('click',function(){
$('#box').show(1000);//花1秒显示出来
});
$('.hide').on('click',function(){
$('#box').hide(1000);//花1秒隐藏起来
});
//默认是400毫秒SS
$('.hide').click(function(){
$('#box').hide('slow');
});

$('.hide').click(function(){
$('#box').hide('slow',function(){
alert('隐藏完毕！');
});
});//参数是回调函数。

//同步动画，5个区块同时出来
$('.show').click(function(){
$('.test').show('slow');
});

//列队动画，一个个出来（普通方法）
$('.show').click(function(){
$('.test').eq(0).show('slow',function(){
$('.test').eq(1).show('slow',function(){
$('.test').eq(2).show('slow',function(){
$('.test').eq(3).show('slow',function(){
$('.test').eq(4).show('slow',function(){
});
});
});
});
});
});//如果区块很多，这种方法显然不合理，太繁琐了

//列队动画，递归自调用（简单）

$('.show').click(function(){
$('.test').first().show('slow',function testShow(){
$(this).next().show('slow',testShow);
});
});

$('.hide').click(function(){
$('.test').last().hide('slow',function testShow(){
$(this).prev().hide('slow',testShow);
});
});

//如果想把显示和隐藏放在一个按钮里，就用toggle()方法。

$('.toggle').click(function(){
$('#box').toggle('slow');
});

//向上、向下以及复合函数slideToggle()方法。

$('.up').click(function(){
$('#box').slideUp('slow');
});//向上

$('.down').click(function(){
$('#box').slideDown('slow');
});//向下

$('.slideToggle').click(function(){
$('#box').slideToggle('slow');
});//轮流切换


//淡入、淡出

$('.in').click(function(){
$('#box').fadeIn('slow');
});//淡入显示

$('.out').click(function(){
$('#box').fadeOut('slow');
});//淡出隐藏

$('.fadeToggle').click(function(){
$('#box').fadeToggle('slow');
});//轮流切换

$('.to').click(function(){
$('#box').fadeTo('slow',0.44);
});//把透明度改为44%

//自定义动画

$('.button').click(function(){
$('#box').animate({
width:'300px',
height: '200px',
opacity:0.5,
fontSize:'50px'
});
});//多重同步运动

$('.button').click(function(){
$('#box').animate({
width:'300px',
height: '200px',
opacity:0.5,
fontSize:'50px'
},2000,function(){
alert('执行完毕！');
});
});

$('.button').click(function(){
$('#box').animate({
left:'300px',
top:'200px'
},'slow');
});//移动

$('.button').click(function(){
$('#box').animate({
left:'+=100px',
});
});//可以累加移动
//回调函数+列队动画
$('.button').click(function(){
$('#box').animate({
width:'300px'
},function(){
$('#box').animate({
height:'200px'
},function(){
$('#box').animate({
opacity:0.5
},function(){
$('#box').animate({
fontSize:'50px'
});
});
});
});
});//利用嵌套，实现列队动画。。

//在同一个元素的基础上，使用连缀或顺序排列调用，可以实现列队动画

$('.button').click(function(){
$('#box').animate({width:'300px'})
         .animate({height:'200px'})
		 .animate({opacity:0.5})
		 .animate({fontSize:'50px'});
});//连缀

$('.button').click(function(){
$('#box').animate({width:'300px'});
         $('#box').animate({height:'200px'});
		 $('#box').animate({opacity:0.5});
		 $('#box').animate({fontSize:'50px'});
});//顺序排列调用

//列队动画方法（回调函数不够清晰麻烦，改善版）

$('.button').click(function(){
$('#box').slideUp('slow').slideDown('slow').css('background','orange');
});

//css不是动画方法，会默认排列到和第一个动画方法同步。

$('.button').click(function(){
$('#box').slideUp('slow').slideDown('slow',function(){
$(this).css('background','orange');
});
});//传统方法（比较乱）

$('.button').click(function(){
$('#box')
         .slideUp('slow')
		 .slideDown('slow')
		 .queue(function(){
		 $(this).css('background','orange');
		 });
});//引入queue方法来实现，但是如果queue后面还有动画方法必须要传一个next参数才行，实现next函数才可以

$('.button').click(function(){
$('#box')
         .slideUp('slow')
		 .slideDown('slow')
		 .queue(function(next){
		 $(this).css('background','orange');
		 next();
		 })
		 .hide('slow');
});

//dequeue 1.4版本以前
$('.button').click(function(){
$('#box')
         .slideUp('slow')
		 .slideDown('slow')
		 .queue(function(){
		 $(this).css('background','orange');
		 $(this).dequeue();
		 })
		 .hide('slow');
});

//获取列队长度

$('.button').click(function(){
$('#box')
         .slideUp('slow',function(){alert($('#box').queue('fx').length);})
		 .slideDown('slow')
		 .queue(function(next){
		 $(this).css('background','orange');
		 next();
		 })
		 .hide('slow');
});

//清理后面的动画方法cleanQueue()

$('.button').click(function(){
$('#box')
         .slideUp('slow',function(){$(this).cleanQueue();})
		 .slideDown('slow')
		 .queue(function(next){
		 $(this).css('background','orange');
		 next();
		 })
		 .hide('slow');
});

//动画相关方法
//stop动画停止方法
$('.button').click(function(){
$('#box').animate({
left:'800px'
},3000);
});

$('.stop').click(function(){
$('#box').stop();
});//无参数情况下，stop后，点击按钮还能继续运动 。
$('.button').click(function(){
$('#box')
.animate({left:'300px'},1000)
.animate({bottom:'300px'},1000)
.animate({width:'300px'},1000)
.animate({height:'200px'},1000);
});
/*
$('.stop').click(function(){
$('#box').stop();
});
//在列队动画，无参数情况下，点击stop会停止当前动画，直接执行下一个动画，
//如果再点击运动，只有当所有动画结束后，才会继续把那些执行到一半的动画继续按顺序执行下去。

$('.stop').click(function(){
$('#box').stop(true);//第一个参数如果为true，就是停止并且清除后面的列队动画，但是如果再点击运动，也会继续执行下去。
});

$('.stop').click(function(){
$('#box').stop(true,true);//如果第二个参数为true，停止后会跳到该动画原本结束的位置上，但是如果再点击运动，也会继续执行下去。默认值为false
});

//delay时间延迟动画方法

$('.button').click(function(){
$('#box').delay(1000)
.animate({left:'300px'},100)
.animate({bottom:'300px'},100).delay(2000)
.animate({width:'300px'},100)
.animate({height:'200px'},100);
});


//过滤器animated判断元素是否在动画

$('#box').slideToggle('slow',function fn(){
$(this).slideToggle('slow',fn);
});//无限运动1

$('#box').slideToggle('slow',function(){
$(this).slideToggle('slow',arguments.callee);
});//无限运动2

$('.ani').click(function(){
$(':animated').css('background','blue');
});//查找运动中的动画


//动画全局属性
$.fx.interval =200;//默认值为13，每13毫秒一帧，越小越流畅，但是性能不稳定，越大越不流畅，但是浏览器性能稳定
$.fx.off=true;//true关闭动画效果，默认为false
$('.button').click(function(){
$('#box').toggle(1000);
});

$('.button').click(function(){
$('#box').animate({
left:'800px'
},3000,'swing');//缓动（两头慢中间快）
$('#pox').animate({
left:'800px'
},3000,'linear');//匀速（全程一样快）
});//swing、linear动画的运动方式的参数
*/

//Ajax //无刷新状态更新网页，并且实现异步提交，提升了用户体验
//Ajax不是单一的技术，是一个技术合集，其中包括（Javascript、XMLHttpRequest对象、服务器上的文件、其他javascript）

/*Ajax的过程：首先javascript通过用户或其他与浏览器相关事件捕获交互行为，
再通过XHR（XMLHttpRequest）对象可以在不中断其他浏览器任务的情况下向服务器发送请求，
服务器把根据请求从数据库里提取的数据以XML、HTML、JSON格式保存起来，
最后通过其他javascript解释来自服务器的数据（比如php从mysql获取数据）并将其呈现在页面上。


//load()局部方法
$('input').click(function(){
$('#box').load('test.html');
});
//要用类似于tomcat本地服务器端启动，firebug才有get/post请求

$('input').click(function(){
$('#box').load('test.php?url=ddvdd');
});//GET方法提交请求。。

<?php
if($_GET['url']=='ddvdd'){
echo '屠少！';
}else
echo '不是屠少！';
?>//GET方法接受请求。。


$('input').click(function(){
$('#box').load('test.php',{
url:'ycku'
});
});//POST方法提交请求。。

//PHP
<?php
if($_POST['url']=='ddvdd'){
echo '屠少！';
}else
echo '不是屠少！';
?>//POST方法接受请求。。

$('input').click(function(){
$('#box').load('test.php',{
url:'ycku'
},function(response,status,xhr){
//alert(response);
//$('#box').html(response+'123');//response服务器请求返回的内容，可以进行加工后在加载到页面
//alert(status);
//if(status=='success'){alert('成功后的处理');}判断有没有成功
//alert(xhr.responseText);返回内容
//alert(xhr.responseXML;返回响应数据的XML DOM文档
//alert(xhr.status);返回状态码200 
//alert(xhr.statusText);返回状态说明 ok
});
});

//全局方法$.get()\$.post()（第二层）

//$.get()
//方法一传参
$('input').click(function(){
$.get('test.php?url='ycku',function(response){
${'#box'}.html(response);
});
});
//通过直接在url+？紧跟传参

//方法二传参
$('input').click(function(){
$.get('test.php','url=ycku',function(response){
${'#box'}.html(response);
});
});
//通过第二个参数data，字符串形式的键值对传参，然后自动转换为问号紧跟传参。

//方法三传参
$('input').click(function(){
$.get('test.php',{
url='ycku'
},function(response){
${'#box'}.html(response);
});
});

//$.post()

//post提交不能使用问号传参
//post第二种和第三种方法都可以提交

//type参数，返回传递回来的数据保存格式
$('input').click(function(){
$.get('test.php',{
url='ycku'
},function(response){
${'#box'}.html(response);
},'html');   //PHP文件返回的数据是纯文本，默认是html或者text
});

$('input').click(function(){
$.get('test.php',{
url='ycku'
},function(response){
${'#box'}.html(response);
},'json');   //本身是纯文本，如果强行按照xml或者json数据格式返回的话，那么久无法获取数据
});
//XML
<?xml version=1.0?>
<root>
<url>www.ycku.com</url>
</root>

$('input').click(function(){
$.get('test.xml',function(response){
alert(response);
},'html');   
});
//如果默认是xml，强行设置成html，则会连标签也返回。


$('input').click(function(){
$.get('test.xml',function(response){
alert($(response).find('root').find('url').text());
},'html');   
});


//JSON
[
{
   "url":"www.ycku.com"
}
]

$('input').click(function(){
$.get('test.json',function(response){
alert(response);
},'html');   
});

//如果默认是json，强行设置成html，则会源文件也返回。
$('input').click(function(){
$.get('test.json',function(response){
alert(response[0].url);
},'html');   
});


//$.post与$.get()区别

1.GET请求时通过URL问号提交的，而POST请求则是HTTP消息实体提交的
2.GET提交由大小限制（2kb），而POST方式不受限制
3.GET方式会被缓存下来，可能有安全性问题，而POST没有这个问题
4.GET方式通过$_GET[]获取请求，POST方式通过$_POST[]获取请求


//$.getScript()和$.getJSON()(最高层)
//用于加载特定的js文件

$('input').click(function(){
$.getJSON('test.json',function(response){
alert(response[0].url);
});   //用于加载JSON
});

$('input').click(function(){
$.getScript('test.js');   //在特殊情况下用于加载JS，节约资源
});


//全局$.ajax()方法（最低层）
//可以代替上面的所有方法

$('input').click(function(){
$.ajax({
type:'POST',//默认是GET
dataType:'html',
url:'test.php',
data:{
url:'ycku'
},
success:function(response,status,xhr){
$('#box').html(response);
}
});
});
//注意如果本地服务期是tomcat就需要配置cnfig.php不然ajax请求php，响应可以成功返回，
//但是返回后解析成xml呈现在浏览器上时就会出错。而用appserv服务器就不会出现这种问题。

//提交表单
//user.php
<?php
   echo $_POST['user'].'-'.$_POST['email'];
?>

$('form input[type=button]').click(function(){
$.ajax({
type:'POST',//默认是GET
dataType:'html',
url:'user.php',
data:{
user:$('form input[name=user]').val(),
email:$('form input[name=email]').val(),
},
success:function(response,status,xhr){
$('#box').html(response);
}
});
});
//如果表单元素特别多的情况下，写起来非常麻烦，容易出错
//复制提交js内容时，data需要修改的非常多


//提供表单序列化来改善

$('form input[type=button]').click(function(){
$.ajax({
type:'POST',//默认是GET
dataType:'html',
url:'user.php',
data:$('form').serialize(),//得到的是字符串形式的键值对，并且还对URL进行的编码，比如email的@符号提交过去的时候需要编码
success:function(response,status,xhr){
$('#box').html(response);
}
});
});

//单选按钮

$('form input[name=sex]').click(function(){
$('box').html($(this).serialize());//编码键值对
$('box').html(decodeURIComponent($(this).serialize()));//解码键值对
$.ajax({
type:'POST',
dataType:'html',
url:'',
data:$(this).serialize(),
success:function(response,status,xhr){
$('box').html(response);
}
});
});

//json方式获取

$('form input[name=sex]').click(function(){
$('box').html($(this).serializeArray());//json方式获取
console.log($(this).serializeArray());//json格式：object{name='sex',value='男'}
var json =$(this).serializeArray();
$('box').html(json[0].name+"="+json[0].value);
});

//初始化重复的属性（多个相似的ajax重复初始化）

$.ajaxSetup({
type:'POST',
dataType:'html',
url:'user.php',
data:$(this).serialize(),
});

$('form input[type=button]').click(function(){
$.ajax({
success:function(response,status,xhr){
$('#box').html(response);
}
});
});

//如果以对象形式传递键值对，太复杂可能解析不出来，可用$.param()解析

$('form input[type=button]').click(function(){
$.ajax({
type:'POST',//默认是GET
dataType:'html',
url:'user.php',
data:$.param{
user:$('form input[name=user]').val(),
email:$('form input[name=email]').val(),
}),
success:function(response,status,xhr){
$('#box').html(response);
}
});
});

//1.加载请求

//.ajaxStart(),.ajaxStop()

$(document).ajaxStart(function(){
$('.loading').show();
}).ajaxStop(function(){
$('.loading').hide();
});
//,ajaxStart()是在还有未完成的请求时，执行，.ajaxStop是在所有请求完成时，执行。

//如果请求事件太长可以设置timeout，超时时间。
$.ajax({
timeout:2000;
});
//如果不想触发全局事件，可以设置取消

$.ajax({
global:false;
});


//2.错误处理

//error:function(){}(属性方法)用于ajax操作
$.ajax({
error:function(xhr,errorText,errorType){
alert(errorText+":"+errorType);//error:not find
alert(xhr.status+":"+xhr.statusText);//404:not find
}
});

//通过连缀局部方法.error()方法。用于$.post(),$.get()方法。

$.post('user1.php').error(function(xhr,errorText,errorType){
//alert('错误!');
alert(errorText+":"+errorType);//error:not find
alert(xhr.status+":"+xhr.statusText);//404:not find
});

//通过全局报错.ajaxError()(把所有ajax错误统一放在这里)
$(document).ajaxError(function(event,xhr,settings,errorType){
alert('错误！');
alert(event.type);//ajaxError
alert(event.target);//document
for (var i in event){
document.write(i+'<br/>');
}
alert(settings.type);//post
alert(settings.url);//user1.php
});


//3.请求全局事件(3个方法)
//.ajaxSuccess(),对应一个局部方法：.success(),请求成功完成时执行
//.ajaxComplete(),对应一个局部方法：.complete(),请求完成后注册一个回调函数
//.ajaxSend(),没有对应的局部方法，只有属性方法：beforSend，请求发送之前要绑定的函数

$('form input[type=button]').click(function(){
$.post('user.php',$('form').serialize(),function(response,status,xhr){
$('#box').html(response);
});
});

$('form input[type=button]').click(function(){
$.post('user.php',$('form').serialize());
});
//全局的
$(document).ajaxSend(function(){
alert('发送请求之前执行');//1
}).ajaxComplete(function(){
alert('请求完成后，不管失败或者成功都执行');//2
}).ajaxSuccess(function(){
alert('请求成功执行后！');//3
}).ajaxError(function(){
alert('请求失败后');//4
});
//如果请求成功 顺序如下：1->2->3;
//如果请求失败 顺序如下：1->4->2;

//局部连缀的
$('form input[type=button]').click(function(){
$.post('user.php',$('form').serialize()).success(function(){
alert('请求成功完成后');
}).complete(function(){
alert('请求完成后，不管失败或者成功都执行');
}).error(function(){
alert('请求失败后');
});
});

//属性方法只用于ajax

$('form input[type=button]').click(function(){
$.ajax({
type:'POST',//默认是GET
dataType:'html',
url:'user.php',
data:$.param{
user:$('form input[name=user]').val(),
email:$('form input[name=email]').val(),
}),
success:function(){
alert('请求成功完成后');
},
complete:function(){
alert('请求完成后，不管失败或者成功都执行');
},
error:function(){
alert('请求失败后');
},
beforSend:function(){
alert('发送请求之前执行');
});
});}
//6个全局事件  .ajaxStart(),.ajaxStop(),ajaxSuccess(),.ajaxComplete()，.ajaxError(),.ajaxSend()

//4.JSON和JSONNP
//作用在同一域中
$('form input[type=button]').click(function(){
$.ajax({
type:'POST',//默认是GET
url:'test.json',
dataType:'json',
data:$.param{
user:$('form input[name=user]').val(),
email:$('form input[name=email]').val(),
}),
success:function(){
alert('请求成功完成后');
});
});
//作用于跨域中

//jsonp.php
<?php
//这个文件时远程端：http://www.li.cc/jsonnp.php
$_arr = array('a'=>1,'b'=>2,'c'=>3);
$_result = json_encode($_arr);//把数组转化为json格式
echo $_result;
?>

//本地获取jsonp.php 成功
$('form input[type=button]').click(function(){
$.ajax({
type:'POST',//默认是GET
url:'jsonp.php',
dataType:'json',
success:function(response){
alert(response);//json对象
alert(response.a);//a
});
});

//跨域获取jsonp.php 失败
$('form input[type=button]').click(function(){
$.ajax({
type:'POST',//默认是GET
url:'http://www.li.cc/jsonp.php',
dataType:'json',
success:function(response){
alert(response);//json对象
alert(response.a);//a
});
});


//jsonp2.php
<?php
//这个文件时远程端：http://www.li.cc/jsonnp.php
$_arr = array('a'=>1,'b'=>2,'c'=>3);
$_result = json_encode($_arr);//把数组转化为json格式
$_callback = $_GET['callback'];
echo $_callback."($_result)";
?>

//本地获取jsonp2.php 成功

$.getJSON('jsonp2.php?callback=?',function(response){
alert(response.a);
});

//.getJSON跨域远程获取jsonp2.php 成功

$.getJSON('http://www.li.cc/jsonp2.php?callback=?',function(response){
alert(response.a);
});


//方法一.ajax跨域远程获取jsonp2.php 成功
$('form input[type=button]').click(function(){
$.ajax({
type:'POST',//默认是GET
url:'http://www.li.cc/jsonp.php?callback=?',
dataType:'json',
success:function(response){
alert(response);//json对象
alert(response.a);//a
});
});

//方法二.ajax跨域远程获取jsonp2.php 成功
$('form input[type=button]').click(function(){
$.ajax({
type:'POST',//默认是GET
url:'http://www.li.cc/jsonp.php',
dataType:'jsonp',
success:function(response){
alert(response);//json对象
alert(response.a);//a
});
});


//5.jqXHR对象
//在之前，我们使用到的局部方法：.success().compile().error(),这三个
//局部方法并不是XMLHttpRequest对象调用的，而是$.ajax()之类的全局方法返回的对象调用的
//这个对象就是jqXHR对象


$('form input[type=button]').click(function(){
$.ajax({
type:'POST',//默认是GET
url:'user.php',
data:$('form').serialize(),
success:function(response){
alert(response+'1');
},
success:function(response){
alert(response+'2');
});
});//这种方式提交后，有个缺点，想要在原有基础上扩展不行，输出的是
//XXXXX+2，把前面的XXXXX+1覆盖了

//jqXHR对象就是$.ajax()返回的对象
$('form input[type=button]').click(function(){

var jqXHR=$.ajax({
type:'POST',//默认是GET
url:'user.php',
data:$('form').serialize()
});

jqXHR.success(function(response){
alert(response);
});

//success()代替方法done()
jqXHR.done(function(response){
alert(response+'1');
}).done(function(){
alert(response+'2')
});
jqXHR.done(function(response){
alert(response+'3');
});
//好处是可连缀操作，可读性大大提高，不回覆盖原来方法

var jqXHR=$.ajax('t1.php');
var jqXHR2=$.ajax('t2.php');
//一般实现方法
jqXHR.done(function(response){
alert(response);
});
jqXHR2.done(function(response){
alert(response);
});
//现在实现方法
$.when(jqXHR,jqXHR2).done(function(r1,r2){
alert(r1[0]);//r1 里面有三个值: t1.php  success  object(自己对象)
alert(r2[0]);
});
});



//工具函数

//字符串操作

var str='      jQuery           ';
alert(str);
alert($.trim(str));//去掉字符串str里的空格


//数组和对象的操作

//$.each()遍历数组
var arr=['1','2','3','4'];
$.each(arr,function(index,value){
$('#box').html($('#box').html()+index+'.'+value+'<br />');
});


//$.each()遍历对象
$.each(window,function(name,fn){
$('#box').html($('#box').html()+name+'.'+fn+'<br />');
});

$.each($.ajax(),function(name,fn){
$('#box').html($('#box').html()+name+'<br />');
});

//$.grep()数据筛选

var arr=[5,2,9,4,11,57,89,1,23,8];
var arrGrep=$.grep(arr,function(element,index){
return index<4;//返回数组下标小于4的：0,1,2,3=》5,2,9,4
});
alert(arrGrep);

var arr=[5,2,9,4,11,57,89,1,23,8];
var arrGrep=$.grep(arr,function(element,index){
return element<6;//返回数组值小于6的：5,2,4,1
});
alert(arrGrep);


//$.map()修改数据

var arr=[5,2,9,4,11,57,89,1,23,8];
var arrMap=$.map(arr,function(element,index){
if(element<6 &&index<5)
    return element+1;
});
alert(arrMap);


//$.inArray()获取查找元素的下标
var arr=[5,2,9,4,11,57,89,1,23,8];
var arrInArray=$.inArray(4,arr);
alert(arrInArray);
//注意：下标是从0开始计算的。


//$.merge()合并两个数组
var arr=[5,2,9,4,11,57,89,1,23,8];
var arr2=[23,2,89,3,6,7];

//$.unique()删除重复的DOM元素

/*<div></div>
  <div></div>
  <div></div>
  <div class='box'></div>
  <div class='box'></div>
  <div class='box'></div>
  <div></div>
   
var divs=$('div').get();
//divs=divs.concat($('.box').get());
divs=$.merge(divs,$('.box').get());
alert($(divs).size());
$.unique(divs);
alert($(divs).size());


//$.toArray合并多个DOM元素组成元素

alert($('li').toArray());//不是jquery元素

alert($($('li').toArray()[0]).html());//1



//测试操作
//判断数据的类型和状态

//判断是否为数组
var arr=[1,2,3];
alert($.isArray(arr));


//判断是否为函数

var fn=function(){};
alert($.isFunction(fn));

//判断是否为空对象
var obj={};
alert($.isEmptyObject(obj));


//判断是否由{}和new Object()创造的对象（纯粹的原始对象）
var obj={};//true 原始对象
obj = new Object();//true 原始对象
alert(obj);//[object,object]
var obj=window;//false 内置对象
obj = new Object('name');//false 加入参数后，obj就变成字符串了，不是对象了
alert(obj);//name
alert($.isPlainObject(obj));


//判断DOM节点是否含另一个DOM节点
alert($.contains($('#box').get(0),$('#pox').get(0)));


//判断数据类型
var arr=[1,2,3];
alert($.type(arr));//array 数组
var obj={};
alert($.type(obj));//Object 对象


//判断是否为数字
var num=1.23;
alert($.isNumeric(num));


//判断是否为window对象
var wd=window;
alert($.isWindow(wd));


//URL操作
var obj={
   name:'Lee',
   age:100
}//字符串键值对
alert($.param(obj));//URL键值对 靠&连接


//浏览器的检测
//$.browser//已经废弃
//获取火狐浏览器和版本号
alert($.browser.mozilla+':'+$.browser.version);


if($.support.opacity==true){
 $('#box').css('opacity',0.5);//w3c浏览器
}else{
$('#box').css('filter',0.5);//IE浏览器
}

//其他操作  预备绑定函数上下文的工具函数：$.proxy()
var obj = {
  name:'Lee',
  test:function(){
  alert(this.name);
  }
}
obj.test();//this 是obj
$('#box').click(obj.test);// this 是box

//解决方法:
//$('#box').click($.proxy(obj,'test'));
*/

//插件
//引入插件的步骤：
//1.必须引入jquery.js文件，而且在所有插件之前引入；
//2.引入插件
//3.引入插件周边，比如皮肤、中文包等。

//验证插件(validate.js)
//第一步，引入jquery文件
//第二步，引入validate.js
//第三步，加载validate
$('form').validate();
//第四步，不得为空，给表单字段class=“required”





































});
