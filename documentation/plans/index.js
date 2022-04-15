const express = require('express');
const app = express();
const port = 5555;
const bodyParser = require('body-parser');
const fs = require('fs');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

//Read kilistázás autónként
app.get('/fueling/:marka', (req, res) => {
    const auto= req.params.marka;
    console.log(auto);
     fs.readFile('./data/fueling.json',(err, file)=>{
        //const autotipus = file.find(fueling => fueling.auto === auto); (Ez csak az elsőt adná vissza)
        res.send([...JSON.parse(file)].filter(fueling=> fueling.auto=== auto)); // [] Array, ... belemásolása az objektumoknak, filter -feltétel 
    })
})

//Read kilistázás minden tankolást
app.get('/fueling', (req, res) => {
    fs.readFile('./data/fueling.json',(err, file)=>{
        res.send(JSON.parse(file));
    })
})


//Create Új tankolás rögzítése
app.post('/fueling', bodyParser.json(),(req,res)=>{
    console.log(req.body);
    const newFueling = {
        id: Number(req.body.id),
        auto : sanitizeString(req.body.auto),
        datum : sanitizeString(req.body.datum),
        liter : Number(req.body.liter),
        km : Number(req.body.km),
    };
    fs.readFile('/data/fueling.json', (err, file) => {
        const fueling = JSON.parse(file);
        fueling.push(newFueling);
        fs.writeFile('./data/fueling.json', JSON.stringify(fueling), (err)=>{
            res.send(newFueling);
        });
    })
});



app.listen(port, () =>{
    console.log(`${port} porton figyelek.`); 
})
function sanitizeString(str){
    str = str.replace(/([^a-z0-9áéíóúñü_-\s\.,]|[\t\n\f\r\v\0])/gim,"");
    return str.trim();
    }