const fs = require('fs');
module.exports = {
    find(da, res) {
        fs.readFile('./db.json', (err, data) => {
            if (!err) {
                var db_data = JSON.parse(data);
                var html = ``;
                for (var i = 0; i < db_data.length; i++) {
                    html += `<tr>
                                    <td>${db_data[i].id}</td>
                                    <td>${db_data[i].name}</td>
                                    <td>${db_data[i].nengli}</td>
                                    <td>${db_data[i].jituan}</td>
                                    <td>${db_data[i].img}</td>
                                    <td>
                                        <a href="#">查看</a> 
                                        <a href="#">修改</a>
                                        <a href="#">删除</a>
                                    </td>
                                    </tr>`
                }
                var reg = /{hh}/;
                var new_data = da.replace(reg, html);
                res.end(new_data);
            }
        })
    }
}