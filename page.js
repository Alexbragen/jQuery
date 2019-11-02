const fs = require('fs')
const replace = require('./replace')
module.exports = {
    index(res) {
        fs.readFile('./view/index.html', 'utf8', (er, da) => {
            if (!er) {
                replace.find(da, res)
            }
        })
    },
    other(url, res) {
        fs.readFile('.' + url, (err, data) => {
            if (!err) {
                res.end(data);
            }
        })
    },
    add(res) {
        fs.readFile('./view/add.html', (err, data) => {
            if (!err) {
                res.end(data);
            }
        })
    }
}