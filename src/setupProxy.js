const {createProxyMiddleware: proxy } = require('http-proxy-middleware');

module.exports = function(app) {
    console.log('here')
    app.use(proxy('/api/', { target: 'http://13.68.188.123:3001//' }));
};