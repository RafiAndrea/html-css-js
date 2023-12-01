const random = () => {
    const value = ["gajah", "semut", "manusia"]
    return value[Math.floor(Math.random() * value.length)]
}

const user = prompt("masukan pilihan :")
const comp = random()

const program = (user, comp) => {
    console.log({user,comp})
    let hasil;
    if (user === comp) {
        hasil = "draw"
    }else if (
        user === "semut" && comp === "gajah" || 
        user === "gajah" && comp === "manusia" || 
        user === "manusia" && comp === "semut") {
        return hasil = "menang"
    }else if (
        user === "semut" && comp === "manusia" || 
        user === "gajah" && comp === "semut" || 
        user === "manusia" && comp === "gajah") {
        return hasil = "kalah"
    }else {
        hasil = "diluar kondisi"
    }
}
alert(`kamu memilih ${user} dan computer memilih ${comp} maka kamu ${program (user.toLocaleLowerCase(), comp)} dari komputer`)