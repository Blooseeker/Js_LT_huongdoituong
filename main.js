// 34.1 JavaScript Objects - Cơ Bản về Objects JS, Lập trình hướng đối tượng JS, Literal syntax JS
// https://www.youtube.com/watch?v=Bl81UtlV0s0

// Khai báo đối tượng
let student = {
  // key + value
  // thuộc tính
  fullName: "Trần Như Nhộng",
  birthYear: 2005,
  address: {
    city: "Hà Nội",
    country: "Việt Nam",
  },
  score: [8, 9, 10],
  // phương thức
  getAge: function () {
    return 2024 - this.birthYear;
  },

  // phương thức viết lại bên trên
  getAge2: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },

  //   phương thức điểm trung bình
  diemTB: function () {
    // tính tổng điểm
    sumScores = this.score.reduce((a, b) => a + b, 0);
    // trả về điểm tb
    return sumScores / 3;
  },
};

let teacher = {
  "1 nameTeach": "Cô Mai",
  "@monHoc": {
    mon1: "Tiếng Anh",
    mon2: "Lịch Sử",
  },
};

let dota2 = {
  // key + value
  // thuộc tính
  nameTuong: "Bloodseeker",
  chatTuong: "Carry",
  thuocTinh: [42, 45, 89],
  skill: {
    skill1: "Búp Tay To",
    skill2: "Khóa Mõm",
    skill3: "Ngửi Máu",
    skill4: "Tháo Van Tim",
  },
};
//  kiểm tra kiểu loại
console.log(typeof student);

//  Cách 1 sử dụng (.) dot notation
console.log(student.fullName);
console.log(student.address);
console.log(student.score);
console.log(dota2.nameTuong);
console.log(dota2.skill);

//  cách 2 ["  "] bracket Notation để lấy key đặc biệt
console.log(teacher["1 nameTeach"]);
console.log(teacher["@monHoc"]);
console.log(student["fullName"]);
console.log(dota2["chatTuong"]);

// Linh động sử dụng [] với biến
// let inputKey = prompt("Mời nhập key: (address, score )");
let inputKey = "address";
console.log("Truy xuất đến key dùng với tên biến inputKey: ");
// console.log(student[inputKey]);
// ví dụ nếu key ko tồn tại thì báo lỗi
if (student[inputKey]) {
  console.log(student[inputKey]);
} else {
  console.log("Key ko tồn tại");
  alert("Key ko tồn tại");
}

//  truy cập phương thức
console.log("Truy cập phương thức");
console.log(student.getAge());
console.log(student.diemTB());

//  trong trường hợp gọi nhiều lần hàm getAge
// CT sẽ gọi đi gọi lại mất nhiều lần tính toán
// console.log(student.getAge());
// console.log(student.getAge());
// console.log(student.getAge());
// console.log(student.getAge());

// gọi phương thức getage2
student.getAge2();

//  xuất tuổi thông qua thuộc tính mới vừa thêm vào studen
console.log(student.age); // bắt buộc phải gọi ra ở ngay trên

// 34.4 OOP JS - Thêm, sửa, xóa thuộc tính trong đối tượng
// https://www.youtube.com/watch?v=NzxK4ZxTvLA
student.email = "Học hành vất vả đổi lại thành công";
student["website"] = "http://tuhoc.cc";

//  Xuất đối tượng mới thêm vào student
console.log(student.email);
console.log(student.website);

// xóa thuộc tính thêm từ delete vào trước
delete student.email;
console.log(student); // đã mất thuộc tính email

// sửa thuộc tính
student.website = "Giá trị đã bị sửa";
console.log(student);
