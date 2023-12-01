const prompt = require('prompt-sync')()
const fs = require("fs")

const filePath = "data/json/dataMahasiswa.json"

if(!fs.existsSync('data')){
    fs.mkdir('data' , err => {
        if (err) throw err
    });
}
if(!fs.existsSync('data/json')){
    fs.mkdir('data/json' , err => {
        if (err) throw err
    });
}
if(!fs.existsSync(filePath)){
    fs.writeFileSync(filePath , '[]' , err => {
        if (err) throw err
    });
}


fs.writeFileSync(filePath, JSON.stringify(dataMahasiswa), err => {
    if ( err ) throw err
})