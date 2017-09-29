//文件管理
let task=$('.task');
//搜索框修改
let search=$('.search');
//搜索框
let ser_text=$('#text');
//搜索×
let cuo=search.find('em');
//添加按钮
let add_span=$('.addition').find('span');
//添加项显示内容
let add_cont=$('.add_cont');
//列表显示内容
let js_setli=$('.js_setli');
//图标显示内容
let js_setch=$('.js_setch');
//时间显示内容
let js_timer=$('.js_timer');
//a-z显示内容
let js_azpx=$('.js_azpx');
//头像信息
let toux=$('.toux');
//头像内信息
let cotl_t1=$('.cotl_t1');
//文件内容 ul
let zon_ul=$('.zon_ul');
//装垃圾箱ul
let lfmy_ul=$('.lfmy_ul');
//右侧内容文件
let zhcoont=$('.zhcoont');
//面包屑导航栏
let cotmbx=$('.cotmbx');
//点击划√的个数
let n=0;
//隐藏的头部内容
let hedhidobj=$('.headhide');
//全选框
let checkall=$('.checkall')
//文件管理点击事件
task.click(()=>{
	if (task.data('onoff')) {
		task.css({'background':'','border':''})
		task.data('onoff',false)
	} else{
		task.css({'background':'url(img/task2.png) no-repeat center','border': '1px solid #3b93ff'})
		task.data('onoff',true)		
	}
	return false
})
//搜索框点击事件
search.click(()=>{
	$('.js_seri').css({'background':'url(img/search2.png)'})
	search.animate({
		width:'292px',
		borderColor: '#3b93ff'
	},'show',function(){
		cuo.show()
	})
	 return false;
})
//document 点击的时候执行内容
$(document).click(()=>{
	$('.js_seri').css({'background':'url(img/search.png)'})
	cuo.hide()
	search.animate({
		width:'200px',
		borderColor: '#dadbe3'},'show')
})
//列表显示内容
js_setli.click(()=>{
	js_setli.css({
		background: '#eeeef2 url(img/setlist.png) no-repeat center' 
	})
	js_setch.css({
		background: 'url(img/setchart.png) no-repeat center' 		
	})
})
//图标显示内容
js_setch.click(()=>{
	js_setch.css({
		background: '#eeeef2 url(img/setchart.png) no-repeat center' 		
	})
	js_setli.css({
		background: 'url(img/setlist.png) no-repeat center' 
	})	
})
//事件显示内容
js_timer.click(()=>{
	js_timer.css({
		background:'#eeeef2 url(img/time.png) no-repeat center'
	})
	js_azpx.css({
		background: 'url(img/a_z.png) no-repeat center'
	})
})
js_azpx.click(()=>{
	js_azpx.css({
		background: '#eeeef2 url(img/a_z.png) no-repeat center'
	})
	js_timer.css({
		background:'url(img/time.png) no-repeat center'
	})	
})
//添加项的事件
//	鼠标移入事件
add_span.mouseenter(()=>{
	add_cont.fadeIn('fast')
})
//鼠标移出事件
add_span.mouseleave(()=>{
	add_cont.fadeOut('fast')
})
//
add_cont.mouseenter(()=>{
	add_cont.stop()
})
add_cont.mouseleave(()=>{
	add_cont.fadeOut('fast')	
})
//头像移入显示信息
toux.mouseenter(()=>{
	cotl_t1.fadeIn('fast')
})
toux.mouseleave(()=>{
	cotl_t1.fadeOut('fast')
})
cotl_t1.mouseenter(()=>{
	cotl_t1.stop()
})
cotl_t1.mouseleave(()=>{
	cotl_t1.fadeOut('fast')	
})
//左侧ul生成列表 的全部信息一条
let li=document.createElement('li');
 $(li).data('path',data[0].path)
   $(li).addClass('loall')
$(li).html(
	`<i style="background:url(${data[0].pic}) no-repeat center"></i><span>${data[0].name}<span>`
	)
zon_ul.append(li)
//渲染左侧列表剩余内容
list(data)
//添加垃圾箱的li标签
let lzli=document.createElement('li');
$(lzli).data('path',data[1].path)
// $(lzli).addClass('lename')
$(lzli).html(
	`<i style="background:url(${data[1].pic}) no-repeat center"></i><span>${data[1].name}</span>`
)
lfmy_ul.append(lzli)
//渲染右侧内容文件
contwen(data)
/*********************************以上内容为渲染页面***************/
window.onhashchange=(()=>{
	//hash改变找到父级
	let Data=getdata(data)
	//hash改变后再次渲染右侧文件夹内容
	newcont(Data,data)
	//面包屑导航生成
	let arr=getdata2(data)
	nav(arr)
	//文件每个的删除按钮
	wendel()
	//右侧内容双击事件
	dbclk()
	//左侧内容点击事件
	lefclick()
	//全部 li的点击事件
	lefallclick()
	//面包屑点击事件
	rinavclick()
	//文件单一选中的事件
	wenchecked()
	//触发全选按钮事件
	chall()
	//行间重命名事件
	rename()
	//全局调用框选
	boxSelect()
	
})
//右侧内容双击事件
dbclk()
//左侧内容点击事件
lefclick()
//全部 li的点击事件
lefallclick()
//面包屑点击事件
rinavclick()
//文件单一选中的事件
wenchecked()
//触发全选按钮事件
chall()
//文件每个的删除按钮
wendel()
//行间重命名事件
rename()
//全局调用框选
boxSelect();