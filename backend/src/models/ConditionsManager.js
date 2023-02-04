const AbstractManager = require("./AbstractManager");

class ConditionsManager extends AbstractManager {
  constructor() {
    super({ table: "conditions" });
  }
}
  module.exports = ConditionsManager;