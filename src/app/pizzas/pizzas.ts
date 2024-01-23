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
    name: 'Nutella®',
    description: 'Nutella® Topping',
    price: {
      small: 7,
      large: 8,
    },
  },
  {
    id: 'D2',
    name: 'Nutella® Calzone',
    description: 'Nutella® Füllung',
    price: {
      large: 8,
    },
  },
  {
    id: 1,
    name: 'Pizzabrot',
    description: 'Pizzateig',
    price: { small: 5, large: 6, party: 10 },
  },
  {
    id: 2,
    name: 'Margherita',
    tag: 'bestseller',
    description: 'Leckerer Käse und Oregano',
    price: { small: 7, large: 8, party: 22 },
  },
  {
    id: 3,
    name: 'Salami',
    tag: 'bestseller',
    description: 'Salami<sup>1,2,3</sup>',
    price: { small: 7.5, large: 8.5, party: 23 },
  },
  {
    id: 4,
    name: 'Prosciutto',
    tag: 'bestseller',
    description: 'Vorderschinken<sup>1,4</sup>',
    price: { small: 7.5, large: 8.5, party: 23 },
  },
  {
    id: 5,
    name: 'Funghi',
    description: 'Frische Champignons',
    price: { small: 7.5, large: 8.5, party: 23 },
  },
  {
    id: 6,
    name: 'Bari',
    description: 'Vorderschinken<sup>1,4</sup>, Salami<sup>1,2,3</sup>',
    price: { small: 8, large: 9, party: 24 },
  },
  {
    id: 7,
    name: 'Regina',
    tag: 'bestseller',
    description: 'Vorderschinken<sup>1,4</sup>, frische Champignons',
    price: { small: 8, large: 9, party: 24 },
  },
  {
    id: 8,
    name: 'Stagione',
    description: 'Vorderschinken<sup>1,4</sup>, frische Champignons, Artischocken',
    price: { small: 8.5, large: 9.5, party: 24 },
  },
  {
    id: '8a',
    name: 'Quattro Stagione',
    description:
      'Salami<sup>1,2,3</sup>, Vorderschinken<sup>1,4</sup>, frische Champignons, Artischocken',
    price: { small: 9, large: 10, party: 25 },
  },
  {
    id: 9,
    name: 'Mix',
    description:
      'Vorderschinken<sup>1,4</sup>, Salami<sup>1,2,3</sup>, frische Champignons, Paprika, Peperoni, Zwiebeln, Oliven<sup>5</sup>',
    price: { small: 9, large: 10.5, party: 25 },
  },
  {
    id: 10,
    name: 'Alassio',
    description:
      'Vorderschinken<sup>1,4</sup>, Salami<sup>1,2,3</sup>, frische Champignons, Oliven<sup>5</sup>',
    price: { small: 8.5, large: 9.5, party: 24 },
  },
  {
    id: 11,
    tag: 'bestseller',
    name: 'Pescara',
    description:
      'Vorderschinken<sup>1,4</sup>, Salami<sup>1,2,3</sup>, Peperoni, frische Champignons',
    price: { small: 8.5, large: 9.5, party: 24 },
  },
  {
    id: 12,
    name: 'San Remo',
    description: 'Frische Champignons, Oliven<sup>5</sup><sup>5</sup>, Artischocken, Sardellen',
    price: { small: 8.5, large: 9.5, party: 24 },
  },
  {
    id: 13,
    name: 'Calzone',
    description:
      'Vorderschinken<sup>1,4</sup>, Salami<sup>1,2,3</sup>, Paprika, frische Champignons',
    price: { large: 9.5 },
  },
  {
    id: 14,
    name: 'Vegetaria',
    description:
      'Frische Champignons, Oliven<sup>5</sup><sup>5</sup>, Paprika, Artischocken, Peperoni, Zwiebeln',
    price: { small: 8.5, large: 10, party: 25 },
  },
  {
    id: 15,
    name: 'Frutti di Mare',
    description: 'Meeresfrüchte, Knoblauch',
    price: { small: 8.5, large: 10, party: 25 },
  },
  {
    id: '15a',
    name: 'Schrimps',
    description: 'Schrimps, Knoblauch',
    price: { small: 9, large: 10.5, party: 25 },
  },
  {
    id: 16,
    name: 'Hawaii',
    description: 'Vorderschinken<sup>1,4</sup>, Ananas',
    price: { small: 8.5, large: 9.5, party: 24 },
  },
  {
    id: 17,
    name: 'Tonno',
    description: 'Thunfisch, Zwiebeln',
    price: { small: 8.5, large: 9.5, party: 24 },
  },
  {
    id: 18,
    name: 'Diavolo',
    description: 'Salami<sup>1,2,3</sup>, Chili, Knoblauch',
    price: { small: 8, large: 9, party: 24 },
  },
  {
    id: 19,
    name: 'Sizilia',
    description: 'Vorderschinken<sup>1,4</sup>, Sardellen, Zwiebeln, Knoblauch',
    price: { small: 8.5, large: 9.5, party: 25 },
  },
  {
    id: 20,
    name: 'Napoli original',
    description: 'Frische Cherrytomaten, Mozarella, frischer Basilikum',
    price: { small: 8.5, large: 9.5, party: 25 },
  },
  {
    id: 21,
    name: 'Spinaggi',
    description: 'Spinat, Ei',
    price: { small: 8.5, large: 9.5, party: 25 },
  },
  {
    id: 22,
    name: 'Quattro Formaggi',
    description: 'Mozzarella, Parmesan, Edamer, Gorgonzola',
    price: { small: 8.5, large: 9.5, party: 25 },
  },
  {
    id: 23,
    name: 'Pisa',
    description:
      'Vorderschinken<sup>1,4</sup>, frische Champignons, Oliven<sup>5</sup><sup>5</sup>, Artischocken, Peperoni',
    price: { small: 8.5, large: 9.5, party: 25 },
  },
  {
    id: 24,
    name: 'La Rossa',
    description: 'Vorderschinken<sup>1,4</sup>, frische Champignons, Peperoni, Thunfisch',
    price: { small: 8.5, large: 9.5, party: 25 },
  },
  {
    id: 25,
    name: 'La Bella',
    description: 'Parmaschinken, Mais',
    price: { small: 8.5, large: 9.5, party: 25 },
  },
  {
    id: 26,
    name: 'Rom',
    description: 'Vorderschinken<sup>1,4</sup>, Salami<sup>1,2,3</sup>, Ei',
    price: { small: 8.5, large: 9.5, party: 25 },
  },
  {
    id: 27,
    name: 'Sucuk',
    description: 'Knoblauchwurst',
    price: { small: 8.5, large: 9.5, party: 25 },
  },
  {
    id: 28,
    name: 'Rucola Parma',
    description: 'Parmaschinken, Rucola, Parmesan',
    price: { small: 9, large: 10, party: 25 },
  },
];
