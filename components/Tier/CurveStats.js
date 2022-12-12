import SetTier from "./SetTier";

const CurveStats = async (arr,role) => {
   
    
    let gradesArr = [];
    let idArr = [];
    let numArr = [];
    let highest = 0;
    let highestID = 0;
    let highestNumMatch = 0;

    function avgSum(array) {
        let sum = 0;
        let avg;
        for (let i = 0; i < array.length; i ++) {
          sum += array[i];
        }
        avg = sum/array.length;
        return avg;
      }
    function gradeArrPopulate(array){
        for(i=0;i<array.length;i++){
            let y = array[i];
            gradesArr.push(y[1]);
        }
    }

    function idArrPopulate(a){
        for(i=0;i<a.length;i++){
            let x = a[i];
            idArr.push(x[0]);
        }
    }

    function numMatchPopulate(a){
        for(i=0;i<a.length;i++){
            let z = a[i];
            numArr.push(z[2]);
        }
    }

    function sdCalc(array,mean){
       
          // Assigning (value - mean) ^ 2 to every array item
          array = array.map((k)=>{
            return (k - mean) ** 2
          })
           
          // Calculating the sum of updated array
         let sum = array.reduce((acc, curr)=> acc + curr, 0);
          
         // Calculating the variance
         let variance = sum / array.length
          
         // Returning the Standered deviation
         return Math.sqrt(variance);
    }

    gradeArrPopulate(arr);
    idArrPopulate(arr);
    numMatchPopulate(arr);


    let meanGrade =  avgSum(gradesArr);
    let standardDev = sdCalc(gradesArr,meanGrade);
    let adjustedMean = parseFloat( meanGrade.toFixed(1)) - 0.1;
    let adjustedSD = parseFloat( standardDev.toFixed(1)) - 0.1;
    let sTier = parseFloat(adjustedMean + (2 * adjustedSD)).toFixed(1) ;
    let aTier = parseFloat(adjustedMean + adjustedSD).toFixed(1);
    let bTier = parseFloat(adjustedMean).toFixed(1);
    let cTier = parseFloat(adjustedMean - adjustedSD).toFixed(1);
    
   // console.log(arr);
    
    for(i=0;i<arr.length;i++){

        if(gradesArr[i] >highest){
            highest = gradesArr[i];
            highestID = idArr[i];
            highestNumMatch = numArr[i]
        }

        let ID = idArr[i];
        let num = numArr[i];
        if((gradesArr[i] >= sTier) && (num >=4)){
            await SetTier('S',ID,role)
           // console.log(gradesArr[i] + ' >= ' + sTier +' ID:' + ID);
        }else if(gradesArr[i] >= aTier){
            await SetTier('A',ID,role)
            //console.log(gradesArr[i] + ' >= ' + aTier +' ID:' + ID);
        }else if(gradesArr[i] >= bTier){
            await SetTier('B',ID,role)
           // console.log(gradesArr[i] + ' >= ' + bTier +' ID:' + ID);
        }else if(gradesArr[i] >= cTier){
            await SetTier('C',ID,role)
            //console.log(gradesArr[i] + ' >= ' + cTier +' ID:' + ID);
        }else{
            await SetTier('D',ID,role)
            //console.log(gradesArr[i] + ' less than ' + cTier +' ID:' + ID) ;
        }
    }

    if((highest < sTier) && highestNumMatch >= 4){
        await SetTier('S',highestID,role)
    }
   
}

export default CurveStats