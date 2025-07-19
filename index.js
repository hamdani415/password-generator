const angka = '1234567890'
const hurufKecil = 'abcdefghijklmnopqrstuvwxyz'
const hurufKapital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const simbol = '!@#$%^&*()_+'

const data = angka + hurufKecil + hurufKapital + simbol
let pw = ''

const panjang = document.getElementById('panjang')
const password = document.getElementById('password')
// const generate = document.getElementById('generate')

function generate (){
    alert('password berhasil di generate')
    for (let i = 0 ; i < panjang.value ; i ++){
        pw += data[~~(Math.random() * data.length)]
    }
    password.value = pw
}
function riset(){
      window.location.reload();
}
