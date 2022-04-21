module.exports = function (objRepo) {
    const { fuelModel, saveDB, uuid } = objRepo;

    return (req, res, next) => {
        res.locals.tankolas = fuelModel.findOne({
            id: req.params.id
        })
        return next();
    }
}