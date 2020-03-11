const Validator = require('./Validators');
describe('Validator', () => {
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
});
