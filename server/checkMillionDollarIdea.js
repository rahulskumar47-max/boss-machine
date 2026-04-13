const checkMillionDollarIdea = (req, res, next) => {
  const { numWeeks, weeklyRevenue } = req.body;

  const total = Number(numWeeks) * Number(weeklyRevenue);

  if (total >= 1000000) {
    next();
  } else {
    res.status(400).send('Idea must be worth at least $1,000,000');
  }
};

module.exports = checkMillionDollarIdea;
