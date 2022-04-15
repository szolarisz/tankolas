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
        //res.locals.userid = '79e74e6f-e57d-4496-8533-66e9fd861160';
        //console.log("userid: "+res.locals.userid);
        return res.render(view, res.locals);
    }
}
