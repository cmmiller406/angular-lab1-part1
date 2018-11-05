"use strict";

function TodoController () {
    const vm = this;
    vm.tasks = [
        {name: "Walk the dog", completed: false},
        {name: "Go to the store", completed: true},
        {name: "Get gas", completed: false},
        {name: "Wash the car", completed: false},
    ];

    vm.addTask = (newTask) => {
        vm.tasks.push(angular.copy(newTask));
        vm.task.name = ``;
    };

    vm.removeTask = (task) => {
        vm.tasks.splice(vm.tasks.indexOf(task), 1);
    }

    vm.completeTask = (task) => {
        task.completed = true;
    }
};




angular
    .module("todoApp")
    .controller("TodoController", TodoController); 