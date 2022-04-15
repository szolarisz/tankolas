/**
 * tankolás
{
    id : A tankolás azonosítója(uuid),
    rendszam : A jármű forgalmi rendszáma
    idopont : tankolás időpontja,
    mennyiseg : a tankolt üzemanyag egész literre kerekítve (nem a rendszer kerekít)
    kmora : A tankolás időpontjában az adott gépjármű kilométerórájának az állása
}

 */
    const loki = require('lokijs');
    let db = false;
    
    function initDB(cb) {
        console.log("Adatbázis inicializálása");
        db = new loki('tankolasok.loki.db');
        db.loadDatabase({}, err => {
            if (err) {
                return cb(err);
            }
            let fuelModel = db.getCollection("fuels");
            if (fuelModel === null) {
                fuelModel = db.addCollection("fuels");
            }
            
            db.saveDatabase(err => {
                if (err) {
                    return cb(err);
                }
                //Tesztelésre
                console.table(fuelModel.find());
    
                return cb(undefined, {
                    fuelModel, saveDB: (cb) => {
                        console.log("DB mentés alatt...");
                        db.saveDatabase(cb);
                    }
                });
            });
        });
    }
    
    module.exports.initDB = initDB;