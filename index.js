var prettybnf = require('prettybnf')

module.exports = function (source) {
  this.cacheable()
  var ast = prettybnf.parse(source)
  var value = JSON.stringify(ast)
  return `module.exports = ${value}`
}
