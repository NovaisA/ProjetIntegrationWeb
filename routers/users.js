const express = require("express");
const passport = require("passport");
const router = express.Router();
const { isAuthorized, isSeller } = require("../configs/auth");
const Products = require("../models/products");

// Router that renders login page
router.get("/login", (request, response) => {
  response.render(""); // login page
});

// Router for login out
router.get("/logout", (requete, reponse) => {
  requete.logout((err) => {
    if (err) throw err;
    requete.flash("succes_msg", "Déconnection réeussis.");
    reponse.redirect(""); // Redirect apres logout
  });
});

// router that autenticate users upon request to login
router.post("/login", (requete, reponse, next) => {
  passport.authenticate("local", {
    successRedirect: "", // Page apres login?
    badRequestMessage: "Remplir tous les champs",
    failureRedirect: "", // Page si fail login?
    failureFlash: true,
  })(requete, reponse, next);
});

// Router that gets a product by its ID and renders its info on the page
router.get("/modify/:id", isAuthorized, isSeller, (request, response) => {
  Products.getProductByID(request.params._id, (err, product) => {
    if (err) throw err;
    response.render("PageModifierProduitIci", {
      productInfo: product,
    });
  });
});

module.exports = router;
