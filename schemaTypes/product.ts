import {defineField, defineType} from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),
    defineField({
      name: 'categorySlug',
      title: 'Category Slug',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'specs',
      title: 'Specifications',
      type: 'object',
      fields: [
        {name: 'Size', title: 'Size', type: 'string'},
        {name: 'Temp', title: 'Temperature', type: 'string'},
        {name: 'Press', title: 'Pressure', type: 'string'},
        {name: 'RPM', title: 'RPM', type: 'string'},
      ]
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{type: 'string'}]
    }),
    defineField({
      name: 'seal_types',
      title: 'Seal Types',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'type', title: 'Type', type: 'string'},
            {name: 'description_paragraph', title: 'Description', type: 'text'}
          ]
        }
      ]
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'image'
    }
  }
})
