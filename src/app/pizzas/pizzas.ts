type Tag = 'bestseller' | 'new';

export interface Pizza {
  id: string | number;
  name: string;
  description?: string;
  price: {
    small?: number; // Ø 28cm
    large?: number; // Ø 32cm
    party?: number; // 60 x 40 cm
  };

  // Add this property to bestselling or new pizzas.
  tag?: Tag;
}

export const pizzas: Pizza[] = [
  {
    id: 'D1',
    name: 'Pizza Nutella®',
    tag: 'new',
    description: 'Leckeres Nutella® Topping',
    price: {
      small: 7,
      large: 8,
    },
  },
  {
    id: 'D2',
    name: 'Pizza Nutella® Calzone',
    description: 'Leckere Nutella® Füllung',
    price: {
      large: 8,
    },
  },
  {
    id: 1,
    name: 'Pizzabrot',
    description: 'Nur leckerer Pizzateig',
    price: { small: 4, large: 5, party: 8 },
  },
  {
    id: 2,
    name: 'Margherita',
    description: '',
    price: { small: 6, large: 7, party: 20 },
  },
  {
    id: 3,
    name: 'Salami',
    tag: 'bestseller',
    description: 'Salami<sup>1,2,3</sup>',
    price: { small: 6.5, large: 7.5, party: 21 },
  },
  {
    id: 4,
    name: 'Prosciutto',
    description: 'Vorderschinken<sup>1,4</sup>',
    price: { small: 6.5, large: 7.5, party: 21 },
  },
  {
    id: 5,
    name: 'Funghi',
    description: 'frische Champignons',
    price: { small: 6.5, large: 7.5, party: 21 },
  },
  {
    id: 6,
    name: 'Bari',
    description: 'Vorderschinken<sup>1,4</sup>, Salami<sup>1,2,3</sup>',
    price: { small: 7, large: 8, party: 22 },
  },
  {
    id: 7,
    name: 'Regina',
    description: 'Vorderschinken<sup>1,4</sup>, frische Champignons',
    price: { small: 7, large: 8, party: 22 },
  },
  {
    id: 8,
    name: 'Stagione',
    description:
      'Vorderschinken<sup>1,4</sup>, frische Champignons, Artischocken',
    price: { small: 7.5, large: 8.5, party: 22 },
  },
  {
    id: '8a',
    name: 'Quattro Stagione',
    description:
      'Salami<sup>1,2,3</sup>, Vorderschinken<sup>1,4</sup>, frische Champignons, Artischocken',
    price: { small: 8, large: 9, party: 23 },
  },
  {
    id: 9,
    name: 'Mix',
    description:
      'Vorderschinken<sup>1,4</sup>, Salami<sup>1,2,3</sup>, frische Champignons, Paprika, Peperoni, Zwiebeln, Oliven<sup>5</sup>',
    price: { small: 8, large: 9.5, party: 24 },
  },
  {
    id: 10,
    name: 'Alassio',
    description:
      'Vorderschinken<sup>1,4</sup>, Salami<sup>1,2,3</sup>, frische Champignons, Oliven<sup>5</sup>',
    price: { small: 7.5, large: 8.5, party: 22 },
  },
  {
    id: 11,
    name: 'Pescara',
    description:
      'Vorderschinken<sup>1,4</sup>, Salami<sup>1,2,3</sup>, Peperoni, frische Champignons',
    price: { small: 7.5, large: 8.5, party: 22 },
  },
  {
    id: 12,
    name: 'San Remo',
    description:
      'frische Champignons, Oliven<sup>5</sup><sup>5</sup>, Artischocken, Sardellen',
    price: { small: 7.5, large: 8.5, party: 22 },
  },
  {
    id: 13,
    name: 'Calzone',
    description:
      'Vorderschinken<sup>1,4</sup>, Salami<sup>1,2,3</sup>, Paprika, frische Champignons',
    price: { large: 8.5 },
  },
  {
    id: 14,
    name: 'Vegetaria',
    description:
      'frische Champignons, Oliven<sup>5</sup><sup>5</sup>, Paprika, Artischocken, Peperoni, Zwiebeln',
    price: { small: 7.5, large: 9, party: 23 },
  },
  {
    id: 15,
    name: 'Frutti di Mare',
    description: 'Meeresfrüchte, Knoblauch',
    price: { small: 7.5, large: 9, party: 23 },
  },
  {
    id: '15a',
    name: 'Schrimps',
    description: 'Schrimps, Knoblauch',
    price: { small: 8, large: 9.5, party: 24 },
  },
  {
    id: 16,
    name: 'Hawaii',
    description: 'Vorderschinken<sup>1,4</sup>, Ananas',
    price: { small: 7.5, large: 8.5, party: 22 },
  },
  {
    id: 17,
    name: 'Tonno',
    description: 'Thunfisch, Zwiebeln',
    price: { small: 7.5, large: 8.5, party: 22 },
  },
  {
    id: 18,
    name: 'Diavolo',
    description: 'Salami<sup>1,2,3</sup>, Chili, Knoblauch',
    price: { small: 7, large: 8, party: 22 },
  },
  {
    id: 19,
    name: 'Sizilia',
    description: 'Vorderschinken<sup>1,4</sup>, Sardellen, Zwiebeln, Knoblauch',
    price: { small: 7.5, large: 8.5, party: 22 },
  },
  {
    id: 20,
    name: 'Napoli original',
    description: 'frische Cherrytomaten, Mozarella, frischer Basilikum',
    price: { small: 7.5, large: 8.5, party: 22 },
  },
  {
    id: 21,
    name: 'Spinaggi',
    description: 'Spinat, Ei',
    price: { small: 7.5, large: 8.5, party: 22 },
  },
  {
    id: 22,
    name: 'Quattro Formaggi',
    description: 'Mozzarella, Parmesan, Edamer, Gorgonzola',
    price: { small: 7.5, large: 8.5, party: 23 },
  },
  {
    id: 23,
    name: 'Pisa',
    description:
      'Vorderschinken<sup>1,4</sup>, frische Champignons, Oliven<sup>5</sup><sup>5</sup>, Artischocken, Peperoni',
    price: { small: 7.5, large: 8.5, party: 23 },
  },
  {
    id: 24,
    name: 'La Rossa',
    description:
      'Vorderschinken<sup>1,4</sup>, frische Champignons, Peperoni, Thunfisch',
    price: { small: 7.5, large: 8.5, party: 22 },
  },
  {
    id: 25,
    name: 'La Bella',
    description: 'Parmaschinken, Mais',
    price: { small: 7.5, large: 8.5, party: 22 },
  },
  {
    id: 26,
    name: 'Rom',
    description: 'Vorderschinken<sup>1,4</sup>, Salami<sup>1,2,3</sup>, Ei',
    price: { small: 7.5, large: 8.5, party: 23 },
  },
  {
    id: 27,
    name: 'Sucuk',
    description: 'Knoblauchwurst',
    price: { small: 7.5, large: 8.5, party: 22 },
  },
  {
    id: 28,
    name: 'Rucola Parma',
    description: 'Parmaschinken, Rucola, Parmesan',
    price: { small: 8, large: 9, party: 24 },
  },
];
