const {createProxyMiddleware: proxy } = require('http-proxy-middleware');

const API_URL = 'http://40.121.180.62:3001/';

module.exports = function(app) {
    console.log('here')
    app.use(proxy('/api/', { target: API_URL }));
};