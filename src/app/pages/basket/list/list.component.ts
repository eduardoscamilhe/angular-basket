import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnChanges {

  public products: Product[];
  public product: Product = new Product('', '', 0, '', 0, '');
  public codeProd: string;
  @Input() prod: Product;

  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.get().subscribe((res: any) => {

      this.products = res
    });
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  edit(prod: Product) {
    this.product = prod;
  }

  newProd() {
    this.product = new Product('', '', 0, '', 0, '');
  }

  delete(prod: Product) {

    var slot = this.products.indexOf(prod);
    this.products.splice(slot, 1);
  }

}
