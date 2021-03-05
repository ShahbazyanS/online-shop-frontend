import {PersonalInfo} from './personal-info';
import {ShippingInfo} from './shipping-info';
import {ShoppingCart} from './shopping-cart';
import {Order} from './order';

export class User {
  id: number;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  active: boolean;
  personalInfo: PersonalInfo;
  shippingInfo: ShippingInfo;
  shoppingCart: ShoppingCart;
  orderOrder: Order;
}
