var total = 0;

function delayInvoc(a) {
  if (a === undefined) {
    var result = total;
    total = null;
    return result;
  } else {
    total += a;
    return delayInvoc;
  }
};

module.exports = delayInvoc;