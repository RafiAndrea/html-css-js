const dataMahasiswa = []
let counter;
const getDataMahasiswa = () =>{
    const Mahasiswa = {}
    do{
        Mahasiswa.username = prompt("Masukan Nama : ")
        Mahasiswa.nim = prompt("Masukan Nim : ")
        Mahasiswa.email = prompt("Masukan Email ; ")
        Mahasiswa.noHP = prompt("Masukan No Hp : ")
    } while (Mahasiswa.username === null || Mahasiswa.username === "" ||
    Mahasiswa.nim === null || Mahasiswa.nim === "" || Mahasiswa.email === null || Mahasiswa.email === "" ||
    Mahasiswa.noHp=== null || Mahasiswa.noHp === "")

    return Mahasiswa ;
}
do {
    dataMahasiswa.push(getDataMahasiswa())
    counter = confirm("Masukan Lagi")
}while(counter)

const strDataMahasiswa = JSON.stringify(dataMahasiswa)
localStorage.setItem('Data Mahaswa', strDataMahasiswa)

console.log(dataMahasiswa)