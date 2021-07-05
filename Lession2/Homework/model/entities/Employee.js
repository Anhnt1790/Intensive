class Employee {
    constructor(name, age, gender, address) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
    }

    get getName() {
        return this.name;
    }
    set setName(newName) {
        this.setName = newName;
    }

    get getAge() {
        return this.age;
    }
    set setAge(newAge) {
        this.age = newAge;
    }

    get getGender() {
        return this.gender;
    }
    set setGender(newGender) {
        this.gender = newGender;
    }

    get getAddress() {
        return this.address;
    }
    set setAddress(newAddress) {
        this.address = newAddress;
    }

    checkTimekeeping() {
        console.log("Chấm công")
    }

    checkWorkingDay() {
        console.log("Ngày đi làm")
    }
}

export default Employee;