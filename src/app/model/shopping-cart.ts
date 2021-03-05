import {Product} from './product';
import {User} from './user';

export class ShoppingCart {
  id: number;
  cartTotal: number;
  products: Product[];
  user: User;
}
