import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Product } from 'src/app/models/product.model';
import { CustomValidator } from 'src/app/validators/custom.validator';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public form: FormGroup;
  public category: any[];
  @Input() product: Product = new Product('', '', 0, '', 0, '');
  @Input() products: Product[];
  constructor(private formBuilder: FormBuilder, private service: DataService) {
    this.form = this.formBuilder.group({
      code: ['', Validators.compose([CustomValidator.CodeValidator, Validators.required])],
      title: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      quantity: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.service.getCategory().subscribe((res: any) => {
      this.category.push(res)
    });
  }


  submit() {
    this.form.disable();
    if (this.form.valid)
      this.service.save(this.form.value).subscribe(
        (res: any) => {

          alert(res.message)
        },
        (err) => { alert(err.message) },
        () => {
          this.products.push(this.form.value);
          this.form.setValue(null);
          this.form.enable()
        });

  }
}
