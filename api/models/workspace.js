const { Model } = require("./base");

class Workspace extends Model {
  static get tableName() {
    return "workspaces";
  }
}

module.exports = {
  Workspace
};
