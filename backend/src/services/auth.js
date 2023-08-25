const argon2 = require("argon2");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashedPassword = (req, res, next) => {
  argon2
    .hash(req.body.hashedPassword, hashingOptions)
    .then((hash) => {
      req.body.hashedPassword = hash;
      next();
    })
    .catch(() => {
      res.status(500).json({ error: "erreur serveur" });
    });
};

const hashedNewPassword = (req, res, next) => {
  argon2
    .hash(req.body.newPassword, hashingOptions)
    .then((hash) => {
      req.body.newPassword = hash;
      next();
    })
    .catch(() => {
      res.status(500).json({ error: "erreur serveur" });
    });
};

const verifyHash = (hashFromDB, hashedPasswordSend) => {
  return argon2.verify(hashFromDB, hashedPasswordSend, hashingOptions);
};

module.exports = { hashedPassword, verifyHash, hashedNewPassword };
