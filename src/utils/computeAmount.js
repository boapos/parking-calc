export default computeAmount = (timeIn, timeOut = Date.now()) => {
  console.log(timeIn, timeOut);
  var hours = Math.ceil(Math.abs(timeOut - timeIn) / 36e5);
  if (hours <= 2) {
    return 20;
  } else {
    var total = 20 + (hours - 2) * 5;
    return total;
  }
};
