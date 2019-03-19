var router = require('express').Router()
var fire = require('./fire')
var bodyParser = require('body-parser')
var db = fire.firestore()
router.use(bodyParser.json())

router.get('/producto', (req, res)=>{
    db.settings({
        timestampsInSnapshots: true
    })
    var allData = []
    db.collection('productos')
    .orderBy('nombre', 'desc').get()
    .then(snapshot => {
        snapshot.forEach((hasil)=>{
            allData.push(hasil.data())
        })
        console.log(allData)
        res.send(allData)
    }).catch((error)=>{
        console.log(error)
    })
})




router.post('/producto', (req, res)=>{
    db.settings({
        timestampsInSnapshots: true
    })
    db.collection('productos').add({
        categoria: req.body.categoria,
        color: req.body.color,
        descripcion: req.body.descripcion,
        descuento: req.body.descuento,
        disponible: req.body.disponible,
        genero: req.body.genero,
        imagen: req.body.imagen,
        likes: req.body.likes,
        marca: req.body.marca,
        nombre: req.body.nombre,
        precio: req.body.precio,
        talle: req.body.talle,
        fecha: new Date()
    })
    res.send({
        categoria: req.body.categoria,
        color: req.body.color,
        descripcion: req.body.descripcion,
        descuento: req.body.descuento,
        disponible: req.body.disponible,
        genero: req.body.genero,
        imagen: req.body.imagen,
        likes: req.body.likes,
        marca: req.body.marca,
        nombre: req.body.nombre,
        precio: req.body.precio,
        talle: req.body.talle,
        fecha: new Date()
    })
})



router.put('/producto/:id', (req, res)=>{
  
    let id_producto = req.params.id;
    let transaction = db.runTransaction( transaction =>{
        return transaction.get(db.collection('productos').doc(id_producto)).then( doc =>{
           //again check if theres something in the req body
           //remember you need body-parser for this
            if(req.body.nombre != undefined && req.body.categoria != undefined){
            
                //we pass the data as an object
            transaction.update(db.collection('productos').doc(id_producto), {
                categoria: req.body.categoria,
                color: req.body.color,
                descripcion: req.body.descripcion,
                descuento: req.body.descuento,
                disponible: req.body.disponible,
                genero: req.body.genero,
                imagen: req.body.imagen,
                likes: req.body.likes,
                marca: req.body.marca,
                nombre: req.body.nombre,
                precio: req.body.precio,
                talle: req.body.talle,
                fecha: new Date()
            })
           }else {
               res.json({
                   "statusCode": "500",
                   "statusResponse": "Error parsing the data",
                   "message": "There is no data to parse"
               })
           }
           
        })
    })
    .then(result =>{
        res.json({
            "statusCode": "200",
            "statusResponse": "Ok",
            "message": "Transaction Success",
        })
    })
    .catch(err =>{
        console.log(err);
    })
    

})


router.delete("/producto/:id", (req, res, next)=>{
    let deleteDoc = db.collection('productos').doc(req.params.id).delete();
    res.json({
        "message": "product was deleted successfully", 
    })
})


module.exports = router



    
    

