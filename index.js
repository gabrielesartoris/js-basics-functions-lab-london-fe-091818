function distanceFromHqInBlocks(block)  {
  let hq = 42;
  if (block < hq) {
    return hq - block;
  }
  return block - hq;
}

function distanceFromHqInFeet(block) {
  let blocks= distanceFromHqInBlocks(block);
  return blocks * 264;
}

function distanceTravelledInFeet(startingblock, endingblock) {
  return (startingblock - endingblock) * 264
  
  if (distanceFromHqInFeet > 0 ) {
  return (startingblock - endingblock) * 264
  }
}

function calculatesFarePrice() {
  
}