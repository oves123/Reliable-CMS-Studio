import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Sanity client (auth is handled by sanity exec)
import { getCliClient } from 'sanity/cli';
const client = getCliClient();

async function migrate() {
  console.log('Starting migration...');
  
  const productsPath = path.join(__dirname, '../Website-Astro/src/data/products.json');
  const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
  
  for (const product of productsData) {
    console.log(`Migrating product: ${product.name}`);
    
    // Upload image if exists
    let imageAsset = null;
    if (product.img) {
      const imgPath = path.join(__dirname, '../Website-Astro/public', product.img);
      if (fs.existsSync(imgPath)) {
        console.log(`Uploading image: ${product.img}`);
        imageAsset = await client.assets.upload('image', fs.createReadStream(imgPath), {
          filename: path.basename(imgPath)
        });
      } else {
        console.warn(`Image not found: ${imgPath}`);
      }
    }
    
    // Create the Sanity document
    const doc: any = {
      _type: 'product',
      name: product.name,
      slug: {
        _type: 'slug',
        current: product.slug || product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
      },
      category: product.category,
      categorySlug: product.categorySlug,
      description: product.description,
      features: product.features || [],
      specs: product.specs ? {
        Size: product.specs.Size || '',
        Temp: product.specs.Temp || '',
        Press: product.specs.Press || '',
        RPM: product.specs['R P M'] || product.specs.RPM || ''
      } : {},
      seal_types: (product.seal_types || []).map((st: any) => ({
        _key: Math.random().toString(36).substring(7),
        type: st.type,
        description_paragraph: st.description_paragraph
      }))
    };
    
    if (imageAsset) {
      doc.image = {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: imageAsset._id
        }
      };
    }
    
    const created = await client.create(doc);
    console.log(`Created product in Sanity: ${created._id}`);
  }
  
  console.log('Migration complete!');
}

migrate().catch(err => {
  console.error('Migration failed:', err);
  process.exit(1);
});
