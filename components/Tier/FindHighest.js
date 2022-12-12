const FindHighest = (globalArr) => {
  length = globalArr.length;
  let largest = 0;


  for(i=0;i<length;i++){
   
        if(globalArr[i]>largest){
            largest = globalArr[i]
        }

        i++;
  }

  return largest;
}

export default FindHighest