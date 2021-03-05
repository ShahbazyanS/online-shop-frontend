import {Product} from './product';

export class Category {
  id: number;
  name: string;
  category: Category;
  products: Product[];
}
