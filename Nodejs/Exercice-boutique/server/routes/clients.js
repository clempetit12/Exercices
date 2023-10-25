import express from 'express'
import {clientDao} from "../app.js"
import {Client} from "../dao/models/client.js"


const customer = express.Router();




//clients
//récupérer tout la liste des clients
customer.get('/', (req, res) => {
    res.send(clientDao.getAll())
 });
 
 //ajouter des clients
 customer.post('/', (req, res) => {
     const {firstname, lastname, phoneNumber} = req.body;
     let newClient = new Client (firstname, lastname, phoneNumber);
     console.log(newClient);
     res.json(clientDao.save(newClient));
     console.log(clientDao);

 });
 //récupérer un client par son id
 customer.get('/:id', (req, res) => {
     const clientId = +req.params.id
     let findClient = clientDao.findById(clientId)
     console.log(findClient);
     if (!findClient) {
         res.status(404).json({code: 404, message: "aucun client trouvé"});
 
     }
     res.json(findClient)
   
 
 });


export default customer;