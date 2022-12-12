export default {
    name: 'squadsG7',
    title: 'Gauntlet7 Squads',
    type: 'document',
    fields: [
     {
      name:"name",
      type:"string",
      title:"Name",
      validation:(Rule)=>
        Rule.required(),
     },
   
     {
      name:"logo",
      type:"image",
      title:"SquadLogo",
     },
     {
      name:"players",
      type:"array",
      title:"Players",
      validation:(Rule)=>Rule.required(),
      of: [ // The "of"-property must be set, and it must be an array
      {
        type:"reference",
        to:[{ type:'player'}],
        title: 'Players'
      }
    ]
     }
     
    ],
  
   
  }
  