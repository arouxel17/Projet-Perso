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
}

module.exports = SpotsManager;