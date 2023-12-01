let ulang = false;
do {
    let pilihan = parseInt(prompt("Pilih nilai (1.volume || 2.luas)"));
    let hasil = 0;
    switch (pilihan) {
        // volume
        case 1:
            let pilihanVolume = parseInt(prompt("(1.Kubus || 2.Balok || 3.Kerucut || 4.Tabung)"))
            switch (pilihanVolume) {
                case 1:
                    //kubus
                    alert("rumus volume kubus")
                    let sisi = parseInt(prompt("Masukan panjang sisi kubus : "))
                    hasil = sisi * sisi * sisi;
                    break;
            
                case 2:
                    alert("rumus volume balok")
                    let panjang = parseInt(prompt("Maukan panjang balok : "))
                    let lebar = parseInt(prompt("Maukan lebar balok : "))
                    let tinggiBalok= parseInt(prompt("Maukan tinggi balok : "))
                    hasil = panjang * lebar * tinggiBalok;
                    break;

                case 3:
                    alert("rumus volume kerucut")
                    let jari_jariKerucut = parseInt(prompt("Masukan panjang jari-jari kerucut : "))
                    let tinggiKerucut = parseInt(prompt("Masukan panjang tinggi kerucut : "))
                    hasil = 1/3 * Math.PI * jari_jariKerucut * jari_jariKerucut * tinggiKerucut;
                    break;

                case 4:
                    alert("rumus volume tabung")
                    let jari_jariTabung = parseInt(prompt("Masukan panjang jari-jari Tabung : "))
                    let tinggiTabung = parseInt(prompt("Masukan panjang tinggi Tabung : "))
                    hasil = Math.PI * jari_jariTabung * jari_jariTabung * tinggiTabung;
                    break;   
                
                default:
                    alert("pilihan salah")
                    break;
            }
            break;                 
        case 2:
            let pilihanLuas = parseInt(prompt("(1.Kubus || 2.Balok || 3.Kerucut || 4.Tabung)"))
            switch (pilihanLuas) {
                case 1:
                    alert("rumus luas kubus")
                    let sisi = parseInt(prompt("Masukan panjang sisi kubus : "))
                    hasil = 6 * (sisi * sisi);
                    break;
                case 2:
                    alert("rumus luas balok")
                    let panjangBalok = parseInt(prompt("Maukan panjang balok : "))
                    let lebarBalok = parseInt(prompt("Maukan lebar balok : "))
                    let tinggiBalok= parseInt(prompt("Maukan tinggi balok : "))
                    hasil = 2 * (panjangBalok + lebarBalok + tinggiBalok);
                    break;
    
                case 3:
                    alert("rumus luas kerucut")
                    let jari_jariKerucut = parseInt(prompt("Masukan panjang jari-jari kerucut : "))
                    let sisiKerucut = parseInt(prompt("Masukan panjang sisi kerucut : "))
                    hasil = Math.PI * (jari_jariKerucut * sisiKerucut);
                    break;
    
                case 4:
                    alert("rumus luas tabung")
                    let jari_jariTabung = parseInt(prompt("Masukan panjang jari-jari Tabung : "))
                    let tinggiTabung = parseInt(prompt("Masukan panjang tinggi Tabung : "))
                    hasil = 2 * Math.PI * jari_jariTabung * (jari_jariTabung + tinggiTabung);
                    break; 
            
                default:
                    alert("pilihan salah")
                    break;
            }
    }
    alert("Hasil =" +hasil)
    ulang = confirm("Ganti bangun ruang?")
} while (ulang)
