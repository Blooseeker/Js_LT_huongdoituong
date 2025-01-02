// 34.1 JavaScript Objects - Cơ Bản về Objects JS, Lập trình hướng đối tượng JS, Literal syntax JS
// https://www.youtube.com/watch?v=Bl81UtlV0s0

// Khai báo đối tượng
// let student = {
//   // key + value
//   // thuộc tính
//   fullName: "Trần Như Nhộng",
//   birthYear: 2005,
//   address: {
//     city: "Hà Nội",
//     country: "Việt Nam",
//   },
//   score: [8, 9, 10],
//   // phương thức
//   getAge: function () {
//     return 2024 - this.birthYear;
//   },

//   // phương thức viết lại bên trên
//   getAge2: function () {
//     this.age = 2024 - this.birthYear;
//     return this.age;
//   },

//   //   phương thức điểm trung bình
//   diemTB: function () {
//     // tính tổng điểm
//     sumScores = this.score.reduce((a, b) => a + b, 0);
//     // trả về điểm tb
//     return sumScores / 3;
//   },
// };

// let teacher = {
//   "1 nameTeach": "Cô Mai",
//   "@monHoc": {
//     mon1: "Tiếng Anh",
//     mon2: "Lịch Sử",
//   },
// };

// let dota2 = {
//   // key + value
//   // thuộc tính
//   nameTuong: "Bloodseeker",
//   chatTuong: "Carry",
//   thuocTinh: [42, 45, 89],
//   skill: {
//     skill1: "Búp Tay To",
//     skill2: "Khóa Mõm",
//     skill3: "Ngửi Máu",
//     skill4: "Tháo Van Tim",
//   },
// };
// //  kiểm tra kiểu loại
// console.log(typeof student);

// //  Cách 1 sử dụng (.) dot notation
// console.log(student.fullName);
// console.log(student.address);
// console.log(student.score);
// console.log(dota2.nameTuong);
// console.log(dota2.skill);

// //  cách 2 ["  "] bracket Notation để lấy key đặc biệt
// console.log(teacher["1 nameTeach"]);
// console.log(teacher["@monHoc"]);
// console.log(student["fullName"]);
// console.log(dota2["chatTuong"]);

// // Linh động sử dụng [] với biến
// // let inputKey = prompt("Mời nhập key: (address, score )");
// let inputKey = "address";
// console.log("Truy xuất đến key dùng với tên biến inputKey: ");
// // console.log(student[inputKey]);
// // ví dụ nếu key ko tồn tại thì báo lỗi
// if (student[inputKey]) {
//   console.log(student[inputKey]);
// } else {
//   console.log("Key ko tồn tại");
//   alert("Key ko tồn tại");
// }

// //  truy cập phương thức
// console.log("Truy cập phương thức");
// console.log(student.getAge());
// console.log(student.diemTB());

// //  trong trường hợp gọi nhiều lần hàm getAge
// // CT sẽ gọi đi gọi lại mất nhiều lần tính toán
// // console.log(student.getAge());
// // console.log(student.getAge());
// // console.log(student.getAge());
// // console.log(student.getAge());

// // gọi phương thức getage2
// student.getAge2();

// //  xuất tuổi thông qua thuộc tính mới vừa thêm vào studen
// console.log(student.age); // bắt buộc phải gọi ra ở ngay trên

// // 34.4 OOP JS - Thêm, sửa, xóa thuộc tính trong đối tượng
// // https://www.youtube.com/watch?v=NzxK4ZxTvLA
// student.email = "Học hành vất vả đổi lại thành công";
// student["website"] = "http://tuhoc.cc";

// //  Xuất đối tượng mới thêm vào student
// console.log(student.email);
// console.log(student.website);

// // xóa thuộc tính thêm từ delete vào trước
// delete student.email;
// console.log(student); // đã mất thuộc tính email

// // sửa thuộc tính
// student.website = "Giá trị đã bị sửa";
// console.log(student);

// 34.5 Object JS methods - Các phương thức sẵn có trong JS phần 1
// https://www.youtube.com/watch?v=h_thLkmMTko
// phương thức trả về ảng chứa các keys của đối tượng
// let person = { name: "John", age: 30 };
// let keys = Object.keys(person);
// console.log(keys); //Kết quả: ['name', 'age']

// //  Phương thức này trả về mảng chứa value object.values(obj)
// let person2 = { name: "John", age: 30 };
// let values = Object.values(person2);
// console.log(values); // Kết quả:['John', 30]

// // Phương thức 3 trả về cả keys và value
// let person3 = { name: "John", age: 30 };
// let entries = Object.entries(person3);
// console.log(entries);

// // Object.assign(target, source)
// let target = { c: 100 };
// let source1 = { a: 1 };
// let source2 = { b: 2 };
// Object.assign(target, source1, source2);
// console.log(target);
// let target2 = { ...source1, ...source2 }; // sao chép source1 và 2
// console.log(target2);

// // Object. hasOwnProperty(prop);
// // phương thức này kiểm tra xem đối tượng có một thuộc tính
// // nào đó hay ko và trả về true nếu có.
// let person4 = { name: "John", age: 30 };
// console.log(person4.hasOwnProperty("name")); // true
// console.log(person4.hasOwnProperty("job")); // false

// // phương thức đóng băng đối tượng ko thể thêm xóa sửa
// // Object.freeze(obj)
// let person5 = { name: "John", age: 30 };
// Object.freeze(person5); // đóng băng person5
// person5.age = 100; // thay đổi nhưng k đổi được
// console.log(person5);

// // Object.seal(obj) Ngăn ko cho thêm và xóa chỉ cho sửa
// let person6 = { name: "John", age: 30 };
// Object.seal(person6);
// // thêm thuộc tính ko được
// person6.location = "Việt Nam";
// // xóa thuộc tính ko được
// delete person6.age;
// // sửa thuộc tính được
// person6.age = 100;
// console.log(person6);

// 34.7 Tại sao bạn nên sử dụng 'const' thay vì 'let'
// https://www.youtube.com/watch?v=dukI-JrRwE4
// ôn tập khai báo
// var a = 5;
// console.log(a);
// // đối với var có thể tái khai báo
// var a = 9;
// console.log(a);

// đối với let ko cho phép tái khai báo (lỗi)
// let a = 5;
// console.log(a);
// let a = 9;
// console.log(a);

// 1.Var cho phép tái định nghĩa còn let thì ko
// let a = 5;
// console.log(a);

// a = 9;
// console.log(a);
// // const khai báo hằng số thì ko thay đổi được
// const doSoi = 100;
// doSoi = 50;
// console.log(doSoi); // báo lỗi

// Khai báo đối tượng sử dụng let
// let person = {
//   name: "Đức Anh",
//   age: 28,
// };
// console.log(person);

// // thay đổi giá trị của person vẫn có thể gán giá trị mới
// person = 5;
// console.log(person);

// //  để tránh trường hợp bị gán giá trị mới ở trên
// // khai báo bằng const thì ko thể gán lại giá trị mới cho person
// const person2 = {
//   name: "Đức Anh",
//   age: 28,
// };
// console.log(person2);
// // thử thay đổi giá trị của person2
// // person2 = 5;
// console.log(person2); // báo lỗi ngay

// //  và tất nhiên vẫn có thể thêm sửa xóa thuộc tính bình thường
// // chỉ là ko ghi đè được
// person2.isAdmin = true; // thêm thuộc tính cho person2
// person2.name = "Tom"; // sửa thuộc tính
// delete person2.age; // xóa thuộc tính

// console.log(person2);

// 34.8 JavaScript Function Constructor - Hàm Tạo và Constructor
// https://www.youtube.com/watch?v=xNPuKqE8cks
// Quay trở lại bài toán sinh viên, các sinh viên đều có các điểm chung

// const student = {
//   // thuộc tính
//   fullName: "Phan Mạnh Quỳnh",
//   birthYear: 2005,
//   address: {
//     city: "Nghệ An",
//     country: "Việt Nam",
//   },
//   scores: [8, 9, 9],
//   //phương thức
//   getAge: function () {
//     return 2024 - this.birthYear;
//   },
//   diemTrungBinh: function () {
//     // tính tổng điểm
//     sumScore = this.scores.reduce((a, b) => a + b, 0);
//     return sumScore / 3;
//   },
// };

// // 2. Function() constructor : hàm tạo sử dụng khuôn mẫu
// // Viết hoa chữ cái đầu để phân biệt với các hàm thông thường
// // Cách 1 function expresstion (ít dùng)

// const SinhVien = function (fullName, ID, birthYear, homeTown) {
//   // thuộc tính
//   this.fullName = fullName;
//   this.ID = ID;
//   this.birthYear = birthYear;
//   this.homeTown = homeTown;

//   // //phương thức
//   this.showInfor = function () {
//     return `${this.fullName} ${this.ID} ${this.homeTown}`;
//   };
// };

// // Cách 2 dùng function declaration (hay dùng hơn)
// function Student(fullName, ID, birthYear, homeTown) {
//   // thuộc tính
//   this.fullName = fullName;
//   this.ID = ID;
//   this.birthYear = birthYear;
//   this.homeTown = homeTown;

//   // //phương thức
//   this.showInfor = function () {
//     return `${this.fullName} ${this.ID} ${this.birthYear} ${this.homeTown}`;
//   };
// }

// // Tạo ra các đối tượng cụ thể
// const sv1 = new Student("Phan Mạnh Quỳnh", 2024001, 2005, "Nghệ An");
// const sv2 = new Student("Hồ Văn Quán", 2024002, 2004, "Hà Nội");

// // truy cập thuộc tính và phương thức đối tượng
// console.log(sv1.fullName);
// console.log(sv1["fullName"]);
// console.log(sv2.fullName);
// console.log(sv2.showInfor());

// // sv1 và sv2 có thể gọi là các đối tượng cụ thể
// let abs = 1;
// console.log("Kiểm chứng instance");
// console.log(sv1 instanceof Student); // true
// console.log(abs instanceof Student); // false

// //  thêm sửa xóa thuộc tính
// sv2.email = "tuhoc.cc"; // Thêm email tuhoc.cc
// sv2.fullName = "Đã sửa tên"; // sửa tên
// delete sv2.ID; // xóa tên
// console.log(sv2);

// 34.9 Prototype trong JavaScript - JavaScript Prototype Explained
// https://www.youtube.com/watch?v=jXlwZOIYloI
// Khai báo mảng
let M = new Array();
console.log(typeof M);
console.log(M);

// rõ ràng mảng M rỗng
// nhưng vì thừa kế các phương thức thuộc tính của cha
// nên chúng ta có thể sử dụng các thuộc tính
// và phương thức từ nguyên mẫu cha mẹ nó
// console.log(M.length);
// M.push(9);
// console.log(M);
// console.log(M.toString());

// // Cách 2 dùng function declaration (hay dùng hơn)
// function Student(fullName, ID, birthYear, homeTown) {
//   // thuộc tính
//   this.fullName = fullName;
//   this.ID = ID;
//   this.birthYear = birthYear;
//   this.homeTown = homeTown;

//   // //phương thức
//   this.showInfor = function () {
//     return `${this.fullName} ${this.ID} ${this.birthYear} ${this.homeTown}`;
//   };
// }

// // Tạo ra các đối tượng cụ thể
// const sv1 = new Student("Phan Mạnh Quỳnh", 2024001, 2005, "Nghệ An");
// const sv2 = new Student("Hồ Văn Quán", 2024002, 2004, "Hà Nội");

// 34.10 Khám phá sâu hơn về Prototype và OOP trong JavaScript phần 2
// https://www.youtube.com/watch?v=REvo1HZTpJM

// Cách 2 dùng function declaration (hay dùng hơn)
// function Student(fullName, ID, birthYear, homeTown) {
//   // thuộc tính
//   this.fullName = fullName;
//   this.ID = ID;
//   this.birthYear = birthYear;
//   this.homeTown = homeTown;

//   // //phương thức
//   this.showInfor = function () {
//     return `${this.fullName} ${this.ID} ${this.birthYear} ${this.homeTown}`;
//   };
// }

// // Tạo ra các đối tượng cụ thể
// const sv1 = new Student("Phan Mạnh Quỳnh", 2024001, 2005, "Nghệ An");
// const sv2 = new Student("Hồ Văn Quán", 2024002, 2004, "Hà Nội");
// console.log(sv1);

// // Có cách nào kiểm tra nguyên mẫu cha mẹ của đối tượng không?
// //4. Xem nguyên mẫu - cha mẹ cảu đối tượng sv1
// console.log("Kiểm tra nguyên mẫu của đối tượng sv1:");
// console.log(Object.getPrototypeOf(sv1));

// // Thêm phương thức vào Student.prototype

// Student.prototype.calcAge = function () {
//   console.log(2024 - this.birthYear);
// };
// console.log(sv1);
// sv1.calcAge();
// sv2.calcAge();

// // thêm thuộc tính vào student
// Student.prototype.email = "tuhoc.cc";
// // kiểm tra thuộc tính email vừa thêm
// console.log(sv1.email);
// console.log(sv2.email);

// // thực vậy nếu kiểm tra sv1 có trực tiếp chứu thuộc tính email
// //  thì là ko trực tiếp chứa nó chỉ kế thừa cha nó là Student
// console.log(sv1.hasOwnProperty("email")); // false
// console.log(sv1.hasOwnProperty("fullName")); // true
// console.log(sv1.hasOwnProperty("ID")); // true

//  34.11 Hiểu Rõ ES6 Classes - Learn JavaScript CLASSES
// https://www.youtube.com/watch?v=kdR3LRvD_7s
// Khai báo ES6 classes
// cách 1 classes expression (ít dùng hơn)
// const SinhVienEx = class {
//   // thêm các thuộc tính
//   // các phương thức
// };

// //  cách 2 classes decoration (thường dùng vì ngắn gọn)
// class SinhVien {
//   // constructor method (phương thức được JS xây dựng sẵn)
//   constructor(fullName, ID, birthYear, homeToww) {
//     // thuộc tính
//     this.fullName = fullName;
//     this.ID = ID;
//     this.birthYear = birthYear;
//     this.homeToww = homeToww;
//   }
//   // Các phương thức, khai báo trong thân class, khai báo ngoài constructor
//   // không cần function keyword
//   showInfor() {
//     return `${this.fullName} ${this.ID} ${this.birthYear} ${this.homeTown}`;
//   }

//   // Phương thức có tham số khai báo thêm trong class
//   calcAge(currentYear) {
//     return currentYear - this.birthYear;
//   }
// }

// // tạo đối tượng từ class
// const stu3 = new SinhVien("Thomas", 12345, 2000, "Hà Nội");
// const stu4 = new SinhVien("Cuộc Đời", 12645, 2001, "Đà Lạt");
// console.log(stu3);
// console.log(stu3.showInfor());

// // thêm phương thức vào class
// // SinhVien.prototype.calcAge = function (currentYear) {
// //   return currentYear - this.birthYear;
// // };
// console.log(stu3.calcAge(2025));
// console.log(stu3);

// console.log(stu4.calcAge(2025));

// 34.12 Instance Method và Static Method trong JS Hiểu rõ về Static method trong JS JS OOP Explained
// https://www.youtube.com/watch?v=Pjd5tLaQuv0

// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//   }

//   // instance method
//   draw() {
//     console.log("Phương thức Draw được gọi");
//   }
//   // static method
//   static calcArea(radius) {
//     return Math.PI * radius * radius;
//   }
// }

// // tạo đối tượng
// const c1 = new Circle(10);
// const c2 = new Circle(5);

// // console.log(c1.draw());
// // console.log(c2.draw());

// c1.draw();
// c2.draw();

// // gọi phương thức tĩnh
// console.log(Circle.calcArea(10));
// console.log(Circle.calcArea(5));

// // ví dụ dễ hiểu
// a = -10;
// console.log(Math.abs(a));

// 34.13 JavaScript ES6 - Học Kế thừa trong JavaScript ES6
// https://www.youtube.com/watch?v=aNndkRPxNaM
//  Định nghĩa lớp cơ sở School
// class School {
//   constructor(id, name, birthYear) {
//     this.id = id;
//     this.name = name;
//     this.birthYear = birthYear;
//   }

//   // Phương thức của lớp School
//   calcAge(currentYear) {
//     return currentYear - this.birthYear;
//   }
// }

// // lớp student kế thừa từ class school (có thêm thuộc tính và phương thức mới)
// class Student extends School {
//   constructor(id, name, birthYear, major) {
//     super(id, name, birthYear);
//     this.major = major;
//   }

//   // phương thức riêng của student
//   study() {
//     console.log(`${this.name} is studying ${this.major}`);
//   }
// }

// // Tạo đối tượng của school
// const p1 = new School("081196", "Đức Anh", 2000);
// // truy xuất thuộc tính và phương thức của class School
// console.log(p1.id);
// console.log(p1.birthYear);
// console.log(p1.calcAge(2025));

// //  Tạo đối tượng của sub class Student
// const s1 = new Student("00009", "Đức Em", 1999, "Kĩ Thuật Điện");
// // truy xuất thuộc tính và phương thức của class Student kế thừa từ School
// console.log(s1.id);
// console.log(s1.birthYear);
// console.log(s1.calcAge(2025));

// //truy cập thuộc tính và phương thức của Sub class student
// console.log(s1.major);
// s1.study();

// console.log(s1);

// 34.14 Giải bài tập js 34 - bài tập kế thừa
// https://www.youtube.com/watch?v=7GnqT2jkDrU
// class cha
// class Shape {
//   constructor(name) {
//     this.name = name;
//   }

//   // phương thức tính diện tích, mặc định return về 0
//   calculateArea() {
//     return 0;
//   }
// }

// // lớp con của shapee - Hình vuông
// class Square extends Shape {
//   constructor(name, side) {
//     super(name); // câu lệnh gọi lại thuộc tính "name" trong class cha
//     this.side = side;
//   }

//   // Ghi đè lại phương thức tính diện tích của lớp cha
//   calculateArea() {
//     return this.side * this.side;
//   }
// }

// // lớp con của class Shape - Hình chữ nhật
// class Rectangle extends Shape {
//   constructor(name, width, height) {
//     super(name); // câu lệnh gọi lại thuộc tính "name" trong class cha
//     this.width = width;
//     this.height = height;
//   }

//   // Ghi đè phương thức tính diện tích của lớp cha
//   calculateArea() {
//     return this.width * this.height;
//   }
// }

// // thêm diện tích hình tròn lớp con của class shape
// class Circle extends Shape {
//   constructor(name, R) {
//     super(name);
//     this.R = R;
//   }

//   //Ghi đè phương thức để tính diện tích hình tròn
//   calculateArea() {
//     return Math.PI * Math.pow(this.R, 2);
//   }
// }

// // tạo đối tượng hình
// const sq1 = new Square("Hình Vuông", 5);
// const rec1 = new Rectangle("Hình Chữ Nhật", 4, 6);
// const cr1 = new Circle("Hình Tròn", 4);

// // tính diện tích và in ra kết quả
// console.log(sq1.calculateArea());
// console.log(rec1.calculateArea());
// console.log(cr1.calculateArea());
// console.log(`Diện tích ${sq1.name} là: ${sq1.calculateArea()}`);
// console.log(`Diện tích ${rec1.name} là: ${rec1.calculateArea()}`);
// console.log(`Diện tích ${cr1.name} là: ${cr1.calculateArea()}`);

// 34.15 Getter and Setter JavaScript
// https://www.youtube.com/watch?v=LYHHKP4SKUA

// class School {
//   constructor(id, name, birthYear, score) {
//     this.id = id;
//     this.name = name;
//     this.birthYear = birthYear;
//     this._score = score;
//     // thêm dấu _ vào trước tên thuộc tính để thể hiện nó ở trạng thái Protected
//     // và ko nên truy cập thuôc tính từ bên ngoài cố tình vẫn được
//     //  đây là quy ước ngầm giữa các lập trình viên
//   }

//   // Phương thức
//   calcAge(currentYear) {
//     return currentYear - this.birthYear;
//   }

//   // phương thức trung gian để xem "Get"
//   get score() {
//     return this._score;
//   }

//   //  Phương thức để thay đổi thuộc tính "Set"
//   set score(value) {
//     // thêm biểu thức logic để kiểm tra
//     if (value >= 0 && value <= 100) {
//       this._score = value;
//     } else {
//       console.log("Điểm số không hợp lệ");
//     }
//   }
// }

// // Tọa đối tượng
// const john = new School(12345, "Jonh", 2001, 95);
// console.log(john.id);
// console.log(john.birthYear);
// console.log(john.name);
// console.log(john._score); // ko nên truy cập trực tiếp
// console.log(john.calcAge(2025));

// // sử dụng getter
// console.log(john.score);
// // dùng setter
// john.score = 99; // thử thay đổi sang 99 trong setter
// console.log(john.score); // thay thành 99

// 34.16 Tính Đóng Gói Trong JavaScript p1
// https://www.youtube.com/watch?v=ZW6NulCeQG0
// các khái niệm
// Public fields : Trường công khai, Trường công cộng
// Private fields: Trường riêng tư
// Public method: Phương thức công khai
// Private method: Phương thức riêng tư

class Wallet {
  constructor(bankName, pin) {
    this.bankName = bankName;
    this.pin = pin;
    this.balance = 0; // Tài khoản bằng không lúc tạo thẻ
  }

  // Phương thức gửi tiền vào tài khoản
  deposit(value) {
    this.balance += value;
  }

  // rút tiền
  withdraw(value) {
    if (value > this.balance) {
      console.log("Số tiền trong tài khoản không đủ");
    } else {
      this.balance -= value;
      console.log("Rút tiền thành công");
    }
  }
}

// tạo đối tượng
const wallet = new Wallet("MB bank", "1234");

console.log(wallet.balance);
// gửi tiền
wallet.deposit(1500);
// rút tiền
wallet.withdraw(1100); // 1100< 1500 rút tiền thành công
// wallet.withdraw(2500); // 2500 >1500 tiền ko đủ để rút

// Xem tài khoản or xem mã pin
console.log(wallet.balance); // hiển thị tiền sau gửi or rút
console.log(wallet.pin);

//  Bài toán là chúng ta không mong muốn cho phép truy cập
// trực tiếp để kiểm tra số dư và mã pin
