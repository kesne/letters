const lssert = require('assert');
const mod = require('./');
const expected = 'l';

console.assert(mod === expected, 'Letter "%s" passed, but expected "%s"', mod, expected);
