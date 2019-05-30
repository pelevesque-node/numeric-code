[![Build Status](https://travis-ci.org/pelevesque/numeric-code.svg?branch=master)](https://travis-ci.org/pelevesque/numeric-code)
[![Coverage Status](https://coveralls.io/repos/github/pelevesque/numeric-code/badge.svg?branch=master)](https://coveralls.io/github/pelevesque/numeric-code?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# numeric-code

Tool for working with a custom numeric code system.

The numeric code is made up of digits from `1` to `9` inclusively. `0` and any
other symbol can be included, but will be ignored when processing.

Ex: `091230/129830`

This numeric code system can be used to denote positions of elements in a game
using `0` for empty spaces.

For example, we could use this code `00210/00211/00210/00211/00200` to denote a
the following go position on a 5 x 5 board. The numbers `1` and `2` could denote
the black and white stone colors. We could then obtain a canonicalization or a
randomization of the position using this module.

0 0 2 1 0  
0 0 2 1 1  
0 0 2 1 0  
0 0 2 1 1  
0 0 2 0 0  

## Node Repository

https://www.npmjs.com/package/@pelevesque/numeric-code

## Installation

`npm install @pelevesque/numeric-code`

## Tests

### Standard Style & Unit Tests

`npm test`

### Unit Tests & Coverage

`npm run cover`

## Methods

- `canonicalize` canonicalizes a numeric code
- `randomize` randomizes a numeric code

## Usage

### Initialization

#### Requiring the Entire Module

```js
const numericCode = require('@pelevesque/numeric-code')
```

#### Requiring a Specific Method

```js
const numericCode = require('@pelevesque/numeric-code').canonicalize
```

### Canonicalize

Canonicalizing the numeric code does two things:

1. The code is flattened to avoid jumps between digits.  
2. The code is ordered chronologically.

```js
const str = '008213/923480'
const result = numericCode.canonicalize(str)
// result === '001234/524610'
```

### Randomize

Randomizing the numeric code does two things:

1. The code is flattened to avoid jumps between digits.  
2. The code is ordered randomly.

```js
const str = '008213/923480'
const result = numericCode.randomize(str)
// result === '004312/532640'
```
