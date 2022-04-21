module.exports = function (objRepo) {
    const { fuelModel } = objRepo;

    return (req, res, next) => {
        res.locals.tankolasok = fuelModel.find({
        })
        //console.log("Autolist jelenti:");
        
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