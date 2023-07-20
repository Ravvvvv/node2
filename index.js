const fs = require("fs");

const path = require("path");
// const saveData = require('saveData')

///////////////////////////////////
fs.mkdir(path.join(__dirname, "output"), function (err) {
    if (err) {
        if (err.code === "EEXIST") {
            console.log("Folder juz istnieje");
            return;
        }
        console.log(err);
    } else {
        console.log("Stworzono folder");
    }
});

fs.readdir(path.join(__dirname, "users"), function (err, files) {
    if (err) {
        console.log(err);
    } else {
        console.log(files);
        // odczytujemy plik z dokumentow za pomoca fs.readdir

        files.forEach(function (file) {
            // 'utf-8' pozwala zapisac dane w metodzie json bez pisanai tego
            fs.readFile(
                path.join(__dirname, "users", file),
                "utf8",
                function (err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(JSON.parse(data));

                        ////////////////
                        const users = JSON.parse(data);
                        users.forEach((user, index) => {
                            const userData = JSON.stringify(user);

                            const fileName = `${index + 1}-${user.name}.txt`;
                            // pod stala dajemy nawe plus index zeby dodawzc w odzielnym pliku zawartosc kolekcji zworconej
                            // w userdata
                            const filePath = path.join(__dirname, "output", fileName);
                            // stala ktora sklada sie z pliku users2 i filename zostaje wkoprzystna to  zeby zapisac je  do pliku o

                            const fileContent = `Name: ${user.name.split(' ')[0]}\nSurname: ${user.name.split(' ')[1]}\nStreet: ${user.address.street}\nZipCode: ${user.address.zipcode}\nCity: ${user.address.city}\nPhone: ${user.phone}`
                            // jakie dane maja znalesc sie w pliku dzieki fileContent

                            fs.writeFile(filePath, fileContent, function (err) {
                                if (err) {
                                    console.log(err);
                                } else {
                                    console.log(
                                        "Zapisano dane użytkownika do pliku: " +
                                        path.join(
                                            __dirname,
                                            "users2",
                                            fileName,
                                            `${user.id}-${user.name}-${user.address.street}-${user.address.zipcode}-${user.address.city}-${user.phone}.txt`
                                        )
                                    );
                                }
                            });
                        });
                    }
                    // odczytany plik odczytujemy ponownie zeby zmienic go JSON tablice abys mogli pozniej przekazac je do odczelnych txt
                }
            );
        });
    }
});
