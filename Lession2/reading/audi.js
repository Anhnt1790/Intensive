import Car from "./model2/car"
class audi extends Car {
    constructor(tenXe, banhXe, dongCo, code){
        super(tenXe, banhXe, dongCo);
        this.code = code;
    }

    chayXe() {
        super.chayXe();
        console.log("Ahii")
    }
}

const glc300 = new audi("GLC 300", "65cm", "2.5l", "glc-300");
glc300.chayXe();

export default audi;