// const chalk = require('chalk')
// const cetak = (data) => console.log(chalk.blue(data))
// cetak('data')

// ? FUNCTION DECLARARION
// function penjumlahan (a , b) {
//     return a + b
// 

// ? FUNGTION EXPRESSION
// const pengurangan = function (a , b) {
//     return a - b
// }

// ? ARROW FUNCTION
// const perkalian = (a ,  b) => a * b

// const operasiHitung = (nilai1 ,nilai2 , operator) => {
//     let hasil;
//     switch (operator) {
//         case '+':
//             hasil = nilai1 + nilai2
//             break;
//         case '-':
//             hasil = nilai1 - nilai2
//             break;
//         case '/':
//             hasil = nilai1 / nilai2
//             break;
//         case '*':
//             hasil = nilai1 * nilai2
//             break;
    
//         default:
//             console.log("Operasi hitung tidak tersedia");
//             break;
//     }
//     return hasil
// }
// console.log(operasiHitung(5,5,"+"))
// console.log(operasiHitung(5,5,"-"))
// console.log(operasiHitung(5,5,"/"))
// console.log(operasiHitung(5,5,"*"))

// const OTP = (length) => {
//     let result = ""
//     for (let i = 0; i < length; i++) {
//         let random = Math.round(Math.random()* 10)
//         result += random;
//     }
//     return result;
// }
// cetak (OTP(5))

// const randomPassword = (length) => {
//     let result = ""
//     let lowercase = "qwertyuiopasdfghjklzxcvbnm"
//     let uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM"
//     let number = "1234567890"
//     let data = lowercase + uppercase + number
    
//     for (let i = 0; i < length; i++) {
//         let random = Math.floor(Math.random()* (data.length))
//         result += data[random];
//     }
//     return result;
// }
// cetak (randomPassword(10))

// todo ARRAY
const Mahasiswa = [
    {
        id: 0,
        username: "rafi andrea",
        mataKuliah: ["APS","RPL"],
        nilai: [-5,-5]
    },
    {
        id: 1,
        username: "ajes chan",
        mataKuliah: ["APS","RPL"],
        nilai: [-5,-5]
    },
    {
        id: 2,
        username: "rohid chan",
        mataKuliah: ["APS","RPL"],
        nilai: [-5,-5]
    },
];

// for (let i = 0; i < Mahasiswa.length; i++) {
//     console.log(Mahasiswa[i])
//     console.log(Mahasiswa[i].id)
//     console.log(Mahasiswa[i].username)
// }

const loopingArray = (array) => {
    for(let i = 0; i < array.length; i++){
        console.log(array)
    }
}
loopingArray(Mahasiswa)