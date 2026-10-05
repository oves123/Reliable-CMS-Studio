import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      description: 'The global title of the website for SEO (e.g. Reliable Industries)',
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      description: 'The global SEO description for the website',
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'phoneNumbers',
      title: 'Phone Numbers',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of phone numbers (e.g. +91 78880 65557)',
    }),
    defineField({
      name: 'address',
      title: 'Footer Address',
      type: 'text',
    }),
  ],
})
