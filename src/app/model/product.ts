import {Image} from './image';
import {Color} from './color';
import {Size} from './size';
import {Countrie} from './countrie';

export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  images: Image[];
  colors: Color[];
  sizes: Size[];
  countries: Countrie[];
}
