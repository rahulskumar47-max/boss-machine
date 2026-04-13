const express = require('express');
const router = express.Router();

const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId
} = require('./db');

router.get('/', (req, res) => {
  res.send(getAllFromDatabase('minions'));
});

router.get('/:minionId', (req, res) => {
  const minion = getFromDatabaseById('minions', req.params.minionId);
  minion ? res.send(minion) : res.status(404).send();
});

router.post('/', (req, res) => {
  const newMinion = addToDatabase('minions', req.body);
  res.status(201).send(newMinion);
});

router.put('/:minionId', (req, res) => {
  const updatedMinion = updateInstanceInDatabase('minions', req.body);
  updatedMinion ? res.send(updatedMinion) : res.status(404).send();
});

router.delete('/:minionId', (req, res) => {
  const deleted = deleteFromDatabasebyId('minions', req.params.minionId);
  deleted ? res.status(204).send() : res.status(404).send();
});

module.exports = router;
