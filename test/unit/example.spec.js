'use strict'

const { test } = use('Test/Suite')('Example')

test('must throw exception', async ({ assert }) => {
  try {
    throw new Error('Some error message')
  } catch ({ message }) {
    assert.equal(message, 'Some error message')
  }
}).timeout(5000)
