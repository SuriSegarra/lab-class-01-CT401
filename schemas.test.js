const Schema = require('./lib/schemas.js');

describe('Schema', () => {
  it('validates a good schema', () => {
    const schema = new Schema({
      name: {
        type: String,
        required: true
      },
      age: {
        type: Number,
        required: true
      },
      weight: {
        type: String,
        required: true
      }
    });
     
    const cat = {
      name: 'Tom',
      age: 5,
      weight: '10 lbs'
    };

    expect(schema.validate(cat)).toEqual({
      name: 'Tom',
      age: 5,
      weight: '10 lbs'
    });
  });
  it('throws a bad schema', () => {
    const schema = new Schema ({
      name: {
        type: String,
        required: true
      },
      age: {
        type: Number,
        required: true
      },
      weight: {
        type: String,
        required: true
      }  
    });

    const cat = {
      age: 'hi'
    };
    expect(() => schema.validate(cat)).toThrowError('invalid schema');
  });
});
