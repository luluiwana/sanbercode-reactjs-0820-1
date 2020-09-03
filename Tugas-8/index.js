// soal 1

var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

let i = 1;
let a = 0;
function buku(book){
	readBooks(10000, book, function(){
		if(a<4){
			buku(books[a]);
			i++;a++;
		}
	}) 
}

buku(books[a])