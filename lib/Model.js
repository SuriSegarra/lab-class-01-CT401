const uuid = require('uuid/v4');
const {
  mkdirp,
  writeJSON,
  readJSON,
  updateJSON,
  deleteFile
} = require('./file-system');

module.exports = class Model {
  constructor(modelName, schema) {
    this.modelName = modelName;
    this.schema = schema;
    mkdirp(this.modelName);
  }
};
