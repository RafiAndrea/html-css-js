let userCount = parseInt(prompt("Masukan jumlah anggota :"))
let groupCount = parseInt(prompt("Masukan jumlah kelompok :"))

const getUser = (jumlah) => {
    const users = []
    for (let i = 0; i < jumlah; i++){
        users.push(prompt(`Masukan nama ke ${i + 1} :`))
    }
    return users
}

const getGroup = (jumlah) => {
    const groups = []
    for (let i = 0; i < jumlah; i++){
        groups.push([])
    }
    return groups
}

const createTeam = (users, groups) => {
    let member = users.length / groups.length
    groups.map(item => {
        for (let i = 0; i < member; i++ ){
            item.push(users.sort(() =>Math.random() - 0.5).shift())
        }
    }) 
    return groups
}

const hasil = createTeam(getUser(userCount),(getGroup(groupCount)))

container.innerHTML = hasil.map((item, index) => {
    return `<ul>
    <h1 class="judul">Kelompok ke ${index + 1}</h1>
        ${item.map(itemIn => {
            return `<li class="item"> ${itemIn}</li>`
        }).join('')}
    </ul>`
}).join('')