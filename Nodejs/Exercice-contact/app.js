import express from 'express'
import Contact from './models/contact.js';
import ContactDao from './dao/contactDao.js';
import { authentification } from './middleware/authentificationMid.js';
import { dateLogging, dateMiddleware } from './middleware/dateMidl.js';

const contactDao = new ContactDao()
const app = express()
const port = 3001

app.use(dateMiddleware);
app.use(express.json());



 //ajouter un contact
 app.post('/contacts',authentification, (req, res) => {
    const {firstname, lastname, email} = req.body;
    let newContact = new Contact (null,firstname, lastname, email);
    res.json(contactDao.save(newContact));

});

//récupérer les contacts
app.get('/contacts', (req, res) => {
    res.send(contactDao.getAll())
 });

  //récupérer un contact par son id
  app.get('/contacts/:id', (req, res) => {
    const contactId = +req.params.id
    let foundContact = contactDao.findById(contactId)
    if (!foundContact) {
        res.status(404).json({code: 404, message: "aucun contact trouvé"});

    }
    res.json(foundContact)
  

});


// Modifier un contact par son id
app.put('/contacts/:id',authentification, (req, res) => {
    
    const {id,firstname, lastname, email} = req.body;
    if(+req.params.id != id) res.sendStatus(409);
    let contact = new Contact(id,firstname, lastname, email);
    contactDao.updateContact(contact) ? res.sendStatus(200) : res.status(400).json({code: 400, message: "problème lors de la mise à jour du contact"})
});


// Supprimer un contact
app.delete('/contacts/:id',authentification, (req, res) => {
    contactDao.deleteContact(+req.params.id);
    res.sendStatus(200);
});

app.listen(port, () => {
    contactDao.readFile()
    console.log(`Server is running on http://127.0.0.1:${port}`);

});