const router = require("express").Router();
let Shop = require("../models/shop.model");

router.route("/").get((req, res) => {
  Shop.find()
    .then((shops) => res.json(shops))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const newShop = new Shop(req.body);

  newShop
    .save()
    .then(() => res.json("Shop added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
