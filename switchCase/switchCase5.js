let grade = prompt("Nhập điểm số của bạn:");
let message;

switch (true) {
  case grade >= 9:
    message = "Xuất sắc";
    break;
  case grade >= 8:
    message = "Giỏi";
    break;
  case grade >= 7:
    message = "Khá";
    break;
  case grade >= 5:
    message = "Trung bình";
    break;
  default:
    message = "Yếu";
}

console.log("Bạn được xếp loại:", message);