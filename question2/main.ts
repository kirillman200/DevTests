export function findOutlier(integers: number[]): number {


  var evenNumber = []
  var oddNumber = []

  for (var i = 0; i < integers.length; i++) {
    if ((integers[i] % 2) == 0) {
      evenNumber.push(integers[i]);
    }
    else {
      oddNumber.push(integers[i]);
    }

  }
  // checking which number is wrong and returns it
  if (evenNumber.length > oddNumber.length) {
    return oddNumber[0]
  }
  else {
    return evenNumber[0]
  }

}