const inquirer = require('inquirer');
let optionsArr = [{
    type: 'list',
    name: "type",
    message: "请选择你想创建的模板类型",
    choices: [
        "vue2.0",
        "vue3.0jsx",
        "react"
    ],
    default: 'vue2.0'
}];

module.exports = () => {
    return new Promise((resolve)=>{
        inquirer
            .prompt(optionsArr).then(answers=>{
            resolve(answers);
        })
    });
};