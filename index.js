const math = require('@useless-javascript-modules/math')
const sum = require('@useless-javascript-modules/sum')
const mean = require('@useless-javascript-modules/mean')

module.exports = function standardDeviation(terms){
    const meanOfTerms = mean(terms)
    return math('divide',sum(terms.map((val)=>math('pow',Math.abs(val - meanOfTerms),2))),terms.length)
}
