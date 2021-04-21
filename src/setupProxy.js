const  createProxyMiddleware  = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://wbdv-sp21-swatin-server-node.herokuapp.com',
      changeOrigin: true,
    })
  );
};
