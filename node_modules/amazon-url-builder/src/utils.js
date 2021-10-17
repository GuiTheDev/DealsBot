/**
 * Sprintf-like function
 * This function is taken out of SO's code
 * @see: https://stackoverflow.com/a/18234317
 * @see: https://meta.stackexchange.com/questions/207128/what-is-formatunicorn-for-strings
 * @param {string} string - Format string
 * @param {object} replacements - Keys-values object for replacement
 * @returns {string}
 */
const formatUnicorn = function (string, replacements) {
  if (!string) {
    throw new Error('String should be supplied')
  }

  let str = string.toString()

  for (const key in replacements) {
    str = str.replace(new RegExp('\\{' + key + '\\}', 'gi'), replacements[key])
  }

  return str
}

module.exports = { formatUnicorn }
