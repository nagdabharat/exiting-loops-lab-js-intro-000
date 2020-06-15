function breakOut(array, changeValue, stopValue) {
  for(let i = 0; i < array.length; i++) {
    if (array.[i] === stopValue) {
      break;
    }
    array.[i] = changeValue;
  }
}

function skipValue(array, changeValue, skipValue) {
  for(let i = 0; i < array.length; i++) {
    if (array.[i] === skipValue) {
      continue;
    }
    array.[i] = changeValue;
  }
}

function findBy(array, findFn) {
  for (let i = 0; i < array.length; i++) {
      if (findFn(array[i])) {
        return findFn(array[i]);
    }
  return(null);
  }
}
