

const ScoreSort =  (score) => {

 const length = score.length;
 let assistsArr = [];
 let damageDealtArr = [];
 let damageReceivedArr = [];
 let deathsArr = [];
 let durationArr = [];
 let goldArr = [];
 let killsArr = [];
 let pushArr = [];
 let teamFightArr = [];
 let avgStatsArr = [];
 let y = {};

 function avgSum(array) {
    let sum = 0;
    let avg;
    for (let i = 0; i < array.length; i ++) {
      sum += array[i];
    }
    avg = Math.round(sum/array.length);
    return avg;
  }

 let testLength = 0;

 for(i=0;i<length;i++){
    //array of objects, aka score=[obj1,obj2,...],
    //i.e score[0] = obj1 assign this to say y
    //i.e y = obj1
    //y[0] = obj1 = z
//const { assists, damageDealt,damageReceived,deaths,duration,gold,kills,push,teamFight } = z;
//assistsArr.push(assists),... etc

y = score[i]
testLength = y.length;
//console.log(y);
//let yLength = Object.keys(y).length;
const { assists, damageDealt,damageReceived,deaths,duration,gold,kills,push,teamFight } = y
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
 
//const avgAssist = avgSum(assistsArr), ... etc
const avgAssist = avgSum(assistsArr);
const avgDamageDealt = avgSum(damageDealtArr);
const avgDamageReceived = avgSum(damageReceivedArr);
const avgDeaths = avgSum(deathsArr);
const avgDuration = avgSum(durationArr);
const avgGold = avgSum(goldArr);
const avgKills = avgSum(killsArr);
const avgPush = avgSum(pushArr);
const avgTeamFight = avgSum(teamFightArr);
const KDA = (avgKills+avgAssist)/Math.max(1,avgDeaths);
const KDAfixed = parseFloat( KDA.toFixed(2));
//avgStatsArr.push(avgAssist).push(avgETC)
avgStatsArr.push(KDAfixed);
avgStatsArr.push(avgDamageDealt);
avgStatsArr.push(avgDamageReceived);
avgStatsArr.push(avgDuration);
avgStatsArr.push(avgGold);
avgStatsArr.push(avgPush);
avgStatsArr.push(avgTeamFight);
avgStatsArr.push(length);
avgStatsArr.push(avgDeaths);




return avgStatsArr;
}

export default ScoreSort