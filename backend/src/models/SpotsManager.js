const AbstractManager = require("./AbstractManager");

class SpotsManager extends AbstractManager {
  constructor() {
    super({ table: "spots" });
  }

  insert(spots) {
    return this.connection.query(
      `INSERT INTO  ${this.table} (nom, lieu, difficulte, image, description, conditions_id) VALUES (?, ?, ?, ?, ?, ?)`,
      [
        spots.nom,
        spots.lieu,
        spots.difficulte,
        spots.image,
        spots.description,
        spots.conditions_id,
      ]
    );
  }

  update(spots) {
    return this.connection.query(
      `UPDATE ${this.table} SET nom = ?, lieu = ?, difficulte = ?, image = ?, description = ?, conditions_id = ? WHERE id = ?`,
      [
        spots.nom,
        spots.lieu,
        spots.difficulte,
        spots.image,
        spots.description,
        spots.conditions_id,
        spots.id,
      ]
    );
  }

  findCount() {
    return this.connection.query(
      `SELECT count(id) AS count FROM ${this.table}`
    );
  }

  findDifficulty() {
    return this.connection.query(
      `SELECT DISTINCT(difficulte) FROM ${this.table}`
    );
  }

  rand(number) {
    return this.connection.query(
      `select * from  ${this.table} ORDER BY rand() LIMIT ?`,
      [number]
    );
  }
}

module.exports = SpotsManager;
