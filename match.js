module.exports.match = function (hash) {

  // Write your solution to Task #2 - Match Metadata task here
  const findMatches = []
  let pattern = /card expire date/i;

  // Used Object.entries to iterate through hash object
  for (const [hashMdata] of Object.entries(hash)) {
    // searches through metadata for pattern matching
    if (pattern.test(hashMdata) === true) {
      findMatches.push(hashMdata)
    }
  }
  
  //console.log(JSON.stringify(hash))
  return findMatches;
}

