import { reset, seed } from 'drizzle-seed';

export async function seedApartments(db, schema) {
  await reset(db, schema);
  await seed(db, schema).refine((funcs) => ({
    apartments: {
      columns: {
        name: funcs.valuesFromArray({
          values: [
            'Penthouse Elite',
            'Cozy Loft',
            'Luxury Suite',
            'Modern Studio',
            'Garden View',
            'Sunset Terrace',
            'Urban Oasis',
            'Skyline Apartment',
          ],
        }),
        number: funcs.valuesFromArray({
          values: [
            'A101',
            'B202',
            'C303',
            'D404',
            'E505',
            'F606',
            'G707',
            'H808',
          ],
        }),
        description: funcs.valuesFromArray({
          values: [
            'Spacious luxury apartment with panoramic city views.',
            'Cozy loft-style apartment with modern finishes.',
            'Elegant suite with premium amenities and high ceilings.',
            'Compact studio with smart space utilization.',
            'Peaceful apartment overlooking the community garden.',
            'Corner unit with stunning sunset views from private terrace.',
            'Urban retreat with contemporary design elements.',
            'High-floor apartment with unobstructed skyline views.',
          ],
        }),
        project: funcs.valuesFromArray({
          values: [
            'Downtown Towers',
            'Riverside Residences',
            'Parkview Heights',
            'City Center',
          ],
        }),
        price: funcs.int({ minValue: 150000, maxValue: 950000 }),
        bedrooms: funcs.int({ minValue: 1, maxValue: 4 }),
        bathrooms: funcs.int({ minValue: 1, maxValue: 3 }),
        area: funcs.int({ minValue: 50, maxValue: 300 }),
        amenities: funcs.valuesFromArray({
          values: [
            'Medical center',
            'Schools',
            'Clubhouse',
            'Sports Clubs',
            'Business Hub',
            'Outdoor pools',
            'Underground parking',
            'bicycles lanes',
            'Commercial strip',
          ],
          arraySize: 3,
        }),
        images: funcs.valuesFromArray({
          values: [
            `/placholder-1.jpg`,
            `/placholder-2.jpg`,
            `/placholder-3.jpg`,
            `/placholder-4.jpg`,
            `/placholder-5.jpg`,
          ],
          arraySize: 3,
        }),
      },
      count: 20,
    },
  }));
}
