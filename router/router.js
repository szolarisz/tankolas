/*
GET /
    tervezett feladat	kezdőképernyő betöltése
    bemenet	-
    kimenet	a renderelt állomány
GET /auto/:frgsz
    tervezett feladat	Adott azonosítójú autó tankolásainak listája
    bemenet	frgsz (az autó rendszáma)
    kimenet	az adott autó tankolásainak a renderelt listája
GET /auto
    tervezett feladat	Az összes autó tankolásának a listája
        bemenet	-
    kimenet	a tankolások renderelt listája
PUT /tankolas
    tervezett feladat	Egy tankolás rögzítése
    bemenet	A tankolás adatai űrlapról
    kimenet	A rögzített adatok JSON formátumban
DELETE /tankolas/:id
    tervezett feladat	Egy tankolás törlése
    bemenet	A tankolás azonosítója
    kimenet	A törölt adatok JSON formátumban
PATCH /tankolas/:id
    tervezett feladat	Egy tankolás adatainak a módosítása
    bemenet	tankolás azonosítója
    kimenet	A módosított adatok JSON formátumban
*/

const uuid = require('uuid');

//MW
const testMW = require('../middlewares/teszt');
const renderMW = require('../middlewares/render');
const autoListMW = require('../middlewares/autolist');
const autoTankolasMW = require('../middlewares/autotankolas');
const deleteTankolasMW = require('../middlewares/deletetankolas');
const keresTankolasMW = require('../middlewares/kerestankolas');
const modositTankolasMW = require('../middlewares/modosittankolas');


module.exports = function (app, { fuelModel, saveDB }) {
    const objRepo = {
        fuelModel,
        uuid,
        saveDB
    };

    app.get('/', autoListMW(objRepo), renderMW(objRepo, "index"));
    app.get('/auto',  autoListMW(objRepo), renderMW(objRepo, "index")); // kész
    app.get('/auto/:frgsz', testMW(objRepo),renderMW(objRepo, "index"));
    app.post('/ujtankolas', autoTankolasMW(objRepo));// kész
    app.get('/delete/:id', keresTankolasMW(objRepo), deleteTankolasMW(objRepo));// kész
    
    app.use('/modositas/:id', keresTankolasMW(objRepo), modositTankolasMW(objRepo));
    //app.put('/modositas/:id', testMW(objRepo),renderMW(objRepo, "index"));
    

    return app;
}