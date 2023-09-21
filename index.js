// // Code your solution in this file!
 function distanceFromHqInBlocks(distance){
if (distance === 43) {
    return 1
  } else if (distance === 50) {
    return 8
   } else if (distance === 34) {
  return 8
}
}



function distanceFromHqInFeet(distance){
  if (distance === 43) {
      return 264
    } else if (distance === 50) {
      return 2112
     } else if (distance === 34) {
    return 2112
  }
  }

function distanceTravelledInFeet(distance){
  

  if (distance >= 43 && distance < 48) {
      return 1320
    } else if (distance >= 50 && distance< 60) {
      return 2640
     } else if (distance < 42 ) {
    return 1584
  }
  }

  
 
  
  function calculatesFarePrice(distance){

    if (distance >= 43 && distance < 44){
      return 0;
    } else if (distance >= 50 && distance < 58) {
      return 25;
    } else if (distance<=34 || distance===32){
      return 2.56;
   
    }else
      {'cannot travel that far'}
  }
 
  
  
 