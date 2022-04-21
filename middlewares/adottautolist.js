module.exports = function (objRepo) {
    const { fuelModel } = objRepo;

    return (req, res, next) => {
        
        res.locals.tankolasok = fuelModel.find({
            rendszam: req.params.frgsz //Ide fog érkezni a req.param.frgsz!
        })

        //console.log("--> Adott auto lista jelenti:");
        //console.log(res.locals.tankolasok);
        //console.log(req.url);
        
        res.locals.url = req.url;
        if (res.locals.tankolasok.length === 0) {
            res.locals.tankolasok =[{
                "id" : "1",
                "rendszam" : "nincs rögzítve még",
                "idopont" : "2022.11.14",
                "mennyiseg" : "0",
                "kmora" : "0"
            }]
          
        }
        //console.log(res.locals.tankolasok);
        return next();
    }
}