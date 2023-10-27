import express from 'express'
import jwt from 'jsonwebtoken'
import fs from 'fs'




export function authentification(req, res, next) {
    const authHeader = req.headers.authorization
   try {
       const token = req.headers.authorization
       //vérification du token avec la bibliothèque jsonwebtoken
       const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
       const contactId = decodedToken.contactId;
       req.auth = {
           contactId: contactId
       };
	next();
   } catch(error) {
       res.status(401).json({ error });
   }
};
