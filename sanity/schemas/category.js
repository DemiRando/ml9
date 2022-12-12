export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation:(Rule)=>Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation:(Rule)=>Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation:(Rule)=>Rule.required(),
    },
  ],
}
