const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  insert(users) {
    return this.connection.query(
      `INSERT INTO  ${this.table} (name, firstname, email, hashedPassword, role) VALUES (?, ?, ?, ?, ?)`,
      [
        users.name,
        users.firstname,
        users.email,
        users.hashedPassword,
        users.role,
      ]
    );
  }

  update(users) {
    return this.connection.query(
      `UPDATE ${this.table} SET name = ?, firstname = ?, email = ?, hashedPassword = ?, role = ? WHERE id = ?`,
      [
        users.name,
        users.firstname,
        users.email,
        users.hashedPassword,
        users.role,
        users.id,
      ]
    );
  }

  login(users) {
    return this.connection.query(
      `SELECT * FROM ${this.table} WHERE email = ?`,
      [users.email]
    );
  }

  updatePassword(users) {
    return this.connection.query(
      `UPDATE ${this.table} SET hashedPassword = ? WHERE id = ?`,
      [users.hashedPassword, users.id]
    );
  }
}

module.exports = UsersManager;
