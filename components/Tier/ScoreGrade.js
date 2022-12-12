const ScoreGrade = (playerStats,globalStats) => {
  
    let gradeArr =[]
    const Grade = (i) =>{
        //need to convert each stat into a value from 1-10
        // any value 10% less than highest should be 10
        //20%-9,30-8,40-7,50-6,60-4,70-3,80-2,90-1

        //the global stats is the mean,multiply it by 1.5
        //let this be our max range, let deviation be maxrange/11
        let score = 10
        let playerStat = playerStats[i];
        let highestStat = globalStats[i] * 1.5;
        const deviation = (globalStats[i]*1.5)/11;
        let deviationCount = highestStat;   
        for(j=0;j<9;j++){
            
           if(playerStat >= deviationCount){
            return score;
           } 
           score--;
           deviationCount -= deviation;
        }

    }


    for(i=0;i<(globalStats.length-1);i++){
     
        let newGrade = Grade(i);
        if(typeof newGrade !== 'undefined'){
            gradeArr.push(newGrade);
        }
        else{
            gradeArr.push(1);
        }
        

    }

    return gradeArr;
  
  
  
  
  
  
    /*
   
    //there are 10 values in the avgJglStats array, 9 are stats
    //with the 10th being the total match count
    //use the highest jglstat array to determine what is S tier and work downwards.
    let gradeArr =[]
    const Grade = (i) =>{
        //need to convert each stat into a value from 1-10
        // any value 10% less than highest should be 10
        //20%-9,30-8,40-7,50-6,60-4,70-3,80-2,90-1
        let score = 10
        for(j=1;j<10;j++){
           let avgStat = avgJglStats[i];
           let highestStat = highestJglStatArr[i];
           let percentage = j/10;
           let reducedHighestStat = highestStat - (highestStat * percentage);
           if(avgStat >= reducedHighestStat){
            return score;
           } 
           score--;

        }

    }


    for(i=0;i<highestJglStatArr.length;i++){
     
        let newGrade = Grade(i);
        if(typeof newGrade !== 'undefined'){
            gradeArr.push(newGrade);
        }
        else{
            gradeArr.push(1);
        }
        

    }

    return gradeArr;
    */
}

export default ScoreGrade