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

  findSpotsConditions(id) {
    return this.connection.query(
      `SELECT s.id, s.nom, s.lieu, s.difficulte, s.image, s.description, c.vagues, c.houles, c.periodes FROM  ${this.table} AS s 
    INNER JOIN conditions AS c ON c.id=s.conditions_id WHERE s.id = ?`,
      [id, 1]
    );
  }

  findHome() {
    return this.connection.query(`SELECT id, nom, image FROM ${this.table}`);
  }
}

module.exports = SpotsManager;
