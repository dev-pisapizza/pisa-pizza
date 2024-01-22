type Tag = 'bestseller' | 'new';

export interface Drink {
  name: string;
  liters: number;
  price: number;
  tag?: Tag;
}

export const drinks: Drink[] = [
  {
    name: 'Mineralwasser',
    liters: 0.5,
    price: 2,
  },
  {
    name: 'Coca-Cola',
    liters: 1.0,
    price: 3,
  },
  {
    name: 'Coca-Cola Zero',
    liters: 1.0,
    price: 3,
  },
  {
    name: 'Coca-Cola Light',
    liters: 1.0,
    price: 3,
  },
  {
    name: 'Coca-Cola Life',
    liters: 1.0,
    price: 3,
  },
  {
    name: 'Fanta',
    liters: 1.0,
    price: 3,
  },
  {
    name: 'Sprite',
    liters: 1.0,
    price: 3,
  },
  {
    name: 'Mezzo Mix',
    liters: 1.0,
    price: 3,
  },
  {
    name: 'Lift Apfelschorle',
    liters: 1.0,
    price: 3,
  },
  {
    name: 'Bier',
    liters: 0.5,
    price: 2.5,
  },
  {
    name: 'Lambrusco (Rotwein)',
    liters: 0.75,
    price: 9,
  },
  {
    name: 'Chianti (Rotwein)',
    liters: 0.7,
    price: 10,
  },
  {
    name: 'Weißwein',
    liters: 0.75,
    price: 9,
  },
];
