module.exports.match = function (hash) {
  const foundMatches = []
  
  // Used Object.entries to iterate through hash object
  const lookFor = new RegExp(/expire/, 'i')
  for (const [hashMdata] of Object.entries(hash)) {
    // searches through metadata for pattern matching
    lookFor.test(hashMdata) === true ? foundMatches.push(hashMdata) : false;
  }

  // for viewing returned data when running tests
  console.log(foundMatches)
  return foundMatches;
}
