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
    missionDescription: 'Belief in the capabilities of our people to rapidly transfer ideas to reality and a firm faith in promising leak-free, maintenance-free, high quality standard products.'
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
    
    console.log('All migrations completed!');
  } catch (error) {
    console.error('Migration failed:', error);
  }
}

migrateSettings();
