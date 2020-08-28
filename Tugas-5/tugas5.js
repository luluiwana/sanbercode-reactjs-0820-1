// soal 1

function halo() {
	return "Halo Sanbers!"
} 
console.log(halo())

// soal 2

function kalikan(num1, num2){
	return num1*num2
}
var num1 = 12
var num2 = 4

var hasilKali = kalikan(num1, num2)
console.log(hasilKali)

// soal 3

function introduce(name, age, address, hobby){
	return "Nama saya "+name+", umur saya "+age+" tahun, alamat saya di "+address.toLowerCase()+", dan saya punya hobby yaitu "+hobby+"!"
}

var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"

var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan)

// soal 4

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
var daftarPeserta = {
	nama : arrayDaftarPeserta[0],
	jenisKelamin: arrayDaftarPeserta[1],
	hobi: arrayDaftarPeserta[2],
	tahunLahir: arrayDaftarPeserta[3]
}
console.log(daftarPeserta)

// soal 5

var buah = [
{	nama: "strawberry",	warna: "merah",	adaBijinya: false,	harga: 9000 },
{	nama: "jeruk",	warna: "oranye",	adaBijinya: true,	harga: 8000},
{	nama: "Semangka",	warna: "Hijau & Merah",	adaBijinya: true,	harga: 10000},
{	nama: "Pisang",	warna: "Kuning",	adaBijinya: false,	harga: 5000}]

console.log(buah[0])

// soal 6


var dataFilm = []
function tambahFilm(nama, durasi, genre, tahun){
	dataFilm.push({ "nama": nama, "durasi": durasi, "genre":genre, "tahun": tahun }) 
}

tambahFilm("Sepotong Roti", "173 menit", "Drama", 2000)
tambahFilm("Sebuat Ketupat", "154 menit", "Thriller", 2020)

console.log(dataFilm)



