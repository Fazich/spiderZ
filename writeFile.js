var fs = require('fs');
var config = require('./config')

exports.writeFile = function(content){
    var input = content.join(",")+"\n";
    fs.appendFileSync(config.fileName+'.csv', input);
}

exports.createFile = function(){
    var headContent = "序号,题名,作者,来源,发表时间,数据库,被引,下载"+'\n';
    fs.exists(config.fileName+'.csv', function (exists) {
        if(!exists){
            console.log('文件不存在，开始创建文件')
            fs.writeFile(config.fileName+'.csv', headContent, {encoding: 'utf8'}, function (err) {
                if(err) {
                    console.error(err);
                }
                console.log('创建完成')
            });
        }
        console.log('文件存在，准备写入');
    });
}
