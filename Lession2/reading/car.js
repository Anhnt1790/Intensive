class Car {
    constructor(tenXe, banhXe, dongCo){
        this.tenXe = tenXe;
        this.banhXe = banhXe;
        this.dongCo = dongCo;
    }

    get getTenXe() {
        return this.tenXe;
    }

    set setTenXe(newName) {
        this.tenXe = newName
    }

    get getBanhXe() {
        return this.banhXe;
    }

    set setBanhXe(newBanhXe) {
        this.banhXe = newBanhXe;
    }

    get getDongCo() {
        return this.dongCo;
    }

    set setDongCo(newDongCo){
        this.dongCo = newDongCo;
    }

    get getCode() {
        return this.code;
    }

    set setCode(newCode) {
        this.code = newCode;
    }
    chayXe() {
        console.log('Run....');
    }
}

// const audi = new Car ("Audi", "60cm", "1.5l");
// const nissan = new Car ("Nissan", "60cm", "1.5l");
// const mec = new Car ("Mec", "60cm", "1.5l");

// console.log(audi);
// console.log(nissan);
// console.log(mec);
// audi.chayXe();


// Tính kế thừa
class audi extends Car {
    constructor(tenXe, banhXe, dongCo, code){
        super(tenXe, banhXe, dongCo);
        this.code = code;
    }

    chayXe() {
        // super.chayXe();
        console.log("Audi chay")
    }
}

class toyota extends Car {
    constructor(tenXe, banhXe, dongCo, code){
        super(tenXe, banhXe, dongCo);
        this.code = code;
    }

    chayXe() {
        // super.chayXe();
        console.log("toyota run")
    }
}
// Tính đóng gói
const glc300 = new audi("GLC 300", "65cm", "2.5l", "glc-300");
const vios = new toyota("toyota vios", "65cm", "2.5l", "vios");
// glc300.setTenXe = "GLC-300";
// glc300.setBanhXe = "70cm";
// glc300.setDongCo = "3.0l";
// glc300.setCode = "glc-400"
// console.log(glc300.getTenXe);
// console.log(glc300.getBanhXe);
// console.log(glc300.getDongCo);
// console.log(glc300.getCode);

// Tính đa hình
glc300.chayXe();
vios.chayXe();

export default Car;