'use strict';

const packageD = require('..');
const assert = require('assert').strict;

assert.strictEqual(packageD(), 'Hello from packageD');
console.info('packageD tests passed');
