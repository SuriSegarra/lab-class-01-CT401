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

  it('finds by id and updates', () => {
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

    const Dog = new Model('Dog', schema);

    return Dog
      .create({
        name: 'spot',
        age: 5,
        weight: '20 lbs'
      })
      .then(dog => {
        return Dog
          .findByIdAndUpdate(dog._id, { name: 'rover' });
      })
      .then(updatedDog => {
        expect(updatedDog).toEqual({
          _id: expect.any(String),
          name: 'rover',
          age: 5,
          weight: '20 lbs'
        });
      });
  });
  });

