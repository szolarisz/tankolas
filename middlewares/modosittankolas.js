module.exports = function (objRepo) {
    const { fuelModel, saveDB, uuid } = objRepo;

    return (req, res, next) => {
        console.log('--> Módosítás jelenti!');
        

        if (!res.locals.tankolas) {
            return res.redirect("/auto");
        }

        console.table(req.body);

        if( typeof req.body.mennyiseg === 'undefined' || 
            typeof req.body.kmora === 'undefined'){
            res.locals.id = req.params.id;
            console.table(res.locals);
            return res.render('modosit', res.locals);
        }

        const frissAdatok = res.locals.tankolas;
        frissAdatok.km = req.body.km;
        frissAdatok.liter = req.body.liter;
        
        fuelModel.update(frissAdatok);
        saveDB();
        
        return res.redirect('/auto');
    }
}