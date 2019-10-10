const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Recipes.getRecipes()
  .then(recipes => {
    res.json(recipes);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get recipes' });
  });
});

router.get('/:id/shoppingList', (req, res) => {
  Recipes.getShoppingList(req.params.id)
    .then(sl=>{
      if(sl.length){
        res.json(sl);
      } else {
        res.status(404).json({ message: 'Could not find the shopping list for given recipe' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get shopping list' });
    });
});

router.get('/:id/instructions', (req, res) => {
  Recipes.getInstructions(req.params.id)
    .then(i=>{
      if(i.length){
        res.json(i);
      } else {
        res.status(404).json({ message: 'Could not find the instructions for given recipe' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get instructions' });
    });
});

module.exports = router;