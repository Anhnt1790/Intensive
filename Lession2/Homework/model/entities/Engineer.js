import Employee from "./Employee.js";

class Engineer extends Employee {
    constructor(name, age, gender, address, branch) {
        super(name, age, gender, address);
        this.branch = branch;
    }

    get getBranch() {
        return this.branch;
    }
    set setBranch(newBranch){
        this.branch = newBranch;
    }

    checkTimekeeping() {
        const hour = new Date().getHours();
        const minutes = new Date().getMinutes();
        if(
            hour > 9 && hour < 18 ||
            hour === 9 && minutes === 0 ||
            hour === 18 && minutes === 0
        ) {
            super.checkTimekeeping();
            return true;
        }
        console.log("không phải giờ chấm công")
        return false
    }

    checkWorkingDay() {
        const dayInWeek = new Date().getDay();
        if(dayInWeek > 1 && dayInWeek <= 5) {
            console.log("đi làm từ thứ 2 => thứ 6");
            return;
        }
        console.log("thứ 7 và chủ nhật không phải đi làm");
        return;
    }
}
export default Engineer;
