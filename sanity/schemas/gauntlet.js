

export default {
    name: 'gauntlet',
    title: 'Gauntlet',
    type: 'document',
    fields: [
     {
      name:"headline",
      type:"text",
      title:"Headline",
      validation:(Rule)=>
        Rule.required()
          .max(140),
     },
     {
      name:"content",
      type:"text",
      title:"Content",
      validation:(Rule)=>Rule.required(),
     },
     {
        name:"squads",
        type:"array",
        title:"Rankings",
        validation:(Rule)=>Rule.required(),
        of: [ // The "of"-property must be set, and it must be an array
        {
          type: 'squads', // type is required
          title: 'Squads'
        }
      ]
     },
     {
        name:"links",
        type:"array",
        title:"Links",
        of: [ // The "of"-property must be set, and it must be an array
        {
          type: 'string', // type is required
          title: 'links',
        }
      ]
     }
    ],
  
   
  }
  