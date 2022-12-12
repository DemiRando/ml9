import ScoreGrade from "./ScoreGrade";
import AllocateTier from "./AllocateTier";
import GlobalStats from "./GlobalStats";
import SetTier from "./SetTier";

const CreateTier = async(globalStats,avgStats,id,role) => {
    

//{KDA: 10, Push: 10, Damage: 10, Farm: 10, Teamfight: 10, Survival: 10}
//0-kda ,1-damage dealt,2-damage received,3-duration,4-gold,5-push,
//6-teamfight,7-total matches,8 - deaths
//kda = array[0], push=array[5]/array[3], damage = [1]/[3], farm = [4]/[3]
//teamfight = [6], survival = [2]/[8]

    let kda = avgStats[0];
    let kdaGlobal = globalStats[0];

    let push = avgStats[5]/avgStats[3];
    let pushGlobal =globalStats[5]/globalStats[3];

    let damage = avgStats[1]/avgStats[3];
    let damageGlobal = globalStats[1]/globalStats[3];

    let farm = avgStats[4]/avgStats[3];
    let farmGlobal =globalStats[4]/globalStats[3];

    let teamFight = avgStats[6];
    let teamFightGlobal = globalStats[6];

    let survival = avgStats[2]/avgStats[8];
    let survivalGlobal = globalStats[2]/globalStats[8];

    let numMatches = avgStats[7];
    let numMatchesGlobal = globalStats[7];

    let result = [];

    let playerArr = [];
    let globalPlayerArr = []
    
    if(role === 'Roam'){
      //playerArr=[damage,teamFight,survival,numMatches];
      //globalPlayerArr=[damageGlobal,teamFightGlobal,survivalGlobal,numMatchesGlobal];
        playerArr.push(damage);
        playerArr.push(teamFight);
        playerArr.push(survival);
        playerArr.push(numMatches);

        globalPlayerArr.push(damageGlobal);
        globalPlayerArr.push(teamFightGlobal);
        globalPlayerArr.push(survivalGlobal);
        globalPlayerArr.push(numMatchesGlobal);
    }
    
    else{
     //playerArr =[kda,push,damage,farm,teamFight,survival,numMatches];
     //globalPlayerArr =[kdaGlobal,pushGlobal,damageGlobal,farmGlobal,teamFightGlobal,survivalGlobal,numMatchesGlobal];
        playerArr.push(kda);
        playerArr.push(push);
        playerArr.push(damage);
        playerArr.push(farm);
        playerArr.push(teamFight);
        playerArr.push(survival);
        playerArr.push(numMatches);

        globalPlayerArr.push(kdaGlobal);
        globalPlayerArr.push(pushGlobal);
        globalPlayerArr.push(damageGlobal);
        globalPlayerArr.push(farmGlobal);
        globalPlayerArr.push(teamFightGlobal);
        globalPlayerArr.push(survivalGlobal);
        globalPlayerArr.push(numMatchesGlobal);
    }

    let grade = ScoreGrade(playerArr,globalPlayerArr);
    let tierGrade = AllocateTier(grade,numMatches);
   
    //console.log(avgStats);
    result.push(id);
    result.push(tierGrade);
    result.push(numMatches);
    return result;
}

export default CreateTier