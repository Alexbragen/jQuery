const page = require('./page');
const {
    StringDecoder
} = require('string_decoder');
const decode = new StringDecoder('utf8');
const url = require('url');
const fs = require('fs');
module.exports = {
    // 接收对象
    // 绑定事件
    request(server) {
        server.on('request', (req, res) => {
            var method = req.method;
            var reurl = url.parse(req.url, true).pathname;
            // var host = req.headers.host
            if (method == 'GET') {
                if (reurl == '/') {
                    page.index(res);
                } else if (reurl == '/add') {
                    page.add(res);
                } else {
                    page.other(reurl, res);
                }
            } else if (method == 'POST') {
                req.on('data', chunk => {
                    fs.readFile('./db.json', 'utf8', (err, data) => {
                        if (!err) {
                            var lis = JSON.parse(data);
                            var Obj = {
                                id: lis.length + 1
                            }
                            var txt = decode.write(chunk);
                            var arr = txt.split('&');
                            // console.log(arr);
                            for (var i = 0; i < arr.length; i++) {
                                arr_2 = arr[i].split('=');
                                // console.log(arr_2);
                                Obj[arr_2[0]] = arr_2[1]
                            }
                            // Obj.unshift('123');
                            lis.push(Obj);
                            fs.writeFile('db.json', JSON.stringify(lis, null, 4), err => 0);
                            res.end('<script>location.href="../"</script>');
                        }

                    })
                })
            } else {
                console.log('error');
                res.end('error');
            }
        })
    }
}