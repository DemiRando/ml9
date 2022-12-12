export default {
  name: 'news',
  title: 'News',
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
    name:"image",
    type:"image",
    title:"Image",
   },
   {
    name:"imageContent",
    type:"image",
    title:"ImageContent",
   },
   {
    name:"type",
    title:"Category",
    validation:(Rule)=>Rule.required(),
    type:"reference",
    to:[{ type:"category"}],
   },
   
  ],

 
}
