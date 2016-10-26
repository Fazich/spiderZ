var request = require('request');
var config = require('./config');
var washHTML = require('./washHTML');
var writeFile = require('./writeFile');
var lib = require('./lib');
var async = require('async');
writeFile.createFile();



config.options.url = lib.changeURLPar(config.options.url,'curpage',1)

var spider = {
    init:function(){
        this.startPage = config.startPage;
        this.endPage = config.endPage;
        this.intervalTime = config.intervalTime;
        this.totalPages = [];
        this.initTotalPages();
    },
    asyncLimit:function(){
        var self = this;
        async.mapLimit(self.totalPages,config.asyncLimit,function(option,callback){
            self.getHtml(config,callback);
        },function(err){
            console.log(err);
        })


    },
    initTotalPages:function(){
        for(var i = this.startPage;i<=this.endPage+1;i++){
            this.totalPages.push(i);
        }
        this.asyncLimit();
    },
    getHtml:function(option,callback){
        var page = this.totalPages.shift();
        if(page == this.endPage){
            console.log('爬取完成');
            return false
        }
        config.options.url = lib.changeURLPar(config.options.url,'curpage',page);
        request(config.options,function(err,response, body){
            console.log('正在爬取第'+page+'页');
            if(err){
                console.log(err);
                console.log('爬取第'+page+'页出错')
            }
            washHTML.getDate(body);
            setTimeout(function(){
                console.log('第'+page+'页已完成,人工延迟:'+config.delay+'毫秒');
                callback();
            },config.delay);
        })
    }
}

spider.init();

