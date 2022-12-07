module.exports.match = function (hash) {
  const findMatches = []
  let pattern = /card expire date/i;

  // Used Object.entries to iterate through hash object
  for (const [hashMdata] of Object.entries(hash)) {
    // searches through metadata for pattern matching
    pattern.test(hashMdata) === true ? findMatches.push(hashMdata) : false;
    }
  }
  return findMatches;
}