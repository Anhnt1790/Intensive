import Employee from "./Employee.js";

class Staff extends Employee {
    constructor(name, age, gender, address, task) {
        super(name, age, gender, address);
        this.task = task;
    }

    get getTask() {
        return this.task;
    }
    set setTask(newTask) {
        this.task = newTask;
    }

    checkTimekeeping() {
        const hour = new Date().getHours();
        const minutes = new Date().getMinutes();
        if (
            (hour > 8 && hour < 18) ||
            (hour === 8 && minutes >= 30) ||
            (hour === 18 && minutes < 30)
            ) {
            super.checkTimekeeping();
            return true
        }
        console.log("Không phải giờ chấm công")
        return false
    }

    checkWorkingDay() {
        const dayInWeek = new Date().getDay();
        if(dayInWeek >= 1 && dayInWeek <= 6){
            console.log("đi làm từ 2 => 7");
            return;
        }
        console.log("chủ nhật không phải đi làm");
        return;
    }
}

export default Staff;