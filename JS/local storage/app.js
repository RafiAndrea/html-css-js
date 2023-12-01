const prompt = require('prompt-sync') ()
const { getDataMahasiswa } = require("./index3")

let counter;

do{
    getDataMahasiswa(["Fullname","Nim","Email","NoHP"])
    counter = prompt("apakah ingin mengulang? (y/n)")
}while (counter === 'y' || counter  === '')