import express from 'express'
import { Produit } from '../dao/models/produit.js';
import { produitdao } from '../app.js';



const product = express.Router();





//produits

product.get('/', (req, res) => {
    res.send(produitdao.getAll())
 });
 
 //ajouter un produit
 product.post('/', (req, res) => {
     const {name, price, stock} = req.body;
     let newproduct = new Produit(name, price, stock);
     console.log(newproduct);
     res.json(produitdao.save(newproduct));
     console.log(produitdao);
 });

 //rechercher un produit par son id
 product.get('/:id', (req, res) => {
    const productId = +req.params.id
    let findProduct = produitdao.findById(productId)
    console.log(findProduct);
    if (!findProduct) {
        res.status(404).json({code: 404, message: "aucun client trouvé"});

    }
    res.json(findProduct)

});



export default product;