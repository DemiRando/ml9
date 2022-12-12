export default {
    name: 'player',
    title: 'Players',
    type: 'document',
    fields: [
      {
        name:"id",
        type:"text",
        title:"PlayerId",
        validation:(Rule)=>Rule.required(),
       },
      {
      name:"ign",
      type:"text",
      title:"Name",
      validation:(Rule)=>
        Rule.required()
          .max(140),
     },
     
     
     
    ],
  
   
  }
  