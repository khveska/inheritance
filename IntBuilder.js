import BuilderES6 from './BuilderES6.js'

// ES6 Way
export default class IntBuilder extends BuilderES6 {
  constructor (operand) {
    super(operand ?? 0)
    IntBuilder.#throwErrorIfValueNotAnInteger(this._currentResult)
    this._currentResult = +this._currentResult
  }

  plus (...values) {
    for (const value of values) {
      IntBuilder.#throwErrorIfValueNotAnInteger(value)
    }
    return super.plus(...values)
  }

  minus (...values) {
    for (const value of values) {
      IntBuilder.#throwErrorIfValueNotAnInteger(value)
      this._currentResult -= +value
    }
    return this
  }

  multiply (value) {
    IntBuilder.#throwErrorIfValueNotAnInteger(value)
    this._currentResult *= value
    return this
  }

  divide (value) {
    IntBuilder.#throwErrorIfValueNotAnInteger(value)
    this._currentResult = Math.floor(this._currentResult / +value)
    return this
  }

  mod (value) {
    IntBuilder.#throwErrorIfValueNotAnInteger(value)
    this._currentResult = this._currentResult % +value
    return this
  }

  pow (value) {
    IntBuilder.#throwErrorIfValueNotAnInteger(value)
    this._currentResult = Math.pow(this._currentResult)
  }

  /**
   * Returns random value from min till max(inclusive)
   */
  static random (min, max) {
    IntBuilder.#throwErrorIfValueNotAnInteger(min)
    IntBuilder.#throwErrorIfValueNotAnInteger(max)
    if (min > max) {
      throw new Error('Left limit of random operation should be less than right limit!')
    }
    return Math.floor(min + Math.random() * (max - min + 1))
  }

  static #throwErrorIfValueNotAnInteger (value) {
    if (!Number.isInteger(value)) {
      throw new Error(`'${value}' is not a number!`)
    }
  }
}
