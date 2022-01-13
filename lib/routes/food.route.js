'use strict';

const express = require('express');
const router = express.Router();

const { FoodModel } = require('../models');

router.post('', post);
router.get('', read);
router.get('/:id', read);
router.put('/:id', update);
router.delete('/:id', destroy);

async function post(req, res, next) {
  try {
    const newFood = await FoodModel.create(req.body);
    res.status(201).send(newFood.dataValues);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function read(req, res, next) {
  try {
    const { id } = req.params;
    let foods;
    foods = (id) ? await FoodModel.findOne({ where: { id } }) : await FoodModel.findAll();
    if (foods) {
      res.status(200).send(foods);
    } else {
      res.status(404).send('Food Not Found');
    }

  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}

async function update(req, res, next) {
  try {
    const { id } = req.params;

    let updatedFood = await FoodModel.update(req.body, { where: { id } });
    if (updatedFood[0]) {
      const updatedFoodObj = await FoodModel.findOne({ where: { id } });
      res.status(202).send(updatedFoodObj);
    } else {
      res.status(404).send('Food Not Found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}

async function destroy(req, res, next) {
  try {
    const { id } = req.params;

    const destroyedFood = await FoodModel.destroy({ where: { id } });
    if (destroyedFood) {
      res.status(204).send('Food Deleted');
    } else {
      const destroyedFoodObj = await FoodModel.findOne({ where: { id } });
      res.status(204).send(destroyedFoodObj);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}

module.exports = router;
