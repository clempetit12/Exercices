import express from 'express'

import { Commande } from '../dao/models/commande.js';
import { commandesDao } from '../app.js';



const orders = express.Router();





//produits

orders.get('/', (req, res) => {
    res.send(commandesDao.getAll())
 });
 
 //ajouter un produit
 orders.post('/', (req, res) => {
     const {client, produits} = req.body;
     let newOrder = new Commande(client, produits);
     console.log(newOrder);
     res.json(commandesDao.save(newOrder));
 });

 //rechercher un produit par son id
 orders.get('/:id', (req, res) => {
    const orderId = +req.params.id
    let findOrder = commandesDao.findById(orderId)
    if (!findOrder) {
        res.status(404).json({code: 404, message: "aucun client trouvé"});

    }
    res.json(findOrder)

});



export default orders;