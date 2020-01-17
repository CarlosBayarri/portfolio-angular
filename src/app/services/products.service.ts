import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  loading = true;
  public products: Product[] = [];
  constructor(public http: HttpClient) { 
    this.loadProducts();
  }

  private loadProducts() {
    this.http.get('https://portfolio-angular-902a9.firebaseio.com/products_idx.json').subscribe((res: Product[]) => {
      this.products = res;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    })
  }

}
