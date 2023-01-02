// ES5 Way Inheritance
import BuilderES5 from './BuilderES5.js'

export default function StringBuilder (initialValue = '') {
  StringBuilder._throwErrorIfValueNotAString(initialValue)
  BuilderES5.prototype.constructor.call(this, initialValue)
}

StringBuilder.prototype = Object.create(BuilderES5.prototype)
StringBuilder.prototype.constructor = StringBuilder

StringBuilder.prototype.minus = function (charsCountToCut) {
  StringBuilder._throwErrorIfValueNotAnInteger(charsCountToCut)
  this._currentResult = this._currentResult.slice(0, -charsCountToCut)
  return this
}

StringBuilder.prototype.multiply = function (repeatTimes) {
  StringBuilder._throwErrorIfValueNotAnInteger(repeatTimes)
  const curValue = this._currentResult
  for (let i = 1; i < repeatTimes; i++) {
    this.plus(curValue)
  }
  return this
}

StringBuilder.prototype.divide = function (n) {
  StringBuilder._throwErrorIfValueNotAnInteger(n)
  const charsToLeave = Math.floor(this._currentResult.length / n)
  this._currentResult = this._currentResult.slice(0, charsToLeave)
  return this
}

StringBuilder.prototype.remove = function (str) {
  StringBuilder._throwErrorIfValueNotAString(str)
  this._currentResult = this._currentResult.split(str).join('')
  return this
}

StringBuilder.prototype.sub = function (from, n) {
  StringBuilder._throwErrorIfValueNotAnInteger(from)
  StringBuilder._throwErrorIfValueNotAnInteger(n)
  this._currentResult = this._currentResult.slice(from, from + n)
  return this
}

StringBuilder._throwErrorIfValueNotAnInteger = function (value) {
  if (!Number.isInteger(value)) {
    throw new Error(`'${value}' is not a number!`)
  }
}

StringBuilder._throwErrorIfValueNotAString = function (value) {
  if (typeof value !== 'string' && !(value instanceof String)) {
    throw new Error(`'${value}' is not a string!`)
  }
}
