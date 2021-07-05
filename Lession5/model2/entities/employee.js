

class employee {
    constructor(name, taskList) {
        this.name = name;
        this.taskList = taskList;
    }

    get getName() {
        return this.name;
    }
    set setName(newName) {
        this.name = newName;
    }

    get getTaskList() {
        return this.taskList;
    }
    set setTaskList(newTaskList) {
        this.taskList = newTaskList;
    }

    displayInfo() {
        console.log(this.displayInfo);
    }

    addEmployee(e) {
        console.log(this.addEmployee(e));
    }
}

export default employee;