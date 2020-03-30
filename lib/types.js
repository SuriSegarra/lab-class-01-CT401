//number
const isNumber = val => typeof val === 'number';

const castToNumber = val => {
  if(isNumber(val)) return val;
  const number = Number(val);
  if(isNaN(number)) throw new CastError(Number, val);
  return number;
};
//string
const isString = val => typeof val === 'string';

const castToString = val => {
//if val is a string return val (true)
  if(isString(val)) return val;
  const string = String(val);
  //if the type of string is an object or  is not a string, throw a new error
  if(typeof val === 'object' || !string) throw new CastError(String, val);
  return string;
};

//boolean
const isBoolean = val => typeof val === 'boolean';

const castToBoolean = val => {
  if(isBoolean(val)) return val;
  if(val === 'false' || val === 0) return false;
  if(val === 'true' || val === 1) return true;
  throw new CastError (Boolean, val); 
};

//Array

const isArray = arr => Array.isArray(arr);

const isObject = val => typeof val === 'object';

const isFunction = val => typeof val === 'function';


class CastError extends Error {
  constructor(Type, value) {
    const type = Type.name;
    super(`Cannot cast >>${value}<< to ${type}`);
    this.type = type;
    this.value = value;
  }
}


const casters = {
  Number: castToNumber,
  String: castToString,
  Boolean:castToBoolean,
  
};

const getCaster = Type => {  
  return casters[Type.name] || null;
};

module.exports = {
  isNumber,
  CastError,
  getCaster,
  castToNumber,
  isString,
  castToString,
  isBoolean,
  castToBoolean,
  isArray,
  isObject,
  isFunction,

};
