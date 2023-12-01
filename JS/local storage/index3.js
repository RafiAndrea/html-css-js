const prompt = require('prompt-sync')()
const fs = require("fs")

const filePath = "./data/json/dataMahasiswa.json"

const createDirectory = () =>{
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
}

const storeDataMahasiswa = (filePath) => {
     if(fs.existsSync(filePath)){
        return JSON.parse(fs.readFileSync(filePath, "utf-8"))
     }
}

const saveDataMahasiswa = (filePath, dataMahasiswa) => {
    if(!fs.existsSync(filePath)){
        createDirectory(filePath)
    }
    fs.writeFileSync(filePath, JSON.stringify(dataMahasiswa), err => {
        if ( err ) throw err
    })
}

const getDataMahasiswa = (data) => {
    createDirectory(filePath)
    const storeData = storeDataMahasiswa(filePath)
    const Mahasiswa = {}
    data.map(dataItem => {
        let input 
        do {
            input = prompt(`Masukan ${dataItem} Mahasiswa : `)
            Mahasiswa[dataItem] = input
        } while (input === null || input === "")
    })
    storeData.push(Mahasiswa)
    saveDataMahasiswa(filePath, storeData)
}

module.exports ={
    getDataMahasiswa
}