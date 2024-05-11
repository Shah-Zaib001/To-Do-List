#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    // async function createTodo(todos : string[]){
    let ans = await inquirer.prompt({
        type: "list",
        message: "select an operation",
        name: "select",
        choices: ["Add", "Update", "View", "Delete", "Exit"],
    });
    if (ans.select == "Add") {
        let addTodo = await inquirer.prompt({
            type: "input",
            message: "Add items in the list",
            name: "todo",
            validate: function (input) {
                if (input.trim() == "") {
                    return "Please Enter a Non-Empty item,";
                }
                return true;
            }
        });
        todos.push(addTodo.todo);
        todos.forEach(todo => console.log(todo));
        // console.log(todos);
    }
    if (ans.select == "Update") {
        let updateTodo = await inquirer.prompt({
            type: "list",
            message: "update items in the list",
            name: "todo",
            choices: todos.map(item => item)
        });
        let addTodo = await inquirer.prompt({
            type: "input",
            message: "Add items in the list",
            name: "todo",
        });
        let newTodo = todos.filter(val => val !== updateTodo.todo);
        todos = [...newTodo, addTodo.todo];
        todos.forEach(todo => console.log(todo));
        // console.log(todos);   
    }
    if (ans.select == "View") {
        console.log("***TO DO LIST***");
        // console.log(todos);
        console.log("****************");
        todos.forEach(todo => console.log(todo));
    }
    if (ans.select == "Delete") {
        let deleteTodo = await inquirer.prompt({
            type: "list",
            message: "delete items from the list",
            name: "todo",
            choices: todos.map(item => item)
        });
        let newTodo = todos.filter(val => val !== deleteTodo.todo);
        todos = [...newTodo];
        todos.forEach(todo => console.log(todo));
        // console.log(todos);
    }
    ;
    if (ans.select == "Exit") {
        let addTodo = await inquirer.prompt;
        console.log("Exiting the to-do list. Goodbye!");
        condition = false;
    }
}
;
