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
            },
            'piaoapi':{
                target:"https://touch.piao.qunar.com",
                changeOrigin:true,
                pathRewrite:{
                    '^/piaoapi':''
                }
            }
        }
    },

    // 多页面配置
    pages: {
        index: {
          // page 的入口
          entry: 'src/main.js',
          // 模板来源
          template: 'public/index.html',
          // 在 dist/index.html 的输出
          filename: 'index.html',
          // 当使用 title 选项时，
          // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
          title: 'Index Page',
          // 在这个页面中包含的块，默认情况下会包含
          // 提取出来的通用 chunk 和 vendor chunk。
          chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        piaodetail:{
              // page 的入口
          entry: 'src/piaodetail.js',
          // 模板来源
          template: 'public/index.html',
          // 在 dist/index.html 的输出
          filename: 'piaodetail.html',
          // 当使用 title 选项时，
          // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
          title: 'Index Page',
          // 在这个页面中包含的块，默认情况下会包含
          // 提取出来的通用 chunk 和 vendor chunk。
          chunks: ['chunk-vendors', 'chunk-common', 'piaodetail']
        },
        hoteldetail:{
            // page 的入口
        entry: 'src/hoteldetail.js',
        // 模板来源
        template: 'public/index.html',
        // 在 dist/index.html 的输出
        filename: 'hoteldetail.html',
        // 当使用 title 选项时，
        // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
        title: 'Index Page',
        // 在这个页面中包含的块，默认情况下会包含
        // 提取出来的通用 chunk 和 vendor chunk。
        chunks: ['chunk-vendors', 'chunk-common', 'hoteldetail']
      }
      }
}