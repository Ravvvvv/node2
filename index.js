
const fs = require('fs');

const path = require('path');
// const saveData = require('saveData')

fs.readdir(path.join(__dirname, 'users'), function (err, files) {
    if (err) {
        console.log(err);
    } else {
        console.log(files);
        // odczytujemy plik z dokumentow za pomoca fs.readdir

        files.forEach(function (file) {
            // 'utf-8' pozwala zapisac dane w metodzie json bez pisanai tego
            fs.readFile(path.join(__dirname, 'users', file), function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(JSON.parse(data));

                    ////////////////





                }
                // odczytany plik odczytujemy ponownie zeby zmienic go JSON tablice abys mogli pozniej przekazac je do odczelnych txt
            })
        })
        ///////////////////////////////////
        fs.mkdir(path.join(__dirname, 'users2'), function (err) {
            if (err) {

                if (err.code === 'EEXIST') {
                    console.log('Folder juz istnieje');
                    return;
                }
                console.log(err);
            } else {
                console.log('Stworzono folder');
            }

        });
        // przez fsmkdir sciezka tworzymy nowy folder users2 



        fs.writeFile(path.join(__dirname, 'users2', 'uzytkownik.txt'), 'test', function (err) {
            // przez fs writeFIle towrzymy w users2 plik txt z teksem test aby test zamienic trzeba pobrac dane z 
            // (JSON.parse(data)) ktorego nie wiem jak zrobic
            if (err) {
                F
                if (err) {
                    console.log(err);
                }

            } else {
                console.log('Stworzono plik');

            }
        })
    }


})




