import Employee from "./Employee.js";

class Works extends Employee {
    constructor(name, age, gender, address, level) {
        super(name, age, gender, address);
        this.level = level;
    }

    get getLevel() {
        return this.level;
    }
    set setLevel(newLevel) {
        this.level = newLevel;
    }

    checkTimekeeping() {
        const hour = new Date().getHours();
        const minutes = new Date().getMinutes();
        if (
            hour >= 22 && hour <= 6 ||
            hour === 22 && minutes === 0 ||
            hour === 6 && minutes === 0
        ) {
            super.checkTimekeeping();
            return true;
        }
        console.log("không phải giờ chấm công")
        return false
    }

    checkWorkingDay() {
        const dayInWeek = new Date().getDay();
        if (dayInWeek >= 1 && dayInWeek <= 7) {
            console.log("đi làm cả tuần")
            return;
        }
    }
}

export default Works;