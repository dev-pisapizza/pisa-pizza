type Tag = 'bestseller' | 'new';

export interface Drink {
  id: string | number;
  name: string;
  description?: string;
  liters: number;
  price: number;
  tag?: Tag;
}

export const drinks: Drink[] = [
  {
    id: 62,
    name: 'Mineralwasser',
    liters: 0.5,
    price: 2,
  },
  {
    id: 63,
    name: 'Softdrink',
    description:
      'Coca-Cola, Coca-Cola Zero, Coca-Cola Light, Coca-Cola Life, Fanta, Sprite, Mezzo Mix, Lift Apfelschorle',
    liters: 1.0,
    price: 3,
    tag: 'bestseller',
  },
  {
    id: 64,
    name: 'Bier',
    liters: 0.5,
    price: 2.5,
  },
  {
    id: 65,
    name: 'Lambrusco',
    description: 'Rotwein',
    liters: 0.7,
    price: 9,
  },
  {
    id: 66,
    name: 'Chianti',
    description: 'Rotwein',
    liters: 0.7,
    price: 10,
  },
  {
    id: 67,

    name: 'Weißwein',
    liters: 0.7,
    price: 9,
  },
];
