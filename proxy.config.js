const PROXY_CONFIG = [
    {
        context: ['/api'],
        target: 'https://api.royaleapi.com/',
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
    }
];

module.exports = PROXY_CONFIG;