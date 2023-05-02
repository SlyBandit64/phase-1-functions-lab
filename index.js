// Code your solution in this file!
function distanceFromHqInBlocks(pickupLoc) {
    if (pickupLoc > 42) {
      return pickupLoc - 42;
    } else {
      return 42 - pickupLoc;
    }
  }
  
  function distanceFromHqInFeet(pickupLoc) {
    return distanceFromHqInBlocks(pickupLoc) * 264;
  }
  
  function distanceTravelledInFeet(start, end) {
    const distanceInBlocks = Math.abs(start - end);
    return distanceInBlocks * 264;
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
      return 0;
    } else if (distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }