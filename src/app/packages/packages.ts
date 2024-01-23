type Tag = 'bestseller' | 'new';

export interface Package {
  id: string;
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
    description: 'Pizza, Salat & Getränk',
    price: {
      normal: 19,
      large: 20,
    },
  },
  {
    id: 'P2',
    description: '2x Pizza, Salat & Getränk',
    price: {
      normal: 25,
      large: 27,
    },
    tag: 'bestseller'
  },
  {
    id: 'P3',
    description: 'Pasta, Salat & Getränk',
    price: {
      large: 20,
    },
  },
  {
    id: 'P4',
    description: '2x Pasta, Salat & Getränk',
    price: {
      large: 27,
    },
  },
  {
    id: 'P5',
    description: 'Pizza, Pasta, Salat & Getränk',
    price: {
      large: 27,
    },
    tag: 'bestseller'
  },
];
