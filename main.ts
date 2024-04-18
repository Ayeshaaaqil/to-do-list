#! usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk"


let todoList: string[] = [];
let conditions = true;
//print message
console.log(chalk.blue.bold(" Welcome to to do list"));

let main = async () => {
while (conditions) {
    let option = await inquirer.prompt([
        {
            name: "choice",
            type: "list",
            message: "select an option you want to do",
            choices:["Add Task", "Delete Task", "Update Task", "view todo-List", "Exit"],
        }
    ]);
    if(option.choice === "Add Task"){
        await addTask()
    }
    else if (option.choice === "Delete Task"){
        await deleteTask()
    }
    else if (option.choice === "Update Task"){
        await updateTask()
    }
    else if(option.choice === "view todo-List"){
        await viewTask()
    }
    else if(option.choice === "Exit"){
        conditions = false;
    }
  }
}
let addTask = async() =>{
    let newTask = await inquirer.prompt([
{
    name:"task",
    type:"input",
    message:"enter your new task:"
}
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfullyin Todo-List`);
}
//function toview all to do list tasks
let viewTask =() =>{
    console.log("\n your to do list:\n");
    todoList.forEach ((task,index)=>{
        console.log(`${index +1}: ${task}`)
    });
}
//function to delete a task from the list
let deleteTask =async () =>{
    await viewTask()
    let taskIndex = await inquirer.prompt([
        {
            name:"index",
            type: "number",
            message: "Enter the `index no.`of the task you want to delete:"
        }
    ]);
    let DeleteTask = todoList.splice(taskIndex.index - 1);
console.log(`\n ${deleteTask} this task has been deleted successfully from the list\n`)

        //function to update a task
        let updateTask = async () => {
            await viewTask()
            let update_task_index = await inquirer.prompt([
                {
                    name:"index",
                    type:"number",
                    message:"Enter the `index no`of the task you want to update:"
                },
                {
                    name:"new_task",
                    type:"input",
                    message:"Now enter a new_task name:",

                }
            ]);
            todoList[update_task_index.index -1] = update_task_index.new_task
            console.log(`\n ${update_task_index.index -1}updated successfully [for update list check option :
                "View Todo-List]`);
        }

}
main();

function updateTask() {
    throw new Error("Function not implemented.");
}

