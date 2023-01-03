export default function BuilderES5 (initialValue) {
  this._currentResult = initialValue
}

BuilderES5.prototype.plus = function () {
  for (var i = 0; i < arguments.length; i++) {
    this._currentResult += arguments[i]
  }
  return this
}

BuilderES5.prototype.get = function () {
  console.log(`RESULT:${this._currentResult}`)
  return this._currentResult
}
