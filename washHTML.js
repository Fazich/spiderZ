var cheerio = require('cheerio');
var writeFile = require('./writeFile');

exports.getDate = function(body){
    var $ = cheerio.load(body);
    //获取表格中每一行的数据
    var trs = $('tr[bgcolor]');
    if(trs.length == 0){
        console.error('页面加载错误!');
        return
    }
    getEachInfo(trs,$);
}

function getEachInfo(trs,$){
    for(var i = 0;i<trs.length;i++){
        var td = trs.eq(i).find('td');
        var result = [];
        td.each(function(i,e){
            if(i<=7){
                result.push($(this).text().trim().replace(/document.write\(ReplaceChar1\(ReplaceChar\(ReplaceJiankuohao\(\'|\'\)\)\)\)|;/g,""))
            }
        })
        writeFile.writeFile(result);
    }
}

