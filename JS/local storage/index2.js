const dataMahasiswa = []
let counter;
const getDataMahasiswa = () =>{
    const Mahasiswa = {}
    const data = ['FullName','Nim','Email','NoHP']
    data.map(item => {
        do{
            Mahasiswa[item] = prompt(`Masukan ${item}`)
        }while (Mahasiswa[item] === null || Mahasiswa[item] === '')
    })
        
    return Mahasiswa ;
}

// todo simpan ke local storage
const storeDataMahasiswa = localStorage.getItem('Data Mahasiswa')
if (storeDataMahasiswa) {
    const objStoreDataMahasiswa = JSON.parse(storeDataMahasiswa)
    dataMahasiswa.push(...objStoreDataMahasiswa)
}

do {
    dataMahasiswa.push(getDataMahasiswa())
    counter = confirm("Masukan Lagi")
}while(counter)

const strDataMahasiswa = JSON.stringify(dataMahasiswa)
localStorage.setItem('Data Mahasiswa', strDataMahasiswa)

console.log(dataMahasiswa)