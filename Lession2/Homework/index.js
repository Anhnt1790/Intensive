import Engineer from "./model/entities/Engineer.js";
import Staff from "./model/entities/staff.js";
import Works from "./model/entities/Works.js";

const tuanAnhChamCong = new Staff("TuanAnh", 31, "Male", "HN", "Cong nhan");
console.log(tuanAnhChamCong);

tuanAnhChamCong.checkTimekeeping();
tuanAnhChamCong.checkWorkingDay();

const tuanAnhChamCong2 = new Engineer("TuanAnh2", 32, "Male", "HN", "Engineer");
console.log(tuanAnhChamCong2);

tuanAnhChamCong2.checkTimekeeping();
tuanAnhChamCong2.checkWorkingDay();

const tuanAnhChamCong3 = new Works("TuanAnh3", 33, "Male", "HN", "Works");
console.log(tuanAnhChamCong3);

tuanAnhChamCong3.checkTimekeeping();
tuanAnhChamCong3.checkWorkingDay();

