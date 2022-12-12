export default {
    name: 'squads',
    title: 'Squads',
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
    
     
    ],
  
   
  }
  