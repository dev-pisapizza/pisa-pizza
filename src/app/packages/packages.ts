type Tag = 'bestseller' | 'new';

export interface Package {
  id: string;
  name: string;
  description: string;
  price: {
    normal?: number;
    large?: number;
  };
  tag?: Tag;
}

export const packages: Package[] = [
  {
    id: 'P1',
    name: 'Pizza, Salat & Getränk',
    description: 'Eine Pizza, einen Salat und ein Getränk frei wählbar à la carte',
    price: {
      normal: 19,
      large: 20,
    },
  },
  {
    id: 'P2',
    name: '2x Pizza, Salat & Getränk',
    description: 'Zwei Pizzas, einen Salat und ein Getränk frei wählbar à la carte',
    price: {
      normal: 25,
      large: 27,
    },
    tag: 'bestseller',
  },
  {
    id: 'P3',
    name: 'Pasta, Salat & Getränk',
    description: 'Eine Pasta, einen Salat und ein Getränk frei wählbar à la carte',
    price: {
      large: 20,
    },
  },
  {
    id: 'P4',
    name: '2x Pasta, Salat & Getränk',
    description: 'Zwei Pastas, einen Salat und ein Getränk frei wählbar à la carte',
    price: {
      large: 27,
    },
  },
  {
    id: 'P5',
    name: 'Pizza, Pasta, Salat & Getränk',
    description: 'Eine Pizza, eine Pasta, einen Salat und ein Getränk frei wählbar à la carte',
    price: {
      large: 27,
    },
    tag: 'bestseller',
  },
];
