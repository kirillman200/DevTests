export function isValidWalk(walk: string[]) {
  

  var person = [0, 0]
  var finalDestination = [0, 0]


  for (var i = 0; i <= 10; i++) {

    switch(walk[i]) {
        case "n": person[0]++; break;
        case "e": person[1]++; break;
        case "s": person[0]--; break;
        case "w": person[1]--; break;
      }

  }
  return person[0] === finalDestination[0] &&
       person[1] === finalDestination[1];


  
 
}

