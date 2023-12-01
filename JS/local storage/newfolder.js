const prompt = require('prompt-sync')();
const fs = require('fs');

const filePath = 'data/json/dataMahasiswa.json';

// Create directories if they don't exist
if (!fs.existsSync('data')) {
  fs.mkdirSync('data');
}
if (!fs.existsSync('data/json')) {
  fs.mkdirSync('data/json');
}

// Initialize dataMahasiswa array
const dataMahasiswa = [];

const getDataMahasiswa = () => {
  const Mahasiswa = {};
  const data = ['FullName', 'Nim', 'Email', 'NoHP'];
  data.forEach((item) => {
    do {
      Mahasiswa[item] = prompt(`Masukan ${item}: `);
    } while (Mahasiswa[item] === null || Mahasiswa[item] === '');
  });

  return Mahasiswa;
};

let counter;

do {
  dataMahasiswa.push(getDataMahasiswa());
  counter = prompt('Masukan Lagi? (y/n): ').toLowerCase() === 'y';
} while (counter);

// Convert dataMahasiswa to a JSON string
const strDataMahasiswa = JSON.stringify(dataMahasiswa);

// Write the JSON string to the file
fs.writeFileSync(filePath, strDataMahasiswa, (err) => {
  if (err) throw err;
});

console.log(dataMahasiswa);
