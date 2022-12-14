export default {
    name: 'g7',
    title: 'Gauntlet7',
    type: 'document',
    groups: [
        {
          name: 'jgl1',
          title: 'Team1 Jgl',
        },
        {
         name: 'jgl2',
         title: 'Team2 Jgl',
       },
        {
            name: 'mid1',
            title: 'Team1 Mid',
          },
          {
            name: 'mid2',
            title: 'Team2 Mid',
          },
          
        {
         name: 'roam1',
         title: 'Team1 Roam',
       },
       {
         name: 'roam2',
         title: 'Team2 Roam',
       },
       {
         name: 'gold1',
         title: 'Team1 GoldLane',
       },
       {
         name: 'gold2',
         title: 'Team2 GoldLane',
       },
       {
         name: 'xp1',
         title: 'Team1 XPLane',
       },
       {
         name: 'xp2',
         title: 'Team2 XPLane',
       },
      ],
    fields: [
     {
      name:"matchnum",
      type:"number",
      title:"Match Number",
      validation:(Rule)=>
        Rule.required(),
     },
     {
      name:"squad1",
      title:"Squad 1",
      validation:(Rule)=>Rule.required(),
      type:"reference",
      to:[{ type:"squadsG7"}],
     },
     {
        name:"squad2",
        title:"Squad 2",
        validation:(Rule)=>Rule.required(),
        type:"reference",
        to:[{ type:"squadsG7"}],
       },
    {
        name:"duration",
        title:"Match Duration(approx)",
        type:"number",
     },  
     {
        name:"jgl1Player",
        title:"Team 1 Jungler",
        group:"jgl1",
        type:"reference",
        to:[{type:"player"}]
     },
     {
      name:"jgl1ID",
      title:"Player ID",
      group:"jgl1",
      type:"number",
   },
     {
        name:"jgl1DamageDealt",
        title:"Damage Dealt",
        group:"jgl1",
        type:"number",
     },
     {
        name:"jgl1DamageReceived",
        title:"Damage Received",
        group:"jgl1",
        type:"number",
     },
     {
        name:"jgl1Kills",
        title:"Kills",
        group:"jgl1",
        type:"number",
     },
     {
        name:"jgl1Death",
        title:"Deaths",
        group:"jgl1",
        type:"number",
     },
     {
        name:"jgl1Assists",
        title:"Assists",
        group:"jgl1",
        type:"number",
     },
     {
        name:"jgl1Push",
        title:"Push",
        group:"jgl1",
        type:"number",
     },
     {
        name:"jgl1Gold",
        title:"Gold",
        group:"jgl1",
        type:"number",
     },
     {
      name:"jgl1Participation",
      title:"Teamfight Participation",
      group:"jgl1",
      type:"number",
   },
     {
      name:"jgl2Player",
      title:"Team 2 Jungler",
      group:"jgl2",
      type:"reference",
      to:[{type:"player"}]
   },
   {
      name:"jgl2ID",
      title:"Player ID",
      group:"jgl2",
      type:"number",
   },
   {
      name:"jgl2DamageDealt",
      title:"Damage Dealt",
      group:"jgl2",
      type:"number",
   },
   {
      name:"jgl2DamageReceived",
      title:"Damage Received",
      group:"jgl2",
      type:"number",
   },
   {
      name:"jgl2Kills",
      title:"Kills",
      group:"jgl2",
      type:"number",
   },
   {
      name:"jgl2Death",
      title:"Deaths",
      group:"jgl2",
      type:"number",
   },
   {
      name:"jgl2Assists",
      title:"Assists",
      group:"jgl2",
      type:"number",
   },
   {
      name:"jgl2Push",
      title:"Push",
      group:"jgl2",
      type:"number",
   },
   {
      name:"jgl2Gold",
      title:"Gold",
      group:"jgl2",
      type:"number",
   },
   {
      name:"jgl2Participation",
      title:"Teamfight Participation",
      group:"jgl2",
      type:"number",
   },
   {
      name:"mid1Player",
      title:"Team 1 Midlaner",
      group:"mid1",
      type:"reference",
      to:[{type:"player"}]
   },
   {
      name:"mid1ID",
      title:"Player ID",
      group:"mid1",
      type:"number",
   },
   {
      name:"mid1DamageDealt",
      title:"Damage Dealt",
      group:"mid1",
      type:"number",
   },
   {
      name:"mid1DamageReceived",
      title:"Damage Received",
      group:"mid1",
      type:"number",
   },
   {
      name:"mid1Kills",
      title:"Kills",
      group:"mid1",
      type:"number",
   },
   {
      name:"mid1Death",
      title:"Deaths",
      group:"mid1",
      type:"number",
   },
   {
      name:"mid1Assists",
      title:"Assists",
      group:"mid1",
      type:"number",
   },
   {
      name:"mid1Push",
      title:"Push",
      group:"mid1",
      type:"number",
   },
   {
      name:"mid1Gold",
      title:"Gold",
      group:"mid1",
      type:"number",
   },
   {
      name:"mid1Participation",
      title:"Teamfight Participation",
      group:"mid1",
      type:"number",
   },
   
   {
      name:"mid2Player",
      title:"Team 2 Midlaner",
      group:"mid2",
      type:"reference",
      to:[{type:"player"}]
   },
   {
      name:"mid2ID",
      title:"Player ID",
      group:"mid2",
      type:"number",
   },
   {
      name:"mid2DamageDealt",
      title:"Damage Dealt",
      group:"mid2",
      type:"number",
   },
   {
      name:"mid2DamageReceived",
      title:"Damage Received",
      group:"mid2",
      type:"number",
   },
   {
      name:"mid2Kills",
      title:"Kills",
      group:"mid2",
      type:"number",
   },
   {
      name:"mid2Death",
      title:"Deaths",
      group:"mid2",
      type:"number",
   },
   {
      name:"mid2Assists",
      title:"Assists",
      group:"mid2",
      type:"number",
   },
   {
      name:"mid2Push",
      title:"Push",
      group:"mid2",
      type:"number",
   },
   {
      name:"mid2Gold",
      title:"Gold",
      group:"mid2",
      type:"number",
   },
   {
      name:"mid2Participation",
      title:"Teamfight Participation",
      group:"mid2",
      type:"number",
   },
   {
      name:"roam1Player",
      title:"Team 1 Roamer",
      group:"roam1",
      type:"reference",
      to:[{type:"player"}]
   },
   {
      name:"roam1ID",
      title:"Player ID",
      group:"roam1",
      type:"number",
   },
   {
      name:"roam1DamageDealt",
      title:"Damage Dealt",
      group:"roam1",
      type:"number",
   },
   {
      name:"roam1DamageReceived",
      title:"Damage Received",
      group:"roam1",
      type:"number",
   },
   {
      name:"roam1Kills",
      title:"Kills",
      group:"roam1",
      type:"number",
   },
   {
      name:"roam1Death",
      title:"Deaths",
      group:"roam1",
      type:"number",
   },
   {
      name:"roam1Assists",
      title:"Assists",
      group:"roam1",
      type:"number",
   },
   {
      name:"roam1Push",
      title:"Push",
      group:"roam1",
      type:"number",
   },
   {
      name:"roam1Gold",
      title:"Gold",
      group:"roam1",
      type:"number",
   },
   {
      name:"roam1Participation",
      title:"Teamfight Participation",
      group:"roam1",
      type:"number",
   },
   {
      name:"roam2Player",
      title:"Team 2 Roamer",
      group:"roam2",
      type:"reference",
      to:[{type:"player"}]
   },
   {
      name:"roam2ID",
      title:"Player ID",
      group:"roam2",
      type:"number",
   },
   {
      name:"roam2DamageDealt",
      title:"Damage Dealt",
      group:"roam2",
      type:"number",
   },
   {
      name:"roam2DamageReceived",
      title:"Damage Received",
      group:"roam2",
      type:"number",
   },
   {
      name:"roam2Kills",
      title:"Kills",
      group:"roam2",
      type:"number",
   },
   {
      name:"roam2Death",
      title:"Deaths",
      group:"roam2",
      type:"number",
   },
   {
      name:"roam2Assists",
      title:"Assists",
      group:"roam2",
      type:"number",
   },
   {
      name:"roam2Push",
      title:"Push",
      group:"roam2",
      type:"number",
   },
   {
      name:"roam2Gold",
      title:"Gold",
      group:"roam2",
      type:"number",
   },
   {
      name:"roam2Participation",
      title:"Teamfight Participation",
      group:"roam2",
      type:"number",
   },
   {
      name:"gold1Player",
      title:"Team 1 Goldlane",
      group:"gold1",
      type:"reference",
      to:[{type:"player"}]
   },
   {
    name:"gold1ID",
    title:"Player ID",
    group:"gold1",
    type:"number",
 },
   {
      name:"gold1DamageDealt",
      title:"Damage Dealt",
      group:"gold1",
      type:"number",
   },
   {
      name:"gold1DamageReceived",
      title:"Damage Received",
      group:"gold1",
      type:"number",
   },
   {
      name:"gold1Kills",
      title:"Kills",
      group:"gold1",
      type:"number",
   },
   {
      name:"gold1Death",
      title:"Deaths",
      group:"gold1",
      type:"number",
   },
   {
      name:"gold1Assists",
      title:"Assists",
      group:"gold1",
      type:"number",
   },
   {
      name:"gold1Push",
      title:"Push",
      group:"gold1",
      type:"number",
   },
   {
      name:"gold1Gold",
      title:"Gold",
      group:"gold1",
      type:"number",
   },
   {
    name:"gold1Participation",
    title:"Teamfight Participation",
    group:"gold1",
    type:"number",
 },
 {
   name:"gold2Player",
   title:"Team 2 Goldlane",
   group:"gold2",
   type:"reference",
   to:[{type:"player"}]
},
{
 name:"gold2ID",
 title:"Player ID",
 group:"gold2",
 type:"number",
},
{
   name:"gold2DamageDealt",
   title:"Damage Dealt",
   group:"gold2",
   type:"number",
},
{
   name:"gold2DamageReceived",
   title:"Damage Received",
   group:"gold2",
   type:"number",
},
{
   name:"gold2Kills",
   title:"Kills",
   group:"gold2",
   type:"number",
},
{
   name:"gold2Death",
   title:"Deaths",
   group:"gold2",
   type:"number",
},
{
   name:"gold2Assists",
   title:"Assists",
   group:"gold2",
   type:"number",
},
{
   name:"gold2Push",
   title:"Push",
   group:"gold2",
   type:"number",
},
{
   name:"gold2Gold",
   title:"Gold",
   group:"gold2",
   type:"number",
},
{
 name:"gold2Participation",
 title:"Teamfight Participation",
 group:"gold2",
 type:"number",
},
{
   name:"xp1Player",
   title:"Team 1 XPlane",
   group:"xp1",
   type:"reference",
   to:[{type:"player"}]
},
{
 name:"xp1ID",
 title:"Player ID",
 group:"xp1",
 type:"number",
},
{
   name:"xp1DamageDealt",
   title:"Damage Dealt",
   group:"xp1",
   type:"number",
},
{
   name:"xp1DamageReceived",
   title:"Damage Received",
   group:"xp1",
   type:"number",
},
{
   name:"xp1Kills",
   title:"Kills",
   group:"xp1",
   type:"number",
},
{
   name:"xp1Death",
   title:"Deaths",
   group:"xp1",
   type:"number",
},
{
   name:"xp1Assists",
   title:"Assists",
   group:"xp1",
   type:"number",
},
{
   name:"xp1Push",
   title:"Push",
   group:"xp1",
   type:"number",
},
{
   name:"xp1Gold",
   title:"Gold",
   group:"xp1",
   type:"number",
},
{
 name:"xp1Participation",
 title:"Teamfight Participation",
 group:"xp1",
 type:"number",
},
{
   name:"xp2Player",
   title:"Team 2 XPlane",
   group:"xp2",
   type:"reference",
   to:[{type:"player"}]
},
{
 name:"xp2ID",
 title:"Player ID",
 group:"xp2",
 type:"number",
},
{
   name:"xp2DamageDealt",
   title:"Damage Dealt",
   group:"xp2",
   type:"number",
},
{
   name:"xp2DamageReceived",
   title:"Damage Received",
   group:"xp2",
   type:"number",
},
{
   name:"xp2Kills",
   title:"Kills",
   group:"xp2",
   type:"number",
},
{
   name:"xp2Death",
   title:"Deaths",
   group:"xp2",
   type:"number",
},
{
   name:"xp2Assists",
   title:"Assists",
   group:"xp2",
   type:"number",
},
{
   name:"xp2Push",
   title:"Push",
   group:"xp2",
   type:"number",
},
{
   name:"xp2Gold",
   title:"Gold",
   group:"xp2",
   type:"number",
},
{
 name:"xp2Participation",
 title:"Teamfight Participation",
 group:"xp2",
 type:"number",
},
    ],
  
   
  }
  