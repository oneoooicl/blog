const fs = require('fs');
const marked = require('marked');
const cheerio = require('cheerio');
const he = require('he');

fs.readFile('./public/.md/git.md', (err, data) => {
    let list = '';

    if (err) {
        throw err;
    }
    // Md 转换为 html
    let ds = marked(data.toString());
    // 转换DOM
    let $ = cheerio.load(ds);
    // 
    for (let i = 0; i < $('body').children('h2').length; i++) {
        let doms = $('h2').eq(i);

        // 设置name
        doms.attr('name', 'txt' + (i + 1) + '');

        // 读取列表
        list += '<el-submenu index="' + (i + 1) + '"><template slot = "title" ><span>' + doms.html() + '</span></template >';

        if (doms.next().is('ul')) {
            for (let j = 0; j < doms.next().children('li').length; j++) {

                // 设置name
                doms.next().children('li').eq(j).attr('name', 'txt' + (i + 1) + '.' + (j + 1) + '');
                
                // 读取列表
                let $_dom = cheerio.load(doms.next().children('li').eq(j).html());
                $_dom("ul").remove();
                list += '<el-menu-item index="' + (i + 1) + '.' + (j + 1) + '"><a href="#txt' + (i + 1) + '.' + (j + 1) + '"> - ' + $_dom("body").html() + '</a></el-menu-item>';      
            }
        }

        // 读取列表
        list += "</el-submenu>";
    }

    exports.mains = he.decode($.html());
    exports.lists = he.decode(list);

});