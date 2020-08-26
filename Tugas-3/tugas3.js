// soal 1

var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

console.log(kataPertama.concat(" ", kataKedua.charAt(0).toUpperCase(), kataKedua.slice(1), " ", kataKetiga, " ", kataKeempat.toUpperCase())); 

// soal 2

var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var angkaPertama = parseInt(kataPertama);
var angkaKedua = parseInt(kataKedua);
var angkaKetiga = parseInt(kataKetiga);
var angkaKeempat = parseInt(kataKeempat);

var total = angkaPertama+angkaKedua+angkaKetiga+angkaKeempat;

console.log(total);


// soal 3

var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4,14); // do your own! 
var kataKetiga = kalimat.substring(15,18); // do your own! 
var kataKeempat = kalimat.substring(19,24); // do your own! 
var kataKelima = kalimat.substring(25,31); // do your own! 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

// soal 4

var nilai=86;
var indeks="undefined";

if (nilai>=80) {indeks="A"}
	else if (nilai>=70 && nilai<80){indeks="B"}
		else if (nilai>=60 && nilai<70){indeks="C"}
			else if (nilai>=50 && nilai<60){indeks="D"}
				else if(nilai<50){indeks="E"}

					console.log(indeks);

// soal 5

var tanggal = 21;
var bulan = 2;
var tahun = 2000;

var namaBulan;

switch(bulan) {
	case 1: { namaBulan = "Januari"; break; }
	case 2: { namaBulan = "Februari"; break;}
	case 3: { namaBulan = "Maret"; break;}
	case 4: { namaBulan = "April"; break;}
	case 5: { namaBulan = "Mei"; break;}
	case 6: { namaBulan = "Juni"; break;}
	case 7: { namaBulan = "Juli"; break;}
	case 8: { namaBulan = "Agustus"; break;}
	case 9: { namaBulan = "September"; break;}
	case 10:{ namaBulan = "Oktober"; break;}
	case 11:{ namaBulan = "November"; break;}
	case 12:{ namaBulan = "Desember"; break;}
	default:  { namaBulan = "Tidak ada" }
}

console.log(tanggal+" "+namaBulan+" "+tahun);