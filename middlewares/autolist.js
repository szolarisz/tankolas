module.exports = function (objRepo) {
    const { fuelModel } = objRepo;

    return (req, res, next) => {
        res.locals.tankolasok = fuelModel.find({
        })
        console.log("Autolist jelenti:");
        
        if (res.locals.tankolasok.length === 0) {
            res.locals.tankolasok = {
                "id" : "1",
                "rendszam" : "-",
                "idopont" : "-",
                "mennyiseg" : "-",
                "kmora" : "-"
            }
          
        }
        console.log(res.locals.tankolasok);
        return next();
    }
}