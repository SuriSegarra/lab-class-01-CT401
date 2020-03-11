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
    //   console.log(obj);
    //   console.log(this.field);
    return obj[this.field];
  }
};
