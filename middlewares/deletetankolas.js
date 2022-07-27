module.exports = function (objRepo) {
    const { fuelModel, saveDB, uuid } = objRepo;

    return (req, res, next) => {
        
        if (res.locals.tankolas) {
            console.log(res.locals.tankolas);
            fuelModel.remove(res.locals.tankolas);
            saveDB();
        }
        return res.redirect("/auto");
    }
}
