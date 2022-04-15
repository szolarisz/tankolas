/**
 * 
 * @param {*} objRepo 
 * @returns next() mindig tovább lép
 * 
 * tesztelési célú MW, bárhová beilleszthető, kivéve a végére.
 * A végleges megoldásban nem kap szerepet, csak a fejlesztés során használjuk
 */
module.exports = function (objRepo) {
    return (req, res, next) => {
        console.log(`URL: ${req.url}`);
        console.log(`Method: ${req.method}`);
        
        console.log(`Response body: ${res.body}`);
        return next();
    }
}