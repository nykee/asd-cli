// git包
const downLoad = require('download-git-repo');
// 动画
const ora = require('ora');

const symbol =require('log-symbols');

const cp = require('child_process');

const  path = require("path");

const  process = require("process");


let clone = false;

let downGit = (name,type) => {
    // console.log("name:"+name);
    let url = null;
    if(type ==='vue2.0'){
        url='nykee/vue-template'
    }else if(type ==='vue3.0jsx'){
        url='nykee/Vue3.0Jsx'
    }else if(type==='react'){
        url='nykee/antd-template'
    }
    // let url= (type ==="vue")?"nykee/vue-template":"nykee/antd-template";
    let spinner = ora('正在拉取模板...');
    spinner.start();
    downLoad(url, name, {
        clone
    }, err => {

        if(err){
            console.log(symbol.error,err);
            spinner.stop();
            process.exit(1);
        }
        else {
            spinner.stop();
            // console.log(symbol.success,"开始安装依赖...");
            // let spinner2 = ora('开始安装依赖...');
            // let  url = path.resolve('./')+"/"+name;
            // cp.exec('yarn',{cwd:url}, (error, stdout, stderr) => {
            //     if (error) {
            //         console.log(symbol.success,"依赖安装失败");
            //     } else {
            //         console.log(symbol.success,"依赖安装成功");
            //
            //     }
            //     spinner2.stop();
            //     console.log(stdout);
                console.log(symbol.success,"项目创建成功");
                process.exit(1);


            // });
            console.log(symbol.success,"项目创建成功");
            process.exit(1);

        }

    })

};
module.exports = downGit;