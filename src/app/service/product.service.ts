import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/products/new';

  constructor(private httpClient: HttpClient) {}

  getNewProductsList(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseUrl}`);
  }
}
