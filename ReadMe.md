
项目名称：vue重写去哪儿网移动端

主要重写模块： 酒店  自由行 低价机票

技术栈： axios vue betterscroll  element-ui mockjs（待补充）



1  酒店页面数据请求

接口：
/hotelapi/hotelcn/api/hotellist，这里做了一个代理/hotelapi

请求时候发现带的参数为地名的拼音，因此通过第三方插件转换后进行拼接   npm i pinyin -D

数据请求回来后判断何时数据加载完毕
通过判断hotelrs.data.data.hotels.length的值，如果为0，表示加载完毕，因为没发现它加载完毕的返回状态值，暂时用这种方式替代


2 