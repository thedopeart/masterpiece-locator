const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('=== FIXING BROKEN IMAGE URLS ===\n');

  const fixes = {
    // 404 errors - truly broken
    'statue-queen-nefertari': {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Abu_Simbel_Small_temple_detail.jpg/800px-Abu_Simbel_Small_temple_detail.jpg',
      imageAttribution: 'Wikimedia Commons - CC BY-SA 3.0'
    },
    'guernica': {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Picasso%27s_Guernica_-_impressive_up_close_%285515934400%29.jpg/1200px-Picasso%27s_Guernica_-_impressive_up_close_%285515934400%29.jpg',
      imageAttribution: 'Wikimedia Commons - CC BY 2.0 (Photo of artwork)'
    },
    'statue-amenhotep-iii-british': {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Colossal_red_granite_statue_of_Amenhotep_III.jpg/800px-Colossal_red_granite_statue_of_Amenhotep_III.jpg',
      imageAttribution: 'Wikimedia Commons - CC BY-SA 4.0'
    },
    'gebelein-mummies': {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Gebelein_predynastic_mummy_British_Museum_EA_32751.jpg/800px-Gebelein_predynastic_mummy_British_Museum_EA_32751.jpg',
      imageAttribution: 'Wikimedia Commons - CC BY-SA 3.0'
    },
    'bust-ramesses-ii-british': {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Colossal_bust_of_Ramesses_II%2C_the_%27Younger_Memnon%27.jpg',
      imageAttribution: 'Wikimedia Commons - CC BY-SA 3.0'
    },
    // 400 errors - bad request (likely URL encoding issues)
    'william-the-hippo': {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Hippo_william_2346327476.jpg/800px-Hippo_william_2346327476.jpg',
      imageAttribution: 'Wikimedia Commons - CC BY 2.0'
    },
    'golden-flies-ahhotep': {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Egyptian_-_Fly_Necklace_-_Walters_421515.jpg/800px-Egyptian_-_Fly_Necklace_-_Walters_421515.jpg',
      imageAttribution: 'Walters Art Museum - CC0 Public Domain'
    },
    'innermost-coffin-tutankhamun': {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Detail_of_Tutankhamun%27s_middle_coffin.jpg/800px-Detail_of_Tutankhamun%27s_middle_coffin.jpg',
      imageAttribution: 'Wikimedia Commons - Public Domain'
    }
  };

  let fixed = 0;
  let errors = 0;

  for (const [slug, data] of Object.entries(fixes)) {
    try {
      const result = await prisma.artwork.update({
        where: { slug: slug },
        data: {
          imageUrl: data.imageUrl,
          imageAttribution: data.imageAttribution,
          updatedAt: new Date()
        }
      });
      console.log('Fixed: ' + slug + ' ("' + result.title + '")');
      fixed++;
    } catch (err) {
      console.log('ERROR fixing ' + slug + ': ' + err.message);
      errors++;
    }
  }

  console.log('\n=== COMPLETE ===');
  console.log('Fixed: ' + fixed);
  console.log('Errors: ' + errors);

  // Verify the fixes
  console.log('\n--- VERIFICATION ---');
  for (const slug of Object.keys(fixes)) {
    try {
      const art = await prisma.artwork.findUnique({
        where: { slug: slug },
        select: { slug: true, imageUrl: true }
      });
      if (art) {
        const response = await fetch(art.imageUrl, { method: 'HEAD' });
        const status = response.ok ? 'OK' : response.status;
        console.log(slug + ': ' + status);
      }
    } catch (e) {
      console.log(slug + ': ERROR - ' + e.message);
    }
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
