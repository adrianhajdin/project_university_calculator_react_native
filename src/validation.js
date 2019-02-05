import validate from 'validate.js';

// Ograničenja za validaciju
const constraints = {
  postotak: {
    numericality: {
      greaterThanOrEqualTo: 0,
      lessThanOrEqualTo: 100,
      message: 'mora biti veći od 0 i manji od 100',
    },
  },
  ocjena: {
    numericality: {
      greaterThanOrEqualTo: 1,
      lessThanOrEqualTo: 5,
      message: 'mora biti veća od 1.00 i manja od 5.00',
    },
  },
};

export default (field, value) => {
  const object = {};
  object[field] = value;

  const constraint = constraints[field];

  const result = validate(object, { [field]: constraint });

  if (result) {
    return result[field][0];
  }

  return null;
};
