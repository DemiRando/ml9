import SanityClient from '../../sanity'
import FindHighest from './FindHighest';

const GlobalStats = async(role) => {
    
    let returnVal1=[];
    let returnVal2=[];
    let query1;
    let query2;

    let assistsArr = [];
    let damageDealtArr = [];
    let damageReceivedArr = [];
    let deathsArr = [];
    let durationArr = [];
    let goldArr = [];
    let killsArr = [];
    let pushArr = [];
    let teamFightArr = [];
    let totalMatches = 12;

    let  statsArr = [];

    let highestAssist;
    let highestDamageDealt;
    let highestDamageReceived;
    let avgDeaths;
    let highestDuration;
    let highestGold;
    let highestKills;
    let highestPush;
    let highestTeamFight;
    let KDA;


    function avgSum(array) {
        let sum = 0;
        let avg;
        for (let i = 0; i < array.length; i ++) {
          sum += array[i];
        }
        avg = Math.round(sum/array.length);
        return avg;
      }


    if(role === 'Jungle'){
        query1 = `*[_type == "g7" ]| order(matchnum desc){
            "kills":jgl1Kills,"deaths":jgl1Death,"assists":jgl1Assists,
            "damageDealt":jgl1DamageDealt,"damageReceived":jgl1DamageReceived,
            "push":jgl1Push,"gold":jgl1Gold,"teamFight":jgl1Participation,"duration":duration
      }[0...50]`

      query2 = `*[_type == "g7" ]| order(matchnum desc){
        "kills":jgl2Kills,"deaths":jgl2Death,"assists":jgl2Assists,
      "damageDealt":jgl2DamageDealt,"damageReceived":jgl2DamageReceived,
      "push":jgl2Push,"gold":jgl2Gold,"teamFight":jgl2Participation,"duration":duration
  }[0...50]`
    }

    if(role === 'Mid'){
        query1 = `*[_type == "g7" ]| order(matchnum desc){
            "kills":mid1Kills,"deaths":mid1Death,"assists":mid1Assists,
            "damageDealt":mid1DamageDealt,"damageReceived":mid1DamageReceived,
            "push":mid1Push,"gold":mid1Gold,"teamFight":mid1Participation,"duration":duration
      }[0...50]`

      query2 = `*[_type == "g7" ]| order(matchnum desc){
        "kills":mid2Kills,"deaths":mid2Death,"assists":mid2Assists,
      "damageDealt":mid2DamageDealt,"damageReceived":mid2DamageReceived,
      "push":mid2Push,"gold":mid2Gold,"teamFight":mid2Participation,"duration":duration
  }[0...50]`
    }

    if(role === 'Roam'){
        query1 = `*[_type == "g7" ]| order(matchnum desc){
            "kills":roam1Kills,"deaths":roam1Death,"assists":roam1Assists,
      "damageDealt":roam1DamageDealt,"damageReceived":roam1DamageReceived,
      "push":roam1Push,"gold":roam1Gold,"teamFight":roam1Participation,"duration":duration
      }[0...50]`

      query2 = `*[_type == "g7" ]| order(matchnum desc){
        "kills":roam2Kills,"deaths":roam2Death,"assists":roam2Assists,
      "damageDealt":roam2DamageDealt,"damageReceived":roam2DamageReceived,
      "push":roam2Push,"gold":roam2Gold,"teamFight":roam2Participation,"duration":duration
  }[0...50]`
    }

    if(role === 'Xp'){
        query1 = `*[_type == "g7" ]| order(matchnum desc){
            "kills":xp1Kills,"deaths":xp1Death,"assists":xp1Assists,
      "damageDealt":xp1DamageDealt,"damageReceived":xp1DamageReceived,
      "push":xp1Push,"gold":xp1Gold,"teamFight":xp1Participation,"duration":duration
      }[0...50]`

      query2 = `*[_type == "g7" ]| order(matchnum desc){
        "kills":xp2Kills,"deaths":xp2Death,"assists":xp2Assists,
      "damageDealt":xp2DamageDealt,"damageReceived":xp2DamageReceived,
      "push":xp2Push,"gold":xp2Gold,"teamFight":xp2Participation,"duration":duration
  }[0...50]`
    }

    if(role === 'Gold'){
        query1 = `*[_type == "g7" ]| order(matchnum desc){
            "kills":gold1Kills,"deaths":gold1Death,"assists":gold1Assists,
      "damageDealt":gold1DamageDealt,"damageReceived":gold1DamageReceived,
      "push":gold1Push,"gold":gold1Gold,"teamFight":gold1Participation,"duration":duration
      }[0...50]`

      query2 = `*[_type == "g7" ]| order(matchnum desc){
        "kills":gold2Kills,"deaths":gold2Death,"assists":gold2Assists,
      "damageDealt":gold2DamageDealt,"damageReceived":gold2DamageReceived,
      "push":gold2Push,"gold":gold2Gold,"teamFight":gold2Participation,"duration":duration
  }[0...50]`
    }

    const  fetchData1 = async (query) =>{
        
    let fetchedData;
    await SanityClient.fetch(query).then((data) => {
    fetchedData = data ;
    })
    
    return fetchedData;
    };

    const  fetchData2 = async (query) =>{
        
        let fetchedData;
        await SanityClient.fetch(query).then((data) => {
        fetchedData = data ;
        })
        
        return fetchedData;
        };

    async function fetchResult1() {
        const result = await fetchData1(query1);
        return result;  
    }

    async function fetchResult2() {
        const result = await fetchData2(query2);
        return result;  
    }
    
   await fetchResult1().then((result1)=>{
        if(result1 !== 'undefined'){
          returnVal1 = result1;
          
          
        }
          })
      
    await  fetchResult2().then((result2)=>{
        if(result2 !== 'undefined'){
          returnVal2 = result2;
          
        }
          })
      
   let returnVal = [returnVal1,returnVal2]; 
   
  
      if(returnVal.length>0){
        for(let i=0;i<returnVal.length;i++){
          let y = returnVal[i]
          let yLength = y.length;
          for(let j=0;j<yLength;j++){
            let z = y[j];
            const { assists, damageDealt,damageReceived,deaths,duration,gold,kills,push,teamFight } = z;
            assistsArr.push(assists);
            damageDealtArr.push(damageDealt);
            damageReceivedArr.push(damageReceived);
            deathsArr.push(deaths);
            durationArr.push(duration);
            goldArr.push(gold);
            killsArr.push(kills);
            pushArr.push(push);
            teamFightArr.push(teamFight);
        }

        }
//change from highest to avg, in the allocation place
//if score === avg global, 5/10
//>5.5=C, >7=B, >8.5=A,
//55% of the mean is what will be the sd        
     highestAssist = avgSum(assistsArr);
     highestDamageDealt = avgSum(damageDealtArr);
     highestDamageReceived = avgSum(damageReceivedArr);
     avgDeaths = avgSum(deathsArr);
     highestDuration = avgSum(durationArr);
     highestGold = avgSum(goldArr);
     highestKills = avgSum(killsArr);
     highestPush = avgSum(pushArr);
     highestTeamFight = avgSum(teamFightArr);
     KDA = (highestKills+highestAssist)/Math.max(1,avgDeaths);
      }
      
    statsArr.push(KDA);
    statsArr.push(highestDamageDealt);
    statsArr.push(highestDamageReceived);
    statsArr.push(highestDuration);
    statsArr.push(highestGold);
    statsArr.push(highestPush);
    statsArr.push(highestTeamFight);
    statsArr.push(totalMatches);
    statsArr.push(avgDeaths)
    
    //console.log(statsArr);

    return statsArr;
      





}

export default GlobalStats