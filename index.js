
const fs = require('fs');

const path = require('path');
// const saveData = require('saveData')

fs.readdir(path.join(__dirname, 'users'), function (err, files) {
    if (err) {
        console.log(err);
    } else {
        console.log(files);
        // odczytujemy plik z dokumentow za pomoca fs.readdir

        files.forEach(function (file,) {
            // 'utf-8' pozwala zapisac dane w metodzie json bez pisanai tego
            fs.readFile(path.join(__dirname, 'users', file), 'utf8', function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(JSON.parse(data));

                    ////////////////
                    const users = JSON.parse(data)
                    users.forEach((user, index) => {

                        const userData = JSON.stringify(user)

                        
                        const fileName = `uzytkownik${index + 1}.txt`;
                        // pod stala dajemy nawe plus index zeby dodawzc w odzielnym pliku zawartosc kolekcji zworconej 
                        // w userdata
                        const filePath = path.join(__dirname, 'users2', fileName);
                        // stala ktora sklada sie z pliku users2 i filename zostaje wkoprzystna to  zeby zapisac je  do pliku o








                        fs.writeFile(filePath, userData, function (err) {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log('Zapisano dane użytkownika do pliku: ' + path.join(__dirname, 'users2', fileName, `${user.id}-${user.name}-${user.address.street}-${user.address.zipcode}-${user.address.city}-${user.phone}.txt`));
                            }
                        })



                    })





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




