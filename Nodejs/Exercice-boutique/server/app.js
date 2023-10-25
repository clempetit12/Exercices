
import express from 'express'
import cors from 'cors';
import customer from './routes/clients.js';
import product from './routes/produits.js';
import orders from './routes/commandes.js';
import { ClientDao } from './dao/clientsDao.js';
import { ProduitDao } from './dao/produitsDao.js';
import { CommandesDao } from './dao/commandesDao.js';


export const clientDao = new ClientDao()
export const produitdao = new ProduitDao()
export const commandesDao = new CommandesDao()
const port = 3001


const app = express();

app.use(cors());


app.use(express.json());
// Utilisation d'un routeur
app.use('/customer', customer);
app.use('/product', product);
app.use('/orders', orders);


app.listen(port, () => {
    clientDao.readFileClient()
    produitdao.readFileProduit()
    commandesDao.readFileCommandes()
    console.log(`Server is running on http://127.0.0.1:${port}`);

});