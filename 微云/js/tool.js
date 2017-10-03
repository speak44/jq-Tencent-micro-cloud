//左侧ul连内容的渲染
function list(data){
	let list=null
	$('.lename').remove()
	for (let k in data[0].child) {
		if (k!='maxId') {
			lis=document.createElement('li')
			$(lis).data('path',data[0].child[k].path)
			$(lis).addClass('lename')
			$(lis).html(`
				<i style="background:url(${data[0].child[k].pic}) no-repeat center"></i>
				<span>${data[0].child[k].name}</span>
			`)
		zon_ul.append(lis)
		}
	}
}
//右侧内容渲染
function contwen(data){
	let list=null;
	for (let k in data[0].child) {
		if (k!='maxId') {
			lis=document.createElement('li')
			$(lis).data('path',data[0].child[k].path)
			$(lis).addClass('wen')
			$(lis).html(`
				<div class="inct clearfix">
					<span class="cecked"></span>
					<div class="wencexct clearfix">
						<em></em>
						<span class="contwen"></span>
						<span class="ctwms">${data[0].child[k].name}</span>
						<input type="text" name="" class="wentext" value="${data[0].child[k].name}" />
						<div class="conttshi clearfix">
								<a href="javascript:;" class="w_share"></a>
								<a href="javascript:;" class="w_down"></a>
								<a href="javascript:;" class="w_del"></a>
								<a href="javascript:;" class="w_remove"></a>
								<a href="javascript:;" class="w_ren"></a>
								<a href="javascript:;" class="w_safe"></a>							
						</div>
						<time>2016-12-22 10:41</time>
					</div>							
				</div>
				<div class="delhied js_wendelhid">
					<div class="mask"></div>
					<div class="delcct js_wedecct">
						<div class="delhed">
							<h3>删除文件</h3>
							<i class="delno"></i>
						</div>
						<div class="delcont">
							<em></em>
							<div class="tship">
								<p>确定要删除这个文件夹吗？</p>
								<p>已删除的文件可以在回收站找到</p>										
							</div>
							<div class="delbtn">
								<a href="javascript:;" class="delok">确定</a>
								<a href="javascript:;" class="delno">取消</a>									
							</div>
						</div>
					</div>	
				</div>				
			`)
			zhcoont.append(lis)
		}

	}	
}

//右侧内容双击事件
function dbclk(){
	$('.wen').each((i,e)=>{
		$(e).dblclick(()=>{
			let path=$(e).data('path').split('_').join('/')
			location.hash='h='+path
		})
	})
}
//改变hash值 找到点击的父级
function getdata(data){
	let hash=location.hash;
	if (hash) {
		let arr=hash.substr(1).split('=')[1].split('/')
		let Data=data
		for (let i=1,len=arr.length;i<len;i++) {
			Data=Data[arr[i]]
		}
		return Data
	}else{
		return data
	}
}
//右侧双击事件后再次渲染页面
function newcont(Data,loddata){
	console.log(Data)
	//全部 的li标签
	let loall=$('.loall')
	//全部 内部的li标签
	let lename=$('.lename')
	if (Data.path.length>14) {
		var xrdata=Data.path.substring(0,14)
		
	}else{
		var xrdata=Data.path
	}
	let arr=xrdata.split('_')
	//原始数组
	let data3=data
	for (let i=1,len=arr.length;i<len;i++) {
			data3=data3[arr[i]]
	}
	//找到右侧匹配到的li 渲染小图标样式
	lename.each((i,e)=>{
		if ($(e).data('path')==data3.path) {
			$(e).find('i').attr('style',`background:url(${data3.picnew}) no-repeat center`)}else if(loall.data('path')==data3.path){
			loall.find('i').attr('style',`background:url(${loddata[0].pic}) no-repeat center`)
			$(e).find('i').attr('style',`background:url(${loddata[0].child[i].pic}) no-repeat center`)	
		}else{
//			if ($(e).data('path')==loddata[0].child[i].path) {
				$(e).find('i').attr('style',`background:url(${loddata[0].child[i].pic}) no-repeat center`)
			loall.find('i').attr('style',`background:url(${loddata[0].picnew}) no-repeat center`)				
			}
//		}
	})
/********************以上内容是渲染ul左侧侧边栏图标**********************/
	$('.wen').remove()
	let zhcoont=$('.zhcoont');
	if (Data.child.maxId!=0) {
		var obj=Data.child
	let list=null;
		for (let k in obj) {
			if (k!='maxId') {
				lis=document.createElement('li')
				$(lis).data('path',obj[k].path)
				$(lis).addClass('wen')
				$(lis).html(`
					<div class="inct clearfix">
						<span class="cecked"></span>
						<div class="wencexct clearfix">
							<em></em>
							<span class="contwen"></span>
							<span class="ctwms">${obj[k].name}</span>
							<input type="text" name="" class="wentext" value="${obj[k].name}" />							
							<div class="conttshi clearfix">
								<a href="javascript:;" class="w_share"></a>
								<a href="javascript:;" class="w_down"></a>
								<a href="javascript:;" class="w_del"></a>
								<a href="javascript:;" class="w_remove"></a>
								<a href="javascript:;" class="w_ren"></a>
								<a href="javascript:;" class="w_safe"></a>								
							</div>
							<time>2016-12-22 10:41</time>
						</div>							
					</div>
					<div class="delhied js_wendelhid">
						<div class="mask"></div>
						<div class="delcct js_wedecct">
							<div class="delhed">
								<h3>删除文件</h3>
								<i class="delno"></i>
							</div>
							<div class="delcont">
								<em></em>
								<div class="tship">
									<p>确定要删除这个文件夹吗？</p>
									<p>已删除的文件可以在回收站找到</p>										
								</div>
								<div class="delbtn">
									<a href="javascript:;" class="delok">确定</a>
									<a href="javascript:;" class="delno">取消</a>									
								</div>
							</div>
						</div>	
					</div>							
				`)
			}
		zhcoont.append(lis)
		}		
	} else{
		zhcoont.html('')
	}
	//重新设置n的值 关于全选的所有内容
	n=0
	//隐藏头部显示内容	
	headhide()
	//判断全选
	pball()
	//全选按钮触发
	chall()
}
//左侧列表点击事件
function lefclick(){
	let lename=$('.lename')
	lename.each((i,e)=>{
		$(e).click(()=>{
			let hash='h='+$(e).data('path').split('_').join('/')
			location.hash=hash
		})	
	})
}
//<内容为全部> li的点击事件
function lefallclick(){
	//全部 的li标签
	let loall=$('.loall')
	loall.click(()=>{
		let hash='h='+loall.data('path').split('_').join('/')
		location.hash=hash
	})
}
//生成面包屑导航
function getdata2(data){
	let hash=location.hash;
	let arr1=[];
	if (hash) {
		let arr=hash.substr(1).split('=')[1].split('/')
		let Data=data
		/****************存在递归需要再过一遍**************/
		fn();
		function fn(){
			if (arr.length>2) {
				for (let i=1,len=arr.length;i<len;i++) {
					Data=Data[arr[i]]
				}
				arr1.unshift(Data)
				arr.splice(arr.length-2,2)
				Data=data;
				fn()
			}else{
				for (let i=1,len=arr.length;i<len;i++) {
					Data=Data[arr[i]]
				}
				arr1.unshift(Data)
			}
		}
		return arr1
	}else{
		return arr1=[]
	}
}
//渲染面包屑导航
function nav(arr){
	let str='';
	if (arr.length!=0) {
		for (let i=0,len=arr.length;i<len;i++) {
			str+=`<li class="navli">
					<i></i>
					<a href="javascript:;">${arr[i].name}</a>
					</li>`
	}
		cotmbx.html(str)
		$('.navli').each((i,e)=>{
			$(e).data('path',arr[i].path)
		})
	}
}
//面包屑导航点击事件
function rinavclick(){
	let navli=$('.navli')
	navli.each((i,e)=>{
		$(e).click(()=>{
			let hash='h='+$(e).data('path').split('_').join('/')		
			location.hash=hash
		})
	})
}
//文件单一选中的事件
function wenchecked(){
	let wencek=$('.wen').find('.cecked')
	wencek.click((ev)=>{
		let evtar=$(ev.target);
		if (evtar.data('onoff')) {
			evtar.css({background:''})
			evtar.data('onoff',false)
			evtar.attr('onoff','0');
			evtar.closest('.inct').css('background','')
			n--
		}else{
			evtar.css({background:'#3b93ff url(img/checkright.png) no-repeat center'})			
			evtar.data('onoff',true);
			evtar.attr('onoff','1');
			evtar.closest('.inct').css('background','#f5f8fa')
			n++
		}
		headhide()
		
		pball()
		return false
	})
}
//隐藏头部显示内容
function headhide(){
	if (n!=0) {		
		hedhidobj.css({'display':'block'})
		//选中个数统计
		let xuceckd=$('.xuceckd')
		xuceckd.text(`选择了${n}项`)	
		//隐藏头部 取消选中按钮		
		hidqx()
		//隐藏头部 三个点按钮的鼠标移入移出事件
		hiddian()
		//隐藏头部 删除按钮触发
		hedhiddel()
		//隐藏头部 重命名事件
		hidhcm()

	} else{
		hedhidobj.css({'display':''})			
	}
}
//隐藏头部 取消选中按钮
function hidqx(){
	//取消选中按钮点击
	let cancel=$('.cancel')
	let wencek=$('.wen').find('.cecked')
	cancel.click(()=>{
		n=0	
		wencek.css({background:''})
		wencek.data('onoff',false)
		wencek.attr('onoff','0');
		wencek.closest('.inct').css('background','')
		checkall.css({background:''})
		checkall.data('onoff',false)
		checkall.attr('onoff','0');		
		hedhidobj.css({'display':''})
	})
}
//隐藏头部 三个点按钮的鼠标移入移出事件
function hiddian(){
	let tumspan=$('.tumspan')
	//隐藏的列表
	let tuble=$('.tuble')
	let hidlist=$('.tuble').find('ul')
	let str=''
	if (n>1) {
		str=`<li class='hidydd'>
				<a href="javascript:;">移动到</a>
			</li>
			<li class='hidbxx'>
				<a href="javascript:;">移入保险箱</a>
			</li>`
	}else{
		str=`
			<li class='hidydd'>
				<a href="javascript:;">移动到</a>
			</li>
			<li class='hidcmm'>
				<a href="javascript:;" class="hidccm">重命名</a>
			</li>
			<li class='hidbxx'>
				<a href="javascript:;">移入保险箱</a>
			</li>
		`
	}
	hidlist.html(str)
	//	鼠标移入事件
	tumspan.mouseenter(()=>{
		tuble.fadeIn('fast')
	})
	//鼠标移出事件
	tumspan.mouseleave(()=>{
		tuble.fadeOut('fast')
	})
	tuble.mouseenter(()=>{
		tuble.stop()
	})
	tuble.mouseleave(()=>{
		tuble.fadeOut('fast')	
	})	
}
//隐藏头部的删除按钮
function hedhiddel(){
	let js_haddel=$('.js_haddel')		
	//删除弹窗
	let js_hhiddelwen=hedhidobj.find('.js_hhiddelwen')
	let js_wedecct=js_hhiddelwen.find('.js_wedecct')
	js_haddel.click(()=>{
				
		//设置盒子水平居中的样式
		let w=$(document).innerWidth()/2-js_wedecct.width()/2;
		let h=$(document).innerHeight()/2-js_wedecct.height()/2;
		js_wedecct.css({'top':h+'px','left':w+'px'})
		let wenccc=$('.wen').find('.cecked[onoff=1]')
		console.log(wenccc.length)
		wenccc.each((i,e)=>{
			js_hhiddelwen.css('display','block')
			let path=$(e).closest('.wen').data('path')
			let wen=$(e).closest('.wen')
			//单一文件删除弹窗确认按钮事件
			wentcdel(js_wedecct,js_hhiddelwen,path,wen)					
		})
	})
	
}
//隐藏头部的重名事件
function hidhcm(){
	let hidccm=$('.hidccm')
	hidccm.click(()=>{
		let wenccc=$('.wen').find('.cecked[onoff=1]')
		let wen=wenccc.closest('.wen')
		let wentext=wen.find('.wentext')
		let ctwms=wen.find('.ctwms');
		wentext.css('display','block')
		wentext.select()
		wentext.blur((ev)=>{
			ctwms.text($(ev.target).val())
			wentext.css('display','none')
			let path=wen.data('path')
			let arr=path.split('_')
			let Data=data
			for (let i=1,len=arr.length;i<len;i++) {
				Data=Data[arr[i]]
			}
			Data.name=$(ev.target).val()
			//重绘左侧排版
			list(data)
			//左侧点击事件
			lefclick()
			//隐藏头部
			hedhidobj.css({'display':''})			
			//取消选中
			wenccc.css({background:''})
			wenccc.data('onoff',false)
			wenccc.attr('onoff','0');
			wenccc.closest('.inct').css('background','')	
			n--
		})
	})
}
//全选功能
function chall(){
	let wencek=$('.wen').find('.cecked')
	checkall.click((ev)=>{
		let tarev=$(ev.target)
		if (tarev.data('onoff')){			
			checkall.css({background:''})
			tarev.data('onoff',false)
			tarev.attr('onoff','0');
			wencek.closest('.inct').css('background','')				
			wencek.data('onoff',false)
			wencek.attr('onoff','0');
			wencek.css({background:''})
			
			n=0				
		} else{				
			checkall.css({background:'#3b93ff url(img/checkright.png) no-repeat center'})
			wencek.css({background:'#3b93ff url(img/checkright.png) no-repeat center'})			
			wencek.data('onoff',true);
			wencek.attr('onoff','1');			
			tarev.data('onoff',true);
			tarev.attr('onoff','1');
			wencek.closest('.inct').css('background','#f5f8fa')			
			n=wencek.length
		}		
		headhide()
		return false
	})
}
//单个文件选中，判断全选功能
function pball(){
	let wencek=$('.wen').find('.cecked')
//	console.log(wencek.length,n)
	if (n==wencek.length&&wencek.length!=0) {
		checkall.css({background:'#3b93ff url(img/checkright.png) no-repeat center'})		
		checkall.data('onoff',true)
		checkall.attr('onoff','1')	
		//选中个数统计
		let xuceckd=$('.xuceckd')
		xuceckd.text(`选择了${n}项`)	
			
	} else{
		checkall.css({background:''})
		checkall.data('onoff',false)
		checkall.attr('onoff','0')	
		if (n==wencek.length&&n==0) {
			headhide()
		}
	}
}
//单一文件删除按钮
function wendel(){
	let w_del=$('.wen').find('.w_del')
	w_del.click((ev)=>{
		let path=$(ev.target.closest('.wen')).data('path')
		let wen=$(ev.target.closest('.wen'))
		//找到删除文件弹窗
		let js_wendelhid=$(ev.target.closest('.wen')).find('.js_wendelhid')
		//删除弹窗内容
		let js_wedecct=js_wendelhid.find('.js_wedecct')
		//设置盒子水平居中的样式
		let w=$(document).innerWidth()/2-js_wedecct.width()/2;
		let h=$(document).innerHeight()/2-js_wedecct.height()/2;
		js_wedecct.css({'top':h+'px','left':w+'px'})
		//修改样式显示
		js_wendelhid.css('display','block')		
		//单一文件删除弹窗确认按钮事件
		wentcdel(js_wedecct,js_wendelhid,path,wen)	
	})
}
function wentcdel(js_wedecct,js_wendelhid,path,wen){
	//参数1，传入的是弹窗内容
	//参数2，传入弹窗 
	//参数4，是删除的文件
	/*
	 1、拖拽功能
	 2、点击删除功能
	 3、取消弹窗功能
	 * */
	//删除文档弹窗的拖拽事件
	js_wedecct.mousedown((ev)=>{
		ev.preventDefault()
		let t=ev.clientY-js_wedecct.offset().top;
		let l=ev.clientX-js_wedecct.offset().left;
		let maxt=$(document).innerHeight()-js_wedecct.height()
		let maxl=$(document).innerWidth()-js_wedecct.width()
		document.addEventListener('mousemove',fndel,true)
		function fndel(ev){
			let newt=ev.clientY-t;
			let newl=ev.clientX-l;
			if (newt<0) {
				newt=0
			}
			if (newl<0) {
				newl=0
			}
			if (newt>maxt) {
				newt=maxt
			}
			if (newl>maxl) {
				newl=maxl
			}
			js_wedecct.css({
				'top':newt+'px','left':newl+'px'
			})
			ev.cancelBubble=true			
		}
//		$(document).mousemove((ev)=>{
//
//		})
		$(document).mouseup(()=>{
			document.removeEventListener('mousemove',fndel,true)
			$(document).unbind('mousemove');
		})
	})
	//取消选框功能触发
	let delno=js_wedecct.find('.delno');
	delno.click(()=>{
		js_wendelhid.css('display','none')
	})
	//确认删除内容功能触发
	let delok=js_wedecct.find('.delok');
	delok.click((ev)=>{
/******************删除按钮需要做的功能*************************************/
		js_wendelhid.css('display','none')
		//切割成数组
		let arr=path.split('_')
		let Data=data
//		删除数据操作的原理:
//			首先找到操作元素的父级;
//			而数组中,抛去后两位,就为父级
//			删除时注意,要删除父级下面的子级
//			所以利用父级的child,在记录下子级的path值
//			在将父级下的child的maxid也删除一位
		let s=arr[arr.length-1]//子级的path的最后一位；
		arr.splice(arr.length-2,2)
		for (let i=1,len=arr.length;i<len;i++) {
			Data=Data[arr[i]]
		}
		delete Data.child[s]
		Data.child.maxId--
		
		wen.remove()
		//右侧内容已经在上面执行中删除了DOM节点以及数据
		let w_del=$('.wen').find('.w_del')
		//为了判断全选用的
		if (n==w_del.length+1) {
			n--
		}
		//重绘左侧排版
		list(data)
		//左侧点击事件
		lefclick()
		//判断全选
		pball()	
		//总的全选框按钮的触发事件
		chall()
		hedhidobj.css({'display':''})
	})
}
//重命名文件
function rename(){
	let w_ren=$('.wen').find('.w_ren')
	w_ren.click((ev)=>{
		let wen=$(ev.target).closest('.wen')
		let wentext=wen.find('.wentext')
		let ctwms=wen.find('.ctwms');
		wentext.css('display','block')
		wentext.select()
		wentext.blur((ev)=>{
			ctwms.text($(ev.target).val())
			wentext.css('display','none')
			let path=wen.data('path')
			let arr=path.split('_')
			let Data=data
			for (let i=1,len=arr.length;i<len;i++) {
				Data=Data[arr[i]]
			}
			Data.name=$(ev.target).val()
			//重绘左侧排版
			list(data)
			//左侧点击事件
			lefclick()			
		})		
	})
}
//全局调用框选
function boxSelect(){
	//inconbox 指右侧最大的盒子
	//ic_box 放文件夹的盒子
	let wen=$('.wen');
	let wencek=$('.wen').find('.cecked')//单一文件夹的cecked
	let boxSelect=$('.boxSelect');//是选框
	let cot_right=$('.cot_right');
	let left1=cot_right.offset().left;
	let top1=cot_right.get(0).getBoundingClientRect().top;
	let right1=left1+cot_right.width();
	let bottom1=top1+cot_right.height();
	let arr=[];
	cot_right.mousedown((ev)=>{
	
		ev.preventDefault()
		let l1 = ev.clientX-left1;
		let t1 = ev.clientY-top1;
		ev.cancelBubble=true
		document.addEventListener('mousemove',tfn,false)
		function tfn(ev){
			ev.preventDefault();
			boxSelect.css('display','block')			
			if (ev.clientX<right1 && ev.clientX>left1 && ev.clientY<bottom1 && ev.clientY>top1) {
				let l2 = ev.clientX-left1;
				let t2 = ev.clientY-top1;
				let w = Math.abs(l1-l2);
				let h = Math.abs(t1-t2);
				let l = l1>l2?l2:l1;
				let t = t1>t2?t2:t1;
				boxSelect.css({'width':w+'px','height':h+'px','left':l+'px','top':t+'px'})		
			
				for(var i=0;i<arr.length;i++){
					if (arr[i].find('.cecked').data('onoff')) {//选中
						n--;
						arr[i].find('.cecked').data('onoff',false);
						arr[i].find('.cecked').attr('onoff','0');//未选中
						arr[i].find('.cecked').css('background','')
						arr[i].find('.inct').css('background','')
					}
				}
				arr = [];
				//每次都是当前被选中的				
				wen.each((i,e)=>{
					if (duang(boxSelect,$(e))) {
						if (!$(e).find('.cecked').data('onoff')) {
							n++
							$(e).find('.cecked').data('onoff',true);
							$(e).find('.cecked').attr('onoff','1');//未选中
							$(e).find('.cecked').css('background','#3b93ff url(img/checkright.png) no-repeat center')
							$(e).find('.inct').css('background','#f5f8fa')
							arr.push($(e))
						}else{
							arr.push($(e))
						}
					}
				})
				//判断全选
				pball()
				//隐藏头部显示功能
				headhide()
			}//if判断条件
			ev.cancelBubble=true				
		}
		$(document).mouseup((ev)=>{
			document.removeEventListener('mousemove',tfn,false)
//			$(document).unbind('mousemove');
			$(document).unbind('mouseup');
			boxSelect.css('display','none');
		})
	})
	
}
//检测碰撞
function duang(obj1,obj2){
	let pos1 = obj1.offset();
	let pos1r=pos1.left+obj1.width();
	let pos1b=pos1.top+obj1.height();
	let pos2 = obj2.offset();
	let pos2r=pos2.left+obj2.width();
	let pos2b=pos2.top+obj2.height();
	if(pos1r<pos2.left || pos1b<pos2.top || pos1.left>pos2r || pos1.top>pos2b){
		return false;
	}else{
		return true;
	}
}
//新建文件
function nmnew(){
	let newaddwen=$('.newaddwen')
	newaddwen.data('onoff',true)
	newaddwen.click(()=>{
		if (newaddwen.data('onoff')) {
			let whash=location.hash;
			let newPath=null;
			if (whash) {
				let hash = whash.substr(1).split("=")[1]
				let  arr = hash.split('/');
				let Data = data;
				for(let i = 1; i < arr.length; i++) {
					Data = Data[arr[i]];
				} 
				console.log(Data)
				Data.child.maxId++;
				newPath = Data.path + '_child_' + Number(Data.child.maxId - 1);
				Data.child[Data.child.maxId - 1] = {
					path: newPath,
						name: '新建文件夹',
						child: {
							maxId: 0
						}
				}			
			}else{
				data[0].child.maxId++;
				newPath = "data_0_child_" + Number(data[0].child.maxId - 1);
				data[0].child[data[0].child.maxId - 1] = {
					pic:'img/wenxiao2.png',
					picnew:'img/wenxiao.png',					
					path: newPath,
					name: '新建文件夹',
					child: {
						maxId: 0
					}
				}
			}
			newaddwen.data('onoff',false)
			lis=document.createElement('li')
			$(lis).data('path',newPath)
			$(lis).addClass('wen')
			$(lis).html(`
				<div class="inct clearfix">
					<span class="cecked"></span>
					<div class="wencexct clearfix">
						<em></em>
						<span class="contwen"></span>
						<span class="ctwms">新建文件夹</span>
						<input type="text" name="" class="wentext" value="新建文件夹" />							
						<div class="conttshi clearfix">
							<a href="javascript:;" class="w_share"></a>
							<a href="javascript:;" class="w_down"></a>
							<a href="javascript:;" class="w_del"></a>
							<a href="javascript:;" class="w_remove"></a>
							<a href="javascript:;" class="w_ren"></a>
							<a href="javascript:;" class="w_safe"></a>								
						</div>
						<time>2016-12-22 10:41</time>
					</div>							
				</div>
				<div class="delhied js_wendelhid">
					<div class="mask"></div>
					<div class="delcct js_wedecct">
						<div class="delhed">
							<h3>删除文件</h3>
							<i class="delno"></i>
						</div>
						<div class="delcont">
							<em></em>
							<div class="tship">
								<p>确定要删除这个文件夹吗？</p>
								<p>已删除的文件可以在回收站找到</p>										
							</div>
							<div class="delbtn">
								<a href="javascript:;" class="delok">确定</a>
								<a href="javascript:;" class="delno">取消</a>									
							</div>
						</div>
					</div>	
				</div>							
			`)
			$(lis).insertBefore(zhcoont.find('li').eq(0))	
			//单一文件删除按钮
			wendel()
			//重绘左侧排版
			list(data)
			//左侧点击事件
			lefclick()
			//判断全选
			pball()	
			//总的全选框按钮的触发事件
			chall()
			//重命名
			rename()	
		}

	})
}
