var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise

var antrian = books.length;
var time = 10000;

function run(time, ind, antrian) {
    readBooksPromise(time, books[ind])
        .then(function (sisaWaktu) {
            time = sisaWaktu; antrian--;
            if (antrian > 0) {
                run(time, ind+1, antrian);
            }
        })
        .catch(function (error) {
            
        })
}

run(time, 0, antrian);

