
module.exports={
    devServer:{
        proxy: {
            '/api': {
                target: 'https://172.20.10.2:12345/',

                changeOrigin: true,
                ws: true,
                logLevel: 'debug',
                pathRewrite: {'^/': '/'}
            }
        }
    }
}
