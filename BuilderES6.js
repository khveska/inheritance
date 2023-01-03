export default class BuilderES6 {
  constructor (initialValue) {
    if (this.constructor === BuilderES6) {
      throw new Error('This is abstract class and its constructor should not be called directly.')
    }
    this._currentResult = initialValue
  }

  plus (...values) {
    for (const value of values) {
      this._currentResult += value
    }
    return this
  }

  minus (..._values) {
    console.log('Performing "minus" operation...')
  }

  multiply (_value) {
    console.log('Performing "multiply" operation...')
  }

  divide (_value) {
    console.log('Performing "divide" operation...')
  }

  mod (_value) {
    console.log('Performing "mod" operation...')
  }

  get () {
    console.log(`RESULT:${this._currentResult}`)
    return this._currentResult
  }

  get currentResult () {
    return this._currentResult
  }
}
