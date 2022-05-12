// -----------------HOMEWORK 1----------------

// ---------- Sử dụng một toán tử dấu chấm hỏi ? ----------

let i = Number(prompt('Nhập số tuổi'));

switch (isNaN(i)) {
    case true:
        alert("THÔNG TIN BẠN NHẬP KHÔNG PHẢI LÀ SỐ");
        break;

    default:
        console.log("Số tuổi: ", i);

        function checkAge(age) {
            return age > 18 ? true : confirm('Did parents allow you');
        };

        console.log(checkAge(i));
        break;
}








// -------------------- Sử dụng OR || --------------------
// let i = Number(prompt('Nhập số tuổi'));
// function checkAge(age) {
//     return age > 18 || confirm('Did parents allow you');
// }
// console.log(checkAge(i));





// -----------------HOMEWORK 2----------------

// let a = Number(prompt("Nhập giá trị a"));
// let b = Number(prompt("Nhập giá trị b"));

// function min(a, b) {
//     return a > b ? b : a;
// }
// console.log("Giá trị min là ", min(a, b));





// -----------------HOMEWORK 3----------------

// let ask = (question, yes, no) => {
//     if (confirm(question)) {
//         yes();
//     } else {
//         no();
//     }
// };

// ask(
//     "Do you agree",
//     () => {
//         alert("You agreed.");
//     },
//     () => {
//         alert("You canceled the execution");
//     }
// )





// -----------------HOMEWORK 4----------------

// let username = prompt("Nhập tài khoản của bạn");

// if (username == "Admin") {
//     let password = prompt("Nhập mật khẩu");
//     password == "mindX" ? alert("Chào Mừng") : alert("Mật khẩu sai");
// } else if (username == " " || username == "Esc") {
//     alert("Canceled")
// } else {
//     alert("Username không hợp lệ")
// }