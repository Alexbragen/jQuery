const page = require('./page');
module.exports = {
    // 接收对象
    // 绑定事件
    request(server) {
        server.on('request', (req, res) => {
            var method = req.method;
            var url = req.url;
            if (method == 'GET') {
                if (url == '/') {
                    page.index(res);
                } else {
                    page.other(url, res);
                }
            } else {
                console.log('error');
                res.end('error');
            }
        })
    }
}