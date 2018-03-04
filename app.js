// 引入系统资源
const fs = require("fs");
const express = require("express");
const art = require("art-template");

// 引入个人资源
const md = require("./md");

// 模块初始化
const app = express();

// 开放资源
app.use("/", express.static("./"));
app.use("/node_modules", express.static("./node_modules/"));
app.use("/css", express.static("./public/css/"));
app.use("/js", express.static("./public/js/"));
app.use("/fonticon", express.static("./public/fonticon/"));
app.use("/img", express.static("./public/img/"));

// 请求处理
app.get("/", (req, res) => {
    fs.readFile("./views/index.html", (err, data) => {
        if (err) {
            throw err;
        }        
        data = data.toString();
        let mainHtml = art.render(data, {
            centent: md.mains,
            list: md.lists
        });
        res.end(mainHtml);
    });
    
});

// 启动服务
app.listen(3000, () => {
    console.log('Server...'); 
});
