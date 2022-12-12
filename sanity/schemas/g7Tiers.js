export default {
    name: 'g7tiers',
    title: 'G7 Tiers',
    type: 'document',
    fields: [
      {
        name:"name",
        title:"Name",
        type:"reference",
        to:[{type:"player"}]
     },
      {
        name:"id",
        type:"text",
        title:"PlayerId",
        validation:(Rule)=>Rule.required(),
       },
      {
      name:"jglTier",
      type:"text",
      title:"Jgl Tier",
     },
     {
      name:"midTier",
      type:"text",
      title:"Mid Tier",
     },
     {
      name:"roamTier",
      type:"text",
      title:"Roam Tier",
     },
     {
      name:"xpTier",
      type:"text",
      title:"XP Tier",
     },
     {
      name:"goldTier",
      type:"text",
      title:"Gold Tier",
     },
     
     
     
    ],
  
   
  }
  