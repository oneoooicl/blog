// 引入系统资源
var fs = require("fs");
var express = require("express");
var art = require("art-template");

// 引入个人资源
var md = require("./md");

// 模块初始化
var app = express();

// 开放资源
app.use("/", express.static("./"));
app.use("/node_modules", express.static("./node_modules/"));
app.use("/css", express.static("./public/css/"));
app.use("/js", express.static("./public/js/"));
app.use("/fonticon", express.static("./public/fonticon/"));

// 请求处理
app.get("/", (req, res) => {
    fs.readFile("./views/index.html", (err, data) => {
        if (err) {
            throw err;
        }        
        data = data.toString();
        var mainHtml = art.render(data, {
            centent: md.mains,
            list: md.lists
        });
        res.end(mainHtml);
    });
    
});

// 启动服务
app.listen(3300, () => {
    console.log('Server...'); 
});
