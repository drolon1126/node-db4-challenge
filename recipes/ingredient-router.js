const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();

router.get('/:id/recipes', (req, res) => {
  Recipes.getIngredientRecipes(req.params.id)
    .then(ir=>{
      if(ir.length){
        res.json(ir);
      } else {
        res.status(404).json({ message: 'Could not find the recipes for given ingredient' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get the recipes' });
    });
});

module.exports = router;