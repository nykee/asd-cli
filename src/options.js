const inquirer = require('inquirer');
let optionsArr = [{
    type: 'list',
    name: "type",
    message: "请选择你想创建的模板类型(vue or react)",
    choices: [
        "vue",
        "react"
    ],
    default: 'vue'
}];

module.exports = () => {
    return new Promise((resolve)=>{
        inquirer
            .prompt(optionsArr).then(answers=>{
            resolve(answers);
        })
    });
};