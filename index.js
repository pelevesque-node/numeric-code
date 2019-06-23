'use strict'

const substituteSubstrings = require('@pelevesque/substitute-substrings')

function makeDigitsInOrderOfAppearanceArray (str) {
  const digits = '123456789'
  const arr = []
  for (let i = 0, len = str.length; i < len; i++) {
    const char = str.charAt(i)
    if (digits.indexOf(char) !== -1 && arr.indexOf(char) === -1) {
      arr.push(char)
    }
  }
  return arr
}

function makeSubstitutionsArray (digits) {
  const substitutions = []
  digits.forEach((_, i) => {
    substitutions.push([digits[i], '' + (i + 1)])
  })
  return substitutions
}

function makeDigitsArray (length) {
  const arr = []
  for (let i = 1; i <= length; i++) {
    arr.push(i)
  }
  return arr
}

function rand (length) {
  return parseInt(Math.random() * length)
}

function makeRandomizedSubstitutionsArray (digits) {
  const substitutions = []
  const bag = makeDigitsArray(digits.length)
  digits.forEach((_, i) => {
    substitutions.push([digits[i], '' + bag.splice(rand(bag.length), 1)])
  })
  return substitutions
}

exports.canonicalize = str => {
  const digits = makeDigitsInOrderOfAppearanceArray(str)
  const substitutions = makeSubstitutionsArray(digits)
  return substituteSubstrings(str, substitutions)
}

exports.randomize = str => {
  const digits = makeDigitsInOrderOfAppearanceArray(str)
  const substitutions = makeRandomizedSubstitutionsArray(digits)
  return substituteSubstrings(str, substitutions)
}

module.exports = exports
