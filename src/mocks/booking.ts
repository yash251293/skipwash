export const laundromats = [
  {
    id: 1,
    name: "Centreville Laundry Services",
    website: "https://centrevillelaundryservices.com/",
    city: "Kitchener",
    address: "1077 Weber Street East, Unit 1",
    postalCode: "N2A3Y5",
    disallowedItems: [
      "Heavy-duty outdoor equipment such as camping tents, sleeping bags, and backpacks.",
      "Delicate or intricate items like beaded garments, sequinned clothing, or heavily embellished items.",
      "Leather or suede garments.",
      "Items with significant damage or structural issues.",
      "Items labeled as dry clean only.",
      "Carpets or upholstery.",
      "Shoes or boots",
      "Pillows",
      "Items with excessive pet hair or other debris that may damage machines or contaminate other laundry.",
      "Certain types of specialty fabrics that require specific care, such as silk, satin, or velvet.",
      "Stuffed animals",
      "Pet beds",
      "Items with plastic coverings, such as a stroller covers",
    ],
    basePrice: 15.99,
  },
  {
    id: 2,
    name: "Fake Waterloo Laundromat",
    website: "https://fakewaterloolaundromat.com/",
    city: "Waterloo",
    address: "1077 Weber Street East, Unit 1",
    postalCode: "A2B3C5",
    disallowedItems: [],
    basePrice: 12.99,
  },
];

export const servicesVendorOne = [
  {
    id: 1,
    vendorId: 1,
    title: "The crispest washer mashen",
    price: 14.99,
  },
  {
    id: 2,
    vendorId: 1,
    title: "Handwash?",
    price: 49.99,
  },
  {
    id: 3,
    vendorId: 1,
    title: "Big Magic Wash",
    price: 39.99,
  },
  {
    id: 4,
    vendorId: 1,
    title: "The cleanest of washes",
    price: 44.99,
  },
];

export const servicesVendorTwo = [
  {
    id: 5,
    vendorId: 2,
    title: "Make your clothes dirty",
    price: 0.0,
  },
];
