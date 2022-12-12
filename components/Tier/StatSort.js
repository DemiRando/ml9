import SanityClient from '../../sanity'
import ScoreSort from './ScoreSort';
import ScoreGrade from './ScoreGrade';
import GlobalStats from './GlobalStats';
import SetTier from './SetTier';
import CreateTier from './CreateTier';
import CurveStats from './CurveStats';

const StatSort = async (arrayRef,arrayID) => {
  console.log('Started');
 let jgl = [];
 let mid = [];
 let roam = [];
 let xp =[];
 let gold = [];

 let jglTierStatsArr = [];
 let midTierStatsArr = [];
 let roamTierStatsArr = [];
 let xpTierStatsArr = [];
 let goldTierStatsArr = [];


 let globalJgl=[];
 let globalMid=[];
 let globalRoam=[];
 let globalXp=[];
 let globalGold=[];
 
 const getStats = async(role) => {
 return await GlobalStats(role);
  
}
globalJgl = await getStats('Jungle');
globalMid = await getStats('Mid');
globalRoam = await getStats('Roam');
globalXp = await getStats('Xp');
globalGold = await getStats('Gold');

//console.log(globalMid);




 const  jgl1Fetch = async (i) =>{
    const query = `*[_type == "g7" && jgl1ID == $id ]| order(matchnum){
      "kills":jgl1Kills,"deaths":jgl1Death,"assists":jgl1Assists,
      "damageDealt":jgl1DamageDealt,"damageReceived":jgl1DamageReceived,
      "push":jgl1Push,"gold":jgl1Gold,"teamFight":jgl1Participation,"duration":duration
    }`
  const params = {id: +arrayID[i]}
  let jgl1Data;
 await SanityClient.fetch(query, params).then((data) => {
  jgl1Data = data ;
  })
  
  return jgl1Data;
  }

  const  jgl2Fetch = async (i) =>{
    const query = `*[_type == "g7" && jgl2ID == $id ]| order(matchnum){
      "kills":jgl2Kills,"deaths":jgl2Death,"assists":jgl2Assists,
      "damageDealt":jgl2DamageDealt,"damageReceived":jgl2DamageReceived,
      "push":jgl2Push,"gold":jgl2Gold,"teamFight":jgl2Participation,"duration":duration
    }`
  const params = {id: +arrayID[i]}
  let jgl2Data;
 await SanityClient.fetch(query, params).then((data) => {
  jgl2Data = data ;
  //console.log('hello');
  })
  return jgl2Data;
  }

  const  mid1Fetch = async (i) =>{
    const query = `*[_type == "g7" && mid1ID == $id ]| order(matchnum){
      "kills":mid1Kills,"deaths":mid1Death,"assists":mid1Assists,
      "damageDealt":mid1DamageDealt,"damageReceived":mid1DamageReceived,
      "push":mid1Push,"gold":mid1Gold,"teamFight":mid1Participation,"duration":duration
    }`
  const params = {id: +arrayID[i]}
  let mid1Data;
 await SanityClient.fetch(query, params).then((data) => {
  mid1Data = data ;
  })
  return mid1Data;
  }

  const  mid2Fetch = async (i) =>{
    const query = `*[_type == "g7" && mid2ID == $id ]| order(matchnum){
      "kills":mid2Kills,"deaths":mid2Death,"assists":mid2Assists,
      "damageDealt":mid2DamageDealt,"damageReceived":mid2DamageReceived,
      "push":mid2Push,"gold":mid2Gold,"teamFight":mid2Participation,"duration":duration
    }`
  const params = {id: +arrayID[i]}
  let mid2Data;
 await SanityClient.fetch(query, params).then((data) => {
  mid2Data = data ;
  })
  return mid2Data;
  }

  const  roam1Fetch = async (i) =>{
    const query = `*[_type == "g7" && roam1ID == $id ]| order(matchnum){
      "kills":roam1Kills,"deaths":roam1Death,"assists":roam1Assists,
      "damageDealt":roam1DamageDealt,"damageReceived":roam1DamageReceived,
      "push":roam1Push,"gold":roam1Gold,"teamFight":roam1Participation,"duration":duration
    }`
  const params = {id: +arrayID[i]}
  let roam1Data;
 await SanityClient.fetch(query, params).then((data) => {
  roam1Data = data ;
  })
  return roam1Data;
  }

  const  roam2Fetch = async (i) =>{
    const query = `*[_type == "g7" && roam2ID == $id ]| order(matchnum){
      "kills":roam2Kills,"deaths":roam2Death,"assists":roam2Assists,
      "damageDealt":roam2DamageDealt,"damageReceived":roam2DamageReceived,
      "push":roam2Push,"gold":roam2Gold,"teamFight":roam2Participation,"duration":duration
    }`
  const params = {id: +arrayID[i]}
  let roam2Data;
 await SanityClient.fetch(query, params).then((data) => {
  roam2Data = data ;
  })
  return roam2Data;
  }

  const  xp1Fetch = async (i) =>{
    const query = `*[_type == "g7" && xp1ID == $id ]| order(matchnum){
      "kills":xp1Kills,"deaths":xp1Death,"assists":xp1Assists,
      "damageDealt":xp1DamageDealt,"damageReceived":xp1DamageReceived,
      "push":xp1Push,"gold":xp1Gold,"teamFight":xp1Participation,"duration":duration
    }`
  const params = {id: +arrayID[i]}
  let xp1Data;
 await SanityClient.fetch(query, params).then((data) => {
  xp1Data = data ;
  })
  return xp1Data;
  }

  const  xp2Fetch = async (i) =>{
    const query = `*[_type == "g7" && xp2ID == $id ]| order(matchnum){
      "kills":xp2Kills,"deaths":xp2Death,"assists":xp2Assists,
      "damageDealt":xp2DamageDealt,"damageReceived":xp2DamageReceived,
      "push":xp2Push,"gold":xp2Gold,"teamFight":xp2Participation,"duration":duration
    }`
  const params = {id: +arrayID[i]}
  let xp2Data;
 await SanityClient.fetch(query, params).then((data) => {
  xp2Data = data ;
  })
  return xp2Data;
  }

  const  gold1Fetch = async (i) =>{
    const query = `*[_type == "g7" && gold1ID == $id ]| order(matchnum){
      "kills":gold1Kills,"deaths":gold1Death,"assists":gold1Assists,
      "damageDealt":gold1DamageDealt,"damageReceived":gold1DamageReceived,
      "push":gold1Push,"gold":gold1Gold,"teamFight":gold1Participation,"duration":duration
    }`
  const params = {id: +arrayID[i]}
  let gold1Data;
 await SanityClient.fetch(query, params).then((data) => {
  gold1Data = data ;
  })
  return gold1Data;
  }

  const  gold2Fetch = async (i) =>{
    const query = `*[_type == "g7" && gold2ID == $id ]| order(matchnum){
      "kills":gold2Kills,"deaths":gold2Death,"assists":gold2Assists,
      "damageDealt":gold2DamageDealt,"damageReceived":gold2DamageReceived,
      "push":gold2Push,"gold":gold2Gold,"teamFight":gold2Participation,"duration":duration
    }`
  const params = {id: +arrayID[i]}
  let gold2Data;
 await SanityClient.fetch(query, params).then((data) => {
  gold2Data = data ;
  })
  return gold2Data;
  }

  async function fetchJgl1(i) {
    const jgl1 = await jgl1Fetch(i);;
    return jgl1;  
  }

  async function fetchJgl2(i) {
    const jgl2 = await jgl2Fetch(i);;
    return jgl2;  
  }

  async function fetchMid1(i) {
    const mid1 = await mid1Fetch(i);;
    return mid1;  
  }

  async function fetchMid2(i) {
    const mid2 = await mid2Fetch(i);;
    return mid2;  
  }

  async function fetchRoam1(i) {
    const roam1 = await roam1Fetch(i);;
    return roam1;  
  }

  async function fetchRoam2(i) {
    const roam2 = await roam2Fetch(i);;
    return roam2;  
  }

  async function fetchXp1(i) {
    const xp1 = await xp1Fetch(i);;
    return xp1;  
  }

  async function fetchXp2(i) {
    const xp2 = await xp2Fetch(i);;
    return xp2;  
  }

  async function fetchGold1(i) {
    const gold1 = await gold1Fetch(i);;
    return gold1;  
  }

  async function fetchGold2(i) {
    const gold2 = await gold2Fetch(i);;
    return gold2;  
  }

  const jglTier = async (i) =>{
  await fetchJgl1(i).then((jgl1)=>{
    if(jgl1.length > 0){
      jgl = jgl1;
     // console.log(jgl);
    }
      })
  
  await fetchJgl2(i).then((jgl2)=>{
    //console.log(jgl2);
   
    if(jgl2.length > 0){
     
      if(jgl.length>0){
        let concat = jgl.concat(jgl2);
        jgl = concat;
        
      }else {
        jgl = jgl2;
      
    }
    
      
      //console.log('c');
    }
    //console.log(jgl.length);
  })
  
  if(jgl.length>1){
    let avgJglStats = ScoreSort(jgl);
   //console.log(avgJglStats);
    
  let tierStatsArr = await CreateTier(globalJgl,avgJglStats,arrayID[i],'Jungle');
  jglTierStatsArr.push(tierStatsArr);
  jgl = [];
  
  
  }
}

const midTier = async (i) =>{
  await fetchMid1(i).then((mid1)=>{
    if(mid1 > 0 ){
      mid = mid1;
    }
      })
  
  await fetchMid2(i).then((mid2)=>{
   // console.log('here');
   
    if(mid2.length > 0){
      if(mid.length>0){
        mid.push(mid2)
        let concat = mid.concat(mid2);
        mid = concat;
      }else{
        mid = mid2;
      }
      
    }
    
    //console.log(jgl.length);
  })
  
  if(mid.length>1){
    let avgMidStats = ScoreSort(mid);
    let tierStatsArr = await CreateTier(globalMid,avgMidStats,arrayID[i],'Mid');
    midTierStatsArr.push(tierStatsArr);
    mid = [];
   // console.log(avgMidStats);
    
 // CreateTier(globalMid,avgMidStats,arrayID[i],'Mid');
 // mid = [];
  
  }
}

const roamTier = async (i) =>{
  await fetchRoam1(i).then((roam1)=>{
    if(roam1.length > 0){
      roam = roam1;
      //console.log('a');
    }
      })
  
  await fetchRoam2(i).then((roam2)=>{
   // console.log('here');
   
    if(roam2.length>0){
      if(roam.length>0){
          let concat = roam.concat(roam2);
          roam = concat;
        
      }else{
        roam = roam2;
      }
    }


   /* if(roam.length > 0){
      if(roam2.length>0){
        for(i=0;i<roam2.length;i++){
          roam.push(roam2[i]);
        }
        
        
      }
      
    }
    else if(roam2.length>0){
      roam = roam2;
      
    }*/
    //console.log(roam.length);
  })
  
  if(roam.length>1){
    let avgRoamStats = ScoreSort(roam);
    let tierStatsArr = await CreateTier(globalRoam,avgRoamStats,arrayID[i],'Roam');
    roamTierStatsArr.push(tierStatsArr);
    roam = [];
   // console.log(avgRoamStats);
    
 // CreateTier(globalRoam,avgRoamStats,arrayID[i],'Roam');
 // roam = [];
  
  }
}

const xpTier = async (i) =>{
  await fetchXp1(i).then((xp1)=>{
    if(xp1 > 0){
      xp = xp1;
    }
      })
  
  await fetchXp2(i).then((xp2)=>{
   // console.log('here');
   
    if(xp2.length > 0){
      if(xp.length>0){
        let concat = xp.concat(xp2);
        xp = concat;
      }else {
        xp = xp2;
      }
      
    }
    
    //console.log(xp.length);
  })
  
  if(xp.length>1){
    let avgXpStats = ScoreSort(xp);
    let tierStatsArr = await CreateTier(globalXp,avgXpStats,arrayID[i],'Xp');
    xpTierStatsArr.push(tierStatsArr);
    xp = [];
   // console.log(avgXpStats);
    
 // CreateTier(globalXp,avgXpStats,arrayID[i],'Xp');
  //xp = [];
  
  }
}

const goldTier = async (i) =>{
  await fetchGold1(i).then((gold1)=>{
    if(gold1 > 0){
      gold = gold1;
    }
      })
  
  await fetchGold2(i).then((gold2)=>{
   // console.log('here');
   
    if(gold2.length > 0){
      if(gold.length>0){
        let concat = gold.concat(gold2);
        gold = concat;
      }else{
        gold = gold2;
      }
      
    }
    
    //console.log(gold.length);
  })
  
  if(gold.length>1){
    let avgGoldStats = ScoreSort(gold);
    let tierStatsArr = await CreateTier(globalGold,avgGoldStats,arrayID[i],'Gold');
    goldTierStatsArr.push(tierStatsArr);
    gold = [];
    //console.log(avgGoldStats);
    
   // CreateTier(globalGold,avgGoldStats,arrayID[i],'Gold');
    //gold = [];
  
  }
}


//for(let i= 0;i<arrayID.length;i++) 
  for(let i= 0;i<arrayID.length;i++){

  await jglTier(i);
  await midTier(i);
  await roamTier(i);
  await goldTier(i);
  await xpTier(i);

  console.log('Loading for loops');   
  
    }

    //console.log(jglTierStatsArr);
  if(jglTierStatsArr.length>0){
    console.log('Setting Tiers');
   await CurveStats(jglTierStatsArr,'Jungle');
  }
  if(midTierStatsArr.length>0){
    console.log('Setting Tiers');
    await CurveStats(midTierStatsArr,'Mid');
   }
   if(goldTierStatsArr.length>0){
    console.log('Setting Tiers');
    await CurveStats(goldTierStatsArr,'Gold');
   }
   if(xpTierStatsArr.length>0){
    console.log('Setting Tiers');
    await CurveStats(xpTierStatsArr,'Xp');
   }
   if(roamTierStatsArr.length>0){
    console.log('Setting Tiers');
    await CurveStats(roamTierStatsArr,'Roam');
   }

  console.log('Done');
}

export default StatSort