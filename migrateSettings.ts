import { getCliClient } from 'sanity/cli';

const client = getCliClient();

async function migrateSettings() {
  console.log('Migrating Site Settings and Home Page...');

  // Create Site Settings
  const siteSettings = {
    _type: 'siteSettings',
    _id: 'siteSettings',
    title: 'Reliable Industries - Pioneer in Sealing',
    description: 'Providing reliable sealing solutions for industrial rotating equipment worldwide.',
    email: 'info@reliableseal.com',
    phoneNumbers: ['+91- 78880 65557', '+91- 78880 65558', '+91- 78880 65559'],
    address: 'AF-02, 03, 04 Saraf Kaskar Ind. Prem Co-op. Soc. Ltd.,\nS.V.Road, Oshiwara, Jogeshwari (W),\nMumbai - 400102'
  };

  // Create Home Page
  const homePage = {
    _type: 'homePage',
    _id: 'homePage',
    heroSubtitle: 'RELY ON EXCELLENCE',
    heroTitle: 'High-Performance<br>Mechanical Seals.',
    heroDescription: 'Providing reliable sealing solutions for industrial rotating equipment worldwide. We offer extensive support in the field of sealing technology as a planning partner, supplier, and service partner.',
    missionSubtitle: 'OUR MISSION',
    missionTitle: 'Continuous innovations in sealing applications.',
    missionDescription: 'Belief in the capabilities of our people to rapidly transfer ideas to reality and a firm faith in promising leak-free, maintenance-free, high quality standard products.',
    stats: [
      { _key: '1', number: 50, suffix: '+', label: 'Countries Served' },
      { _key: '2', number: 10000, suffix: '+', label: 'Global Installations' },
      { _key: '3', number: 100, suffix: '%', label: 'Quality Assured' }
    ],
    whyChooseUsTitle: 'Comprehensive seal service for industrial facilities',
    whyChooseUsDescription: 'Production systems need to work safely, reliably, and with maximum cost-effectiveness. So it is good to have access to an expert and efficient partner. With Reliable Industries, we offer customized service programs and flexible service for seals and gaskets. The service portfolio extends from consulting and engineering to individually-tailored service contracts.',
    features: [
      { _key: '1', title: 'Specialist', description: 'Expert technical advice tailored to your specific application requirements.' },
      { _key: '2', title: 'Reliable', description: 'Dependable products and services that ensure continuous operation.' },
      { _key: '3', title: 'Fast', description: 'Quick turnaround times to minimize your system downtime.' },
      { _key: '4', title: 'Global', description: 'Worldwide support network ready to assist wherever you are.' }
    ]
  };

  // Create Contact Page
  const contactPage = {
    _type: 'contactPage',
    _id: 'contactPage',
    heroSubtitle: 'Get in Touch',
    heroTitle: 'Contact Our Experts',
    heroDescription: 'Whether you need a custom quote, technical support, or have a general inquiry, our team of sealing experts is ready to assist you.',
    mainTitle: 'Let\'s build something Reliable together.',
    mainSubtitle: 'Reach out to our global headquarters or fill out the form, and a representative will get back to you within 24 hours.'
  };

  // Create Navigation Menu
  const navigationMenu = {
    _type: 'navigation',
    _id: 'mainNavigation',
    title: 'Main Navigation',
    menuItems: [
      {
        _key: '1',
        title: 'Products',
        link: '/products',
        columns: [
          {
            _key: 'col1',
            columnTitle: 'Mechanical Seal',
            links: [
              { _key: '11', title: 'Multi Spring Series Seal', url: '/products/multi-spring-series-seal' },
              { _key: '12', title: 'Single Spring Series Seal', url: '/products/single-spring-series-seal' },
              { _key: '13', title: 'Dairy Seal', url: '/products/dairy-seal' },
              { _key: '14', title: 'Water Seal', url: '/products/water-seal' },
              { _key: '15', title: 'Cartridge Seal', url: '/products/cartridge-seal' },
              { _key: '16', title: 'High Temp Seal', url: '/products/high-temp-seal' },
              { _key: '17', title: 'Reactor Seal', url: '/products/reactor-seal' },
              { _key: '18', title: 'Agitator Seal', url: '/products/agitator-seal' }
            ]
          },
          {
            _key: 'col2',
            columnTitle: 'Rotary Joints',
            links: [
              { _key: '21', title: 'Water Rotary Joints', url: '/products/water-rotary-joints' },
              { _key: '22', title: 'Hot Oil Rotary Joints', url: '/products/hot-oil-rotary-joints' },
              { _key: '23', title: 'Air Rotary Joints', url: '/products/air-rotary-joints' },
              { _key: '24', title: 'Hydraulic Rotary Joints', url: '/products/hydrolic-rotary-joints' },
              { _key: '25', title: 'Steam Rotary Joints', url: '/products/steam-rotary-joints' }
            ]
          },
          {
            _key: 'col3',
            columnTitle: 'Seal Support System',
            links: [
              { _key: '31', title: 'Thermosyphon', url: '/products/thermosyphon' },
              { _key: '32', title: 'Heat Exchanged System', url: '/products/heat-exchanged-system' }
            ]
          }
        ]
      },
      {
        _key: '2',
        title: 'Services',
        link: '/services',
        promo: {
          title: 'Comprehensive Support',
          description: 'From installation to predictive maintenance, our service team ensures your systems run perfectly.',
          buttonText: 'View Service Plans',
          buttonUrl: '/services'
        },
        columns: [
          {
            _key: 'col1',
            columnTitle: 'Maintenance',
            links: [
              { _key: 'link1', title: 'Repair & Refurbishment', url: '#' },
              { _key: 'link2', title: 'On-Site Installation', url: '#' },
              { _key: 'link3', title: 'Predictive Maintenance', url: '#' }
            ]
          },
          {
            _key: 'col2',
            columnTitle: 'Consulting',
            links: [
              { _key: 'link4', title: 'Engineering Support', url: '#' },
              { _key: 'link5', title: 'Technical Training', url: '#' },
              { _key: 'link6', title: 'Failure Analysis', url: '#' }
            ]
          }
        ]
      },
      {
        _key: '3',
        title: 'Industries',
        link: '/industries',
        promo: {
          title: 'Engineered for Oil & Gas',
          description: 'Read our latest case study on how we eliminated leakage in extreme high-pressure pumping systems.',
          buttonText: 'Read Case Study',
          buttonUrl: '#'
        },
        columns: [
          {
            _key: 'col1',
            columnTitle: 'Primary Sectors',
            links: [
              { _key: 'link1', title: 'Oil & Gas', url: '#' },
              { _key: 'link2', title: 'Chemical Processing', url: '#' },
              { _key: 'link3', title: 'Power Generation', url: '#' }
            ]
          },
          {
            _key: 'col2',
            columnTitle: 'Specialized',
            links: [
              { _key: 'link4', title: 'Pharmaceutical', url: '#' },
              { _key: 'link5', title: 'Food & Beverage', url: '#' },
              { _key: 'link6', title: 'Water Systems', url: '#' }
            ]
          }
        ]
      },
      {
        _key: '4',
        title: 'Company',
        link: '/about',
        promo: {
          title: 'Join Our Team',
          description: 'We are always looking for talented engineers and specialists to join our global team.',
          buttonText: 'View Careers',
          buttonUrl: '#'
        },
        columns: [
          {
            _key: 'col1',
            columnTitle: 'About Us',
            links: [
              { _key: 'link1', title: 'Our History', url: '#' },
              { _key: 'link2', title: 'Management Team', url: '#' },
              { _key: 'link3', title: 'Certifications', url: '#' }
            ]
          },
          {
            _key: 'col2',
            columnTitle: 'Resources',
            links: [
              { _key: 'link4', title: 'News & Press', url: '#' },
              { _key: 'link5', title: 'Events & Trade Fairs', url: '#' },
              { _key: 'link6', title: 'Global Locations', url: '#' }
            ]
          }
        ]
      }
    ]
  };

  try {
    console.log('Uploading Site Settings...');
    await client.createOrReplace(siteSettings);
    console.log('Site Settings uploaded successfully!');

    console.log('Uploading Home Page...');
    await client.createOrReplace(homePage);
    console.log('Home Page uploaded successfully!');
    
    console.log('Uploading Contact Page...');
    await client.createOrReplace(contactPage);
    console.log('Contact Page uploaded successfully!');
    
    console.log('Uploading Navigation Menu...');
    await client.createOrReplace(navigationMenu);
    console.log('Navigation Menu uploaded successfully!');
    
    console.log('All migrations completed!');
  } catch (error) {
    console.error('Migration failed:', error);
  }
}

migrateSettings();
