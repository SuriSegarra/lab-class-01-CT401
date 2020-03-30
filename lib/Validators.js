const { getCaster } = require('./types.js');
module.exports = class Validator {
  //Validator takes two properties
  //field  which is the field we are goign to validate
  //configuration whch gives us info about wow to validate
  constructor(field, configuration) {
    this.field = field;
    this.configuration = configuration;
  }
  //obj is the obj we want to run through validation
  validate(obj) {
    if(this.configuration.required && !(this.field in obj)){
      throw new Error(`Missing required field >>${this.field}<<`);
    }
    if(!this.configuration.require && ! (this.field in obj)){
      return null;
    }
    const caster = getCaster(this.configuration.type);
    return caster(obj[this.field]);
  }
};
