// soal 1

var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]


var antrian = books.length;
var time = 10000;
function run(time, ind, antrian){
	readBooks(time, books[ind], function(sisaWaktu){
	time = sisaWaktu;
	antrian--;
	if(antrian>0){
		run(time, ind+1, antrian);
	}	
	})	
}

run(time, 0, antrian)