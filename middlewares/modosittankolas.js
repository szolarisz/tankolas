module.exports = function (objRepo) {
    const { fuelModel, saveDB, uuid } = objRepo;

    return (req, res, next) => {
        console.log('--> Módosítás jelenti!');
        

        if (!res.locals.tankolas  ) {
            return res.redirect("/auto");
        }

        console.table(req.body);

        if( typeof req.body.liter === 'undefined' || 
            typeof req.body.km === 'undefined'){
            res.locals.id = req.params.id;
            console.table(res.locals);
            return res.render('modosit', res.locals);
        }

        let frissAdatok = res.locals.tankolas;
        frissAdatok.kmora= req.body.km;
        frissAdatok.mennyiseg = req.body.liter;
        
        fuelModel.update(frissAdatok);
        console.table(frissAdatok);
        saveDB();
        
        return res.redirect('/auto');
    }
}