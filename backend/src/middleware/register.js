const validate = require("../services/users");

const registrerValidate = (req, res, next) => {
  const error = validate(req.body);
  if (error) {
    console.error(error);
    res.status(422).send(error);
  } else {
    next();
  }
};

module.exports = registrerValidate;
