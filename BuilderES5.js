export default function BuilderES5 (initialValue) {
  this._currentResult = initialValue
}

BuilderES5.prototype.plus = function (...values) {
  for (const value of values) {
    this._currentResult += value
  }
  return this
}

BuilderES5.prototype.get = function () {
  console.log(`RESULT:${this._currentResult}`)
  return this._currentResult
}
