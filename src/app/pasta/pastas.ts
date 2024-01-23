type Tag = 'bestseller' | 'new';

export interface Pasta {
  id: string | number;
  name: string;
  description?: string;
  price: number;
  tag?: Tag;
}

export const pastas: Pasta[] = [
  {
    id: 29,
    name: 'Spaghetti Napoli',
    description: 'Tomatensoße',
    price: 8,
  },
  {
    id: 30,
    name: 'Spaghetti Bolgnese',
    description: 'Tomatensoße mit Rinderhackfleisch',
    price: 9,
  },
  {
    id: 31,
    name: 'Spaghetti Carbonara',
    description: 'Sahnesoße, Vorderschinken<sup>1,4</sup>, Ei',
    price: 9,
    tag: 'bestseller',
  },
  {
    id: 32,
    name: 'Spaghetti Aglio è Olio',
    description: 'Knoblauch, Olivenöl<sup>5</sup>, Peperoni',
    price: 8.5,
  },
  {
    id: 33,
    name: 'Spaghetti Funghi',
    description: 'Sahnesoße, frische Champignons, Weißwein',
    price: 9.5,
  },
  {
    id: 34,
    name: 'Spaghetti Mare',
    description: 'Tomatensoße, Meeresfrüchte, Knoblauch',
    price: 9.5,
  },
  {
    id: 35,
    name: 'Spaghetti Pisa',
    description: 'Tomatensoße mit Rinderhackfleisch, Vorderschinken, Erbsen',
    price: 9.5,
  },
  {
    id: 36,
    name: 'Spaghetti Panna',
    description: 'Sahnesoße, Vorderschinken<sup>1,4</sup>',
    price: 8.5,
  },
  {
    id: 37,
    name: 'Spaghetti Quattro Formaggi',
    description: 'Sahnesoße, Mozzarella, Parmesan, Edamer, Gorgonzola',
    price: 9.5,
  },
  {
    id: 38,
    name: 'Rigatoni Napoli',
    description: 'Tomatensoße',
    price: 8,
  },
  {
    id: 39,
    name: 'Rigatoni Bolgnese',
    description: 'Tomatensoße mit Rinderhackfleisch',
    price: 9,
    tag: 'bestseller',
  },
  {
    id: 40,
    name: 'Rigatoni Carbonara',
    description: 'Sahnesoße, Vorderschinken<sup>1,4</sup>, Ei',
    price: 9,
  },
  {
    id: 41,
    name: 'Rigatoni al Forno',
    description: 'Tomatensoße mit Rinderhackfleisch, Vorderschinken, Erbsen, überbacken mit Käse',
    price: 10,
    tag: 'bestseller',
  },
  {
    id: 42,
    name: 'Rigatoni Panna',
    description: 'Sahnesoße, Vorderschinken<sup>1,4</sup>',
    price: 8.5,
  },
  {
    id: 43,
    name: 'Rigatoni Mare',
    description: 'Tomatensoße, Meeresfrüchte, Knoblauch',
    price: 9.5,
  },
  {
    id: 44,
    name: 'Rigatoni Quattro Formaggi',
    description: 'Sahnesoße, Mozzarella, Parmesan, Edamer, Gorgonzola',
    price: 9.5,
    tag: 'bestseller',
  },
  {
    id: 45,
    name: 'Rigatoni Funghi',
    description: 'Sahnesoße, frische Champignons, Weißwein',
    price: 9.5,
  },
  {
    id: '45a',
    name: 'Rigatoni Brokkoli al Forno',
    description: 'Sahnesoße, Brokkoli, Chili, überbacken mit Käse',
    price: 10,
    tag: 'new',
  },
  {
    id: 46,
    name: 'Tortellini Napoli',
    description: 'Tomatensoße',
    price: 8.5,
  },
  {
    id: 47,
    name: 'Tortellini Bolgnese',
    description: 'Tomatensoße mit Rinderhackfleisch',
    price: 10,
  },
  {
    id: 48,
    name: 'Tortellini Carbonara',
    description: 'Sahnesoße, Vorderschinken<sup>1,4</sup>, Ei',
    price: 9.5,
  },
  {
    id: 49,
    name: 'Tortellini al Forno',
    description:
      'Tomatensoße mit Rinderhackfleisch, Vorderschinken<sup>1,4</sup>, Erbsen, überbacken mit Käse',
    price: 10.5,
  },
  {
    id: 50,
    name: 'Tortellini Panna',
    description: 'Sahnesoße, Vorderschinken<sup>1,4</sup>',
    price: 9,
    tag: 'bestseller',
  },
  {
    id: 51,
    name: 'Tortellini Mare',
    description: 'Tomatensoße, Meeresfrüchte, Knoblauch',
    price: 10,
  },
  {
    id: 52,
    name: 'Tortellini Quattro Formaggi',
    description: 'Sahnesoße, Mozzarella, Parmesan, Edamer, Gorgonzola',
    price: 10,
  },
  {
    id: 53,
    name: 'Lasagna al Forno',
    description: 'Tomatensoße mit Rinderhackfleisch, Sahne, überbacken mit Käse',
    price: 10,
  },
];
