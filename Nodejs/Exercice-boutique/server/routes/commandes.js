import express from 'express'

import { Commande } from '../dao/models/commande';
import { commandesDao } from '../app.js';



const orders = express.Router();





//produits

orders.get('/', (req, res) => {
    res.send(commandesDao.getAll())
 });
 
 //ajouter un produit
 orders.post('/', (req, res) => {
     const {client, produits} = req.body;
     let newproduct = new Produit(name, price, stock);
     console.log(newproduct);
     res.json(produitdao.save(newproduct));
     console.log(produitdao);
 });

 //rechercher un produit par son id
 orders.get('/:id', (req, res) => {
    const productId = +req.params.id
    let findProduct = produitdao.findById(productId)
    console.log(findProduct);
    if (!findProduct) {
        res.status(404).json({code: 404, message: "aucun client trouvé"});

    }
    res.json(findProduct)

});



export default orders;