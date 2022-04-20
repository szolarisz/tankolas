//const moment = require('moment');

/**
 * 
 * @param {*} objRepo 
 * @param {*} view Melyik EJS állományt kell renderelni
 * @returns nincs visszatérő érték, az MW lánc végén helyezkedik el
 */
module.exports = function (objRepo, view) {
    return (req, res, next) => {
//        res.locals.moment = moment;
        //console.table(res.locals.tankolasok);
        return res.render(view, res.locals);
    }
}
