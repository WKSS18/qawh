const postview = require('postcss-px-to-viewport');



module.exports = {
    // 移动端适配处理，使用postcss插件
    css: {
        loaderOptions: {
            css: {
                // 这里的选项会传递给 css-loader
            },
            postcss: {
                // 这里的选项会传递给 postcss-loader
                plugins: [
                    new postview({
                        unitToConvert: 'px',
                        viewportWidth: 375,
                        unitPrecision: 5,
                        propList: ['*'],
                        viewportUnit: 'vw',
                        fontViewportUnit: 'vw',
                        selectorBlackList: [],
                        minPixelValue: 1,
                        mediaQuery: false,
                        replace: true,
                        exclude: [/node_modules/],
                    })
                ]

            }
        }
    },

    // 配置代理
    devServer:{
        proxy:{
            '/hotelapi':{
                target:"https://touch.qunar.com",
                changeOrigin:true,
                pathRewrite:{
                    '^/hotelapi':''
                }
            },
            '/strategyapi':{
                target:"https://touch.go.qunar.com",
                changeOrigin:true,
                pathRewrite:{
                    '^/strategyapi':''
                }
            },
            'ticketapi':{
                target:"https://www.qunar.com",
                changeOrigin:true,
                pathRewrite:{
                    '^/ticketapi':''
                }
            }
        }
    }

    // 多页面配置
    
}