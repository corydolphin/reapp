module.exports = function(dir) {
  try {
    var package = require(dir + '/package.json');

    if (!package.reapp)
      error();
  }
  catch (e) {
    error(e);
  }
}

function error(e) {
  if (e)
    console.log(e)
  else
    console.error('No reapp application found, ensure reapp: "true" is set in package.json.');

  process.exit(1);
}