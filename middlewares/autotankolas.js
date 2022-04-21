module.exports = function(objRepo){
    const {fuelModel, saveDB, uuid} = objRepo;
    
    return (req, res, next)=>{
        //console.log("autoTankolas");
        //console.log(req.body);
        if( !(req.body.rendszam.length <7 || 
            typeof req.body.liter === 'undefined' || 
            req.body.liter <=0 ||
            typeof req.body.km === 'undefined' || 
            req.body.km <=0 
            )){
                const newTankolas = {
                    id : uuid.v4(), 
                    rendszam : req.body.rendszam, 
                    idopont : new Date().toISOString().slice(0, 10),
                    mennyiseg : req.body.liter, 
                    kmora : req.body.km
                };
                
                
                fuelModel.insert(newTankolas);
                console.log(newTankolas);
                
                
                saveDB();
        }
        
        return res.redirect("/auto");
    }

    
}