import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { ItemProduct } from 'src/app/interfaces/item-product.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  public product: ItemProduct;
  id: string;
  constructor(private route: ActivatedRoute, public productService: ProductsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productService.getProduct(params['id']).subscribe((res: ItemProduct) => {
        this.product = res;
        this.id = params['id'];
      });
    });

  }

}
