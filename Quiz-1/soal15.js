var daftarNama=[];
var panggilan="";

function tambahNama(nama, jenisKelamin){
	if(jenisKelamin=="pria"){
		panggilan="Bapak";
	}
	else if(jenisKelamin=="wanita"){
		panggilan="Ibu";
	}
	daftarNama.push({"nama": nama, "jenisKelamin": jenisKelamin, "panggilan": panggilan});
}

tambahNama("Asep", "pria")
tambahNama("Siti", "wanita")
tambahNama("Yeni", "wanita")
tambahNama("Rudi", "pria")
tambahNama("Adit", "pria")
console.log(daftarNama);
for(var i=0; i<daftarNama.length; i++){
	console.log((i+1)+". "+daftarNama[i].panggilan+" "+daftarNama[i].nama)
}