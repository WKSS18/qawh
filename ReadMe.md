
项目名称：vue重写去哪儿网移动端

主要重写模块： 酒店  攻略  首页  订单  我的

技术栈： axios  vue  betterscroll  element-ui  mockjs （待补充）

注意：首页进入初始需要刷新界面，并且切换一次浏览器和移动端模式（页面的滚动此时才生效）

搭建中用到的一些在线请求接口地址：

1  酒店页面数据请求

接口：post
/hotelapi/hotelcn/api/hotellist，这里做了一个代理/hotelapi

请求时候发现带的参数为地名的拼音，因此通过第三方插件转换后进行拼接   npm i pinyin -D

数据请求回来后判断何时数据加载完毕
通过判断hotelrs.data.data.hotels.length的值，如果为0，表示加载完毕，因为没发现它加载完毕的返回状态值，暂时用这种方式替代


2 城市数据接口
国内：get
https://touch.go.qunar.com/nav?abroad=false&_json&_=1587197257246&callback=jsonp1
abroad: false
_json: 
_: 1587197257246
callback: jsonp1
国外：get
https://touch.go.qunar.com/nav?abroad=true&_json&_=1587217649185&callback=jsonp1
abroad: true
_json: 
_: 1587217649185
callback: jsonp1


4 特色玩法数据接口
get
https://touch.go.qunar.com/api/proxy/book/search?RN=1&needRecommandTag=1&useConfigLabelGroup=1&type=3

5 精选内容数据加载
通过测试发现，每次的offset是一个随机的八位数，通过Math.random随机生成后发现可以正常获取后台返回的值

6 用户登录，订单模块逻辑

测试账号：  admin  123
使用mockjs模拟了一个用户数据,通过维护不同的状态实现用户登录和退出是的视图切换（订单模块和用户登录模块）

7 搜索门票搜索接口
post
city: "北京"
input: "我的"
ip: "223.104.109.133"
requestType: "touch"
https://www.qunar.com/bigsearch/request

详情页的数据请求接口
get
https://touch.piao.qunar.com/touch/detail.htm?id=340864

8 订单数据接口

9 酒店检索结果页面引入了百度地图接口，地图能正常显示，选中地点后实现二次检索酒店未做

10 酒店详情页数据接口
https://touch.qunar.com/hotelcn/api/hoteldetail
checkInDate: "2020-04-22"
checkOutDate: "2020-04-23"
cityUrl: "beijing_city"
extra: "{"highQuality":false}"
keywords: ""
location: ""
seq: "beijing_city_42511"
这一块数据要在初次检索的时候存到sessionStorage中，请求的时候动态引入