const Schema = require('./lib/schemas.js');
const Model = require('./lib/Model.js');

describe('Model class', () => {
  it('creates a new document', () => {
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
        type: String
      }
    });
    const Dog = new Model('Dog', schema);

    return Dog
      .create({
        name: 'Tom',
        age: 4,
        weight: '10 lbs'
      })
      .then(dog => {
        expect(dog).toEqual({
          _id: expect.any(String),
          name: 'Tom',
          age: 4,
          weight: '10 lbs'
        });
      });
  });

  it('finds by id', () => {
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
  });
});
