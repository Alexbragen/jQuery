const fs = require('fs')
module.exports = {
    index(res) {
        fs.readFile('./view/index.html', (err, data) => {
            if (!err) {
                res.end(data);
            }
        })
    },
    other(url, res) {
        fs.readFile('.' + url, (err, data) => {
            if (!err) {
                res.end(data);
            }
        })
    }
}