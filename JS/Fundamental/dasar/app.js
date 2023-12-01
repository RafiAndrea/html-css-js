// // TIPE DATA
// var string ="";
// var number = 0;
// var boolean = true

// // POP UP BOX
// console.log("console")
// alert("alert")
// prompt("Masukan")
// confirm("Yakin")

// // Pengulangan
// let username = prompt("masukan nama")
// alert("username")
// let ulang = confirm("yakin")
// console.log("username")

// // angka = angka + 1
// let angka =10;
// console.log(angka += 1);
// console.log(angka -= 1);
// console.log(angka *= 1);
// console.log(angka /= 1);

// PERBANDINGAN
// let var1 = "10";
// let var2 = 10;
// console.log(var1 == var2)
// console.log(var1 === var2)
// console.log(var1 != var2)
// console.log(var1 !== var2)
// console.log(var1 > var2)
// console.log(var1 < var2)
// console.log(var1 >= var2)
// console.log(var1 <= var2)

// let var1 = 2;
// if (var1 === 1) {
//     console.log("TRUE")
// } else{
//     console.log("FALSE")
// }

// let var1 = 2;
// todo - || OR - salah satu benar
// todo - && AND -benar semua
// todo - ! NOT 
// if (var1 === 1 || var1 !== 2) {
//     console.log("TRUE")
// } else{
//     console.log("FALSE")
// }
// // ? mengembalikan nilai true
// if (var1 === 1 && var1 !== 2) {
//     console.log("TRUE")
// } else{
//     console.log("FALSE")
// }

// let var1 = true;
// if (!var1){
//     console.log("FALSE")
// } else{
//     console.log("TRUE")
// }

// let pilihan = parseInt(prompt("Masukan :"));
// console.log(typeof(pilihan))
// if (pilihan === 1) {
//     console.log("1")
// } else if (pilihan === 2){
//     console.log("2")
// } else {
//     console.log("salah")
// }

// let pilihan = parseInt(prompt("Masukan :"));
// switch (pilihan) {
//     case 1:
//         console.log("1")
//         break;
//     case 2:
//         console.log("2")
//         break;
//     case 3:
//         console.log("3")
//         break;
//     default:
//         console.log("salah")
//         break;
// }

// for(let i = 0; i <= 10; i++) {
//     console.log(i)
// }

// let length = parseInt(prompt("pengulangan"));
// for(let i = 1; i <= length; i++) {
//     console.log(i)
// }
// let length = parseInt(prompt("pengulangan"));
// for(let i = 10; i >= length; i--) {
//     console.log(i)
// }

// let ulang = false
// do {
//     console.log("Hello")
//     ulang=confirm("yakin")
//  } while (ulang)
// for(let i = 1; i <= 10; i++){
//     if (i % 2 === 1) {
//         console.log(i + " adalah ganjil")
//     } else{
//         console.log(i + " adalah genap")
//     }  
// }

const username = "rafi"
const petik = "Nama : " + username;
const backtik = `Nama : ${username}`