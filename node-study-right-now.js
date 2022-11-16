
console.log("+++++++++++++++++++++++++++++++++++NODE JS STUDY ....++++++++++++++++++++++++++++++++++++++++++++++++++++")



function test (){
	console.log("hi , in order to be full stack enginner, you still have lots more to work on !")
}

var obj = {
	"name": "LICSLAN",
	"age":"31",
	"hobby":"Basketball",
	"origin":"WuHan",
	hello: test
}

//console.log(obj)
console.log(obj)
obj.hello()
const fs = require('fs')
// fs.readFile('./site-resume/test.txt','utf8',function(err,dataStr){
// 	console.log(err)
// 	console.log("=======================")
// 	console.log(dataStr)
// })



// fs.readFile('./site-resume/test1.txt','utf8',function(err,dataStr){

// 	if(err){
// 		return console.log("读取失败  ======>"+err.message)
// 	}

// 	console.log("success  =========>   "+ dataStr)
// })



// //写入测试
// fs.writeFile('G:/site-resume/test1.txt','hello NodeJS',function(err){
// 	console.log("WIRTE  =========>   "+ err)
// })


//小练习
fs.readFile(__dirname+'/site-resume/sorce.txt','utf8',function(err,dataStr){

	if(err){
		return console.log("读取失败  ======>"+err.message)
	}

	console.log("success sorce:  =========>   "+ dataStr)


	const arrOld = dataStr.split(' ')
	console.log("=============> "+ arrOld)

	const arrNew = []
	arrOld.forEach(item=>{
		arrNew.push(item.replace('=',': '))
	})

	console.log("=============> "+ arrNew)

	const newStr = arrNew.join('\r\n')

	console.log(newStr)

	fs.writeFile(__dirname+'/site-resume/test15.txt',newStr,function(err){

		if(err){
			return console.log("write fail "+ err.message)
		}

		console.log("WIRTE  =========>  success ")

		console.log(__dirname)

	})
})


console.log(",,,,,,,,,,,,,,,,,,,,"+__dirname)
console.log("=================================path 模块学习=========================================")
const path = require('path')

// 注意  ../会抵消一层路径
const pathStr = path.join('/a','/b/c','../','./d','e')
console.log("pathStr==================> "+ pathStr )
const fullName = '/ab/c/d/index.html'
const basename = path.basename(fullName)
const basenameExec = path.basename(fullName,'.html')
console.log("basename is =====>" + basename+ "======== "+ basenameExec+ " ,extendName==>"+ path.extname(fullName))
console.log("=================================HTTP 模块学习=========================================")
//1.导入HTTP模块
const http = require('http')
//2.创建web服务器实例
const server = http.createServer()
//3.为服务器s实例绑定request事件 监听客户端请求
server.on('request',function(req,res){

	const url = req.url
	const method = req.method
	const dataStr = `Your request URL is ${url}, and request method is ${method}`
	const dataStr2 = `你请求 URL is ${url}, and request method is ${method}`
	console.log(dataStr2)

	//向客户端发送内容时，为了防止中文乱码问题  响应头需要设置 Content-Type  text/html charset=utf-8
	res.setHeader('Content-Type','text/html;charset=utf-8')
	res.end(dataStr2)

console.log('someone visite our web server!')

})
//4.启动服务器
server.listen(80,function(){
	console.log('server running at http://127.0.0.1')
})


//NODE 三个非常重要的模块
//HTTP(创建web服务模块) PATH (路径模块) FS  (文件系统模块)