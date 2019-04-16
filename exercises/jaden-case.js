'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase (parameter){
    return (parameter.toUpperCase());
}

//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof jadenCase, 'function', 'Should be a function')
assert.strictEqual(jadenCase.length, 1, 'Should takes 1 arguments')
assert.strictEqual(jadenCase('Salut'), 'SALUT')
assert.strictEqual(jadenCase('azertyuiopqsdfghjklm'), 'AZERTYUIOPQSDFGHJKLM')
// End of tests */
