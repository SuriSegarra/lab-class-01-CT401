const Validator = require('./Validators');
describe('Validator', () => {
  let nameValidator;
  beforeEach(() => {
    nameValidator = new Validator('name', {
      type: String,
      required: true
    });
  });
  it('has a field and configuration property', () => {
    const nameValidator = new Validator('name', {
      type: String,
      required: true
    });

    expect(nameValidator.field).toEqual('name');
    expect(nameValidator.configuration).toEqual({
      type: String, 
      required: true
    });
  });
  it('can validate an object with the proper type', () => {
    const nameValidator = new Validator('name', {
      type: String,
      required: true
    });
      
    const cat = {
      name: 'Tom',
      age: 4,
      weight: '10 lbs'
    };

    expect(nameValidator.validate(cat)).toEqual('Tom');
  });

  it('can validate an object with the right type but castable', () => {
    const ageValidator = new Validator('age', {
      type: Number, 
      required: true
    });
    const cat = {
      name: 'sup',
      age: 5,
      weight: '10 lbs'
    };
    expect(ageValidator.validate(cat)).toEqual(5);
  });
  it('throws an error when validating an object with a missing required field', () => {
    const cat = {
      age: 5,
      weight: '10 lbs'
    };

    expect(() => nameValidator.validate(cat)).toThrowError('Missing required field >>name<<');
  });
  it('throws an error when validating an object with missing required field', () => {
    const nameValidator = new Validator ('name', {
      type: String,
      required: false
    });

    const cat = {
      age: 5,
      weight: '10 lbs'
    };

    expect(nameValidator.validate(cat)).toEqual(null);
  });
});
