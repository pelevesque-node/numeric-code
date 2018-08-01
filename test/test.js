/* global describe, it */
'use strict'

const expect = require('chai').expect
const numericCode = require('../index')

function getArrayOfRandomizedPossibilities (str) {
  const arr = []
  for (let i = 0; i < 10000; i++) {
    const result = numericCode.randomize(str)
    if (arr.indexOf(result) === -1) {
      arr.push(result)
    }
    if (arr.length === 6) {
      break
    }
  }
  arr.sort()
  return arr
}

function getStringOfArrayElements (arr) {
  let str = ''
  for (let i = 0, len = arr.length; i < len; i++) {
    str += arr[i]
  }
  return str
}

describe('#numeric-code', () => {
  describe('#canonicalize()', () => {
    it('should work with a simple code', () => {
      const str = '54321'
      const result = numericCode.canonicalize(str)
      const expected = '12345'
      expect(result).to.equal(expected)
    })

    it('should work with a complex code without digit jumps', () => {
      const str = '991128635477'
      const result = numericCode.canonicalize(str)
      const expected = '112234567899'
      expect(result).to.equal(expected)
    })

    it('should work with a complex code with digit jumps', () => {
      const str = '9933492621'
      const result = numericCode.canonicalize(str)
      const expected = '1122314546'
      expect(result).to.equal(expected)
    })

    it('should ignore 0', () => {
      const str = '90050400'
      const result = numericCode.canonicalize(str)
      const expected = '10020300'
      expect(result).to.equal(expected)
    })

    it('should ignore non digits', () => {
      const str = '321/543/321'
      const result = numericCode.canonicalize(str)
      const expected = '123/451/123'
      expect(result).to.equal(expected)
    })

    it('should work with a combination of complexities', () => {
      const str = '03210/983/30201'
      const result = numericCode.canonicalize(str)
      const expected = '01230/451/10203'
      expect(result).to.equal(expected)
    })
  })

  describe('#randomize()', () => {
    it('should work with a simple code', () => {
      const str = '123'
      const arr = getArrayOfRandomizedPossibilities(str)
      const result = getStringOfArrayElements(arr)
      const expected = '123132213231312321'
      expect(result).to.equal(expected)
    })

    it('should work with a complex code without digit jumps', () => {
      const str = '3123221'
      const arr = getArrayOfRandomizedPossibilities(str)
      const result = getStringOfArrayElements(arr)
      const expected = '123133213212232132331231211331232213213112'
      expect(result).to.equal(expected)
    })

    it('should work with a complex code with digit jumps', () => {
      const str = '1491994'
      const arr = getArrayOfRandomizedPossibilities(str)
      const result = getStringOfArrayElements(arr)
      const expected = '123133213212232132331231211331232213213112'
      expect(result).to.equal(expected)
    })

    it('should ignore 0', () => {
      const str = '01230'
      const arr = getArrayOfRandomizedPossibilities(str)
      const result = getStringOfArrayElements(arr)
      const expected = '012300132002130023100312003210'
      expect(result).to.equal(expected)
    })

    it('should ignore non-digits', () => {
      const str = '/123/'
      const arr = getArrayOfRandomizedPossibilities(str)
      const result = getStringOfArrayElements(arr)
      const expected = '/123//132//213//231//312//321/'
      expect(result).to.equal(expected)
    })

    it('should work with a combination of complexities', () => {
      const str = '/014919940/'
      const arr = getArrayOfRandomizedPossibilities(str)
      const result = getStringOfArrayElements(arr)
      const expected = '/012313320//013212230//021323310//023121130//031232210//032131120/'
      expect(result).to.equal(expected)
    })
  })
})
