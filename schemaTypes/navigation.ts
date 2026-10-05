import {defineField, defineType} from 'sanity'

export const navigation = defineType({
  name: 'navigation',
  title: 'Navigation Menu',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Menu Title',
      type: 'string',
    }),
    defineField({
      name: 'menuItems',
      title: 'Menu Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Dropdown Title' },
            { name: 'link', type: 'string', title: 'Main Link' },
            {
              name: 'columns',
              title: 'Dropdown Columns',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'columnTitle', type: 'string', title: 'Column Title' },
                    {
                      name: 'links',
                      title: 'Links',
                      type: 'array',
                      of: [
                        {
                          type: 'object',
                          fields: [
                            { name: 'title', type: 'string', title: 'Link Title' },
                            { name: 'url', type: 'string', title: 'URL' }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              name: 'promo',
              title: 'Featured Promo Box',
              type: 'object',
              fields: [
                { name: 'title', type: 'string', title: 'Promo Title' },
                { name: 'description', type: 'text', title: 'Promo Description' },
                { name: 'buttonText', type: 'string', title: 'Button Text' },
                { name: 'buttonUrl', type: 'string', title: 'Button URL' },
              ]
            }
          ]
        }
      ]
    })
  ]
})
