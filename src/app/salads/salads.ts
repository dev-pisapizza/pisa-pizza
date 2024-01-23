type Tag = 'bestseller' | 'new';

export interface Salad {
  id: string | number;
  name: string;
  description?: string;
  price: number;
  tag?: Tag;
}

export const salads: Salad[] = [
  {
    id: 54,
    name: 'Gemischter Salat',
    description: 'Grüner Salat, Tomaten, Gurken, Zwiebeln',
    price: 7,
    tag: 'new',
  },
  {
    id: 55,
    name: 'Gurkensalat',
    description: 'Grüner Salat, Gurken, Zwiebeln',
    price: 7,
  },
  {
    id: 56,
    name: 'Tomatensalat',
    description: 'Grüner Salat, Tomaten, Zwiebeln',
    price: 7,
  },
  {
    id: 57,
    name: 'Bauernsalat',
    description: 'Grüner Salat, Tomaten, Gurken, Zwiebeln, Paprika, Oliven<sup>5</sup>, Schafskäse',
    price: 8.5,
  },
  {
    id: 58,
    name: 'Italienischer Salat',
    description:
      'Grüner Salat, Tomaten, Gurken, Zwiebeln, Peperoni, Oliven<sup>5</sup>, Käse, Thunfisch, Vorderschinken<sup>1,4</sup>, Ei',
    price: 9,
  },
  {
    id: 59,
    name: 'Mozzarella Salat',
    description: 'Grüner Salat, Tomaten, Mozzarella, Mozzarella Gewürz und extra Pizzabrot (bei Bestellung als Teil eines Pakets ist kein Pizzabrot enthalten)',
    price: 10,
  },
  {
    id: 60,
    name: 'Pisa Salat',
    description: 'Grüner Salat, Tomaten, Gurken, Zwiebeln, Peperoni, Oliven<sup>5</sup>, Mais, Ei',
    price: 8,
  },
  {
    id: 61,
    name: 'Tonno Salat',
    description: 'Grüner Salat, Tomaten, Zwiebeln, Thunfisch',
    price: 9,
  },
];
