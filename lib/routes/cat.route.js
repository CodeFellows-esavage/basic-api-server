'use strict';

const express = require('express');
const router = express.Router();

const { CatModel } = require('../models/index.js');

router.post('', post);
router.get('', read);
router.get('/:id', read);
router.put('/:id', update);
router.delete('/:id', destroy);

async function post(req, res, next) {
  try {
    const newCat = await CatModel.create(req.body);
    res.status(201).send(newCat.dataValues);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function read(req, res, next) {
  try {
    const { id } = req.params;
    let cats;
    cats = (id) ? await CatModel.findOne({ where: { id } }) : await CatModel.findAll();
    console.log(cats);
    res.status(200).send(cats);

  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}

async function update(req, res, next) {
  try {
    const { id } = req.params;

    let updatedCat = await CatModel.update(req.body, { where: { id } });
    console.log(updatedCat);
    console.log(updatedCat[0]);
    if (updatedCat[0]) {
      const updatedCatObj = await CatModel.findOne({ where: { id } });
      res.status(202).send(updatedCatObj);
    } else {
      res.status(404).send('Cat Not Found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}

async function destroy(req, res, next) {
  try {
    const { id } = req.params;

    const destroyedCat = await CatModel.destroy({ where: { id } });
    if (destroyedCat) {
      res.status(204).send('Cat Deleted');
    } else {
      res.status(404).send('Cat Not Found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}

module.exports = router;