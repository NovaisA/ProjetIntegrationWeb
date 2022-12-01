const express = require("express");
const router = express.Router();


//ajout des config d'authentification globale
router.get("/", (requete, reponse) => reponse.render("login")); 
router.get("/index", (requete, reponse) => reponse.render("login")); 
router.get("/index.html", (requete, reponse) => reponse.render("login")); 



module.exports = router;