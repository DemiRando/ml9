const AllocateTier = (gradeArr,numMatches) => {
  const length = gradeArr.length;
  let sum = 0;
  for(let i=0; i<(length-1);i++){
    sum += gradeArr[i];
  }

  let statGrade =Math.round(sum/length);
  let majorGrade = (statGrade/10)*6;
  let minorGrade =0;
  if(numMatches>6){
    minorGrade=4;
  }else if(numMatches>3){
    minorGrade=3;
  }else if(numMatches>2){
    minorGrade=2;
  }else{
    minorGrade=1;
  }

  const finalGrade = majorGrade + minorGrade;


  return finalGrade;

  
    


}

export default AllocateTier