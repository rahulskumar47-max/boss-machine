const express = require('express');
const router = express.Router();

const {
  getAllFromDatabase,
  addToDatabase,
  deleteAllFromDatabase,
  createMeeting
} = require('./db');

router.get('/', (req, res) => {
  res.send(getAllFromDatabase('meetings'));
});

router.post('/', (req, res) => {
  const newMeeting = createMeeting();
  addToDatabase('meetings', newMeeting);
  res.status(201).send(newMeeting);
});

router.delete('/', (req, res) => {
  deleteAllFromDatabase('meetings');
  res.status(204).send();
});

module.exports = router;
