type Tag = 'bestseller' | 'new';

export interface Package {
  id: string;
  name: string;
  description: string;
  price: {
    normal?: number; // Price for packages with two small pizzas
    large?: number; // Price for packages with large pizza or for packages without pizza
  };
  tag?: Tag;
}

export const packages: Package[] = [
  {
    id: 'P1',
    name: 'Pizza, Salat & Softdrink',
    description: 'Eine Pizza, einen Salat und einen Softdrink frei wählbar à la carte',
    price: {
      normal: 19,
      large: 20,
    },
  },
  {
    id: 'P2',
    name: '2x Pizza, Salat & Softdrink',
    description: 'Zwei Pizzas, einen Salat und einen Softdrink frei wählbar à la carte',
    price: {
      normal: 25,
      large: 27,
    },
    tag: 'bestseller',
  },
  {
    id: 'P3',
    name: 'Pasta, Salat & Softdrink',
    description: 'Eine Pasta, einen Salat und einen Softdrink frei wählbar à la carte',
    price: {
      large: 20,
    },
  },
  {
    id: 'P4',
    name: '2x Pasta, Salat & Softdrink',
    description: 'Zwei Pastas, einen Salat und einen Softdrink frei wählbar à la carte',
    price: {
      large: 27,
    },
  },
  {
    id: 'P5',
    name: 'Pizza, Pasta, Salat & Softdrink',
    description:
      'Eine große Pizza, eine Pasta, einen Salat und einen Softdrink frei wählbar à la carte',
    price: {
      large: 27,
    },
    tag: 'bestseller',
  },
];
