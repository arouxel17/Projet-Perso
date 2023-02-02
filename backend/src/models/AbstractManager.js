class AbstractManager {
  constructor({ table }) {
    this.table = table;
  }

  find(id) {
    return this.connection.query(`SELECT * FROM  ${this.table} WHERE id = ?`, [
      id,
    ]);
  }

  findAll() {
    return this.connection.query(`SELECT * FROM  ${this.table}`);
  }

  delete(id) {
    return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [
      id,
    ]);
  }

  setConnection(connection) {
    this.connection = connection;
  }
}

module.exports = AbstractManager;
