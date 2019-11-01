const fs = require('fs')
module.exports = {
    index(res) {
        fs.readFile('./index.html', (err, data) => {
            if (!err) {
                res.end(data);
            }
        })
    }
}