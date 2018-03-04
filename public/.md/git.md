![image](/img/git.jpg)
## 1:开始使用
- 1.1 安装GIT
- 1.2 初始化GIT
    + `#cd 项目目录`     进入项目目录 
    + `#git init`     初始化GIT （会创建隐藏目录‘.git’）
- 1.3 推送到github
    + `#git add [-A|具体文件]`    加入缓存['-A'所有改变的文件，可换成具体文件]
    + `#git commit -m'说明'`  设置本次推送说明
    + `#git remote add origin [https://github.com/[用户名]/[项目名].git|其它提交地址]`     设置推送默认地址[可以更换为其它推送到的地址]
    + `#git push -u origin master`     推送。到[origin/master]分支(默认origin/master即可)             

## 2:日常使用
- 2.1 提交数据
    + `git status` 查看本地已修改的文件
    + `#git add [-A|具体文件]`  加入缓存
    + `#git commit -m'说明'`  设置本次推送说明
    + `#git push`   推送
- 2.2 拉取数据
    + `#git pull`   拉取          

## 3:所有命令