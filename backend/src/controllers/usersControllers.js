const jwt = require("jsonwebtoken");
const models = require("../models");
const { verifyHash } = require("../services/auth");
const validate = require("../services/users");

const read = (req, res) => {
  models.users
    .findAll()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const readOne = (req, res) => {
  models.users
    .find(req.params.id)
    .then(([result]) => {
      if (result) {
        res.status(200).send(result);
      } else {
        res.sendStatus(404);
      }
    })
    .catch(() => {
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const users = req.body;
  const error = validate(users);
  if (error) {
    res.status(422).send(error);
  } else {
    models.users
      .insert(users)
      .then((result) => {
        res.status(201).send(result);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
};

const validateUser = async (req, res) => {
  const { email } = req.body;
  models.users.login(email).then(async ([user]) => {
    if (user[0]) {
      if (await verifyHash(user[0].hashedPassword, req.body.hashedPassword)) {
        const myUser = { ...user[0] };
        myUser.profil = 0;
        delete myUser.hashedPassword;
        const token = jwt.sign(myUser, process.env.JWT_SECRET, {
          expiresIn: "24h",
        });

        res
          .status(201)
          .cookie("access_token", token, {
            httpOnly: true,
          })
          .json(myUser);
      } else {
        res.sendStatus(401);
      }
    } else {
      res.sendStatus(404);
    }
  });
};

const edit = (req, res) => {
  const users = req.body;
  users.id = parseInt(req.params.id, 10);
  models.users
    .updatePassword(users)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  read,
  readOne,
  add,
  validateUser,
  edit,
};
