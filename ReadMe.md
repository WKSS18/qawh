
项目名称：vue重写去哪儿网移动端

主要重写模块： 酒店  自由行 低价机票

技术栈： axios vue betterscroll  element-ui mockjs（待补充）



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
使用mockjs模拟了一个用户数据,通过维护不同的状态实现用户登录和退出是的视图切换（订单模块和用户登录模块）
