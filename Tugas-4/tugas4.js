// soal 1

console.log("LOOPING PERTAMA");
var number = 2;
while(number<=20){
	console.log(number + " - I love coding");
	number = number + 2;
}

console.log("LOOPING KEDUA");
var number = 20;
while(number >= 2){
	console.log(number+" - I will become a frontend developer");
	number = number - 2;
}

// soal 2

for (var i = 1; i <= 20; i++) {
	if(i%3 == 0 && i%2 != 0){
		console.log(i + " I Love Coding");
	}
	else if(i%2 != 0){
		console.log(i + " Santai");
	}
	else if(i%2 == 0){
		console.log(i + " Berkualitas");
	}	
}

// soal 3

for (var pagar = "#"; pagar.length <=7; pagar = pagar + "#"){
console.log(pagar);
}

// soal 4

var kalimat="saya sangat senang belajar javascript";
var arrSplit = kalimat.split(" ");
console.log(arrSplit) ;

// soal 5

var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort();
for (var i = 0; i < daftarBuah.length; i++) {
	console.log(daftarBuah[i]);
}
