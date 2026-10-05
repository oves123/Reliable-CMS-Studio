import {defineField, defineType} from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'seoTitle',
      title: 'SEO Title Override',
      type: 'string',
      description: 'Leave blank to use the global site title',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description Override',
      type: 'text',
      description: 'Leave blank to use the global site description',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle (Kicker)',
      type: 'string',
      description: 'e.g. RELY ON EXCELLENCE',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'text',
      description: 'e.g. High-Performance Mechanical Seals.',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      description: 'e.g. Providing reliable sealing solutions for industrial rotating equipment...',
    }),
    defineField({
      name: 'missionSubtitle',
      title: 'Mission Subtitle',
      type: 'string',
      description: 'e.g. OUR MISSION',
    }),
    defineField({
      name: 'missionTitle',
      title: 'Mission Title',
      type: 'text',
      description: 'e.g. Continuous innovations in sealing applications.',
    }),
    defineField({
      name: 'missionDescription',
      title: 'Mission Description',
      type: 'text',
      description: 'e.g. Belief in the capabilities of our people to rapidly transfer ideas to reality...',
    })
  ],
})
