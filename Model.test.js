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
    const Cat = new Model('Cat', schema);

    return Cat
      .create({
        name: 'Tom',
        age: 4,
        weight: '10 lbs'
      })
      .then(cat => {
        expect(cat).toEqual({
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

    const Cat = new Model('Cat', schema);

    return Cat
      .create({
        name: 'Tom',
        age: 4,
        weight: '10 lbs'
      })
      .then(cat => {
        return Cat
          .findByIdAndUpdate(cat._id, { name: 'rover' });
      })
      .then(updatedCat => {
        expect(updatedCat).toEqual({
          _id: expect.any(String),
          name: 'Tim',
          age: 4,
          weight: '10 lbs'
        });
      });
  });
  
});

