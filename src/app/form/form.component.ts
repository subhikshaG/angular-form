import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Product } from '../product';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  orderForm: FormGroup;
  items: FormArray;
  productByCode: Product;
  myQty: number;
  product: Product[];
 // bill: Billing[] = [];
  userId: number;
  i: number = 0;
  total: any[] = [];
  totalCt: number = 0;
  priceRow: number;
  success = false;
  sum: number;
  wrongNumber = false;
  failure = false;
  length: number;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.total[0] = 0;
    this.orderForm = this.formBuilder.group({
      customerNumber: '',
      items: this.formBuilder.array([this.createItem()])
    });
  }

  /** Generate a new row in form*/
  createItem(): FormGroup {
    return this.formBuilder.group({
      code: '',
      id: '',
      name: '',
      price: '',
      quantity: '',
    });
  }

  /**On click of button addItem, a new row is added */
  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
    this.total[this.items.length] = 0;
  }


 

  /**bill generation */
  generateBill(billForm) {
   

  }

  /**based on product code, the form array row is prepopulated */
  createItemUserByCode(product: Product, quantity): FormGroup {
    return this.formBuilder.group({
      code: product.productCode,
      id: product.productId,
      name: product.productName,
      price: product.productRatePerQuantity,
      quantity: quantity
    });
  }

  /**get product when code is typed and calculate price*/
  getCodeAndPrice(rowNumber: any, orderForm1) {
    this.myQty = orderForm1.controls.items.controls[rowNumber].controls.quantity.value;
    this.priceRow = orderForm1.controls.items.controls[rowNumber].controls.price.value;
    // this.productService.getProductByCode(orderForm1.controls.items.controls[rowNumber].controls.code.value).subscribe(data => {
    //   this.items = this.orderForm.get('items') as FormArray;
    //   this.productByCode = data;
    //   this.items.at(rowNumber).patchValue({
    //     id: this.productByCode.productId,
    //     name: this.productByCode.productName,
    //     price: this.productByCode.productRatePerQuantity
    //   })
    //   this.myQty = orderForm1.controls.items.controls[rowNumber].controls.quantity.value;
    //   this.priceRow = orderForm1.controls.items.controls[rowNumber].controls.price.value;
    //   this.total[rowNumber] = this.myQty * this.priceRow;
    // });
    this.total[rowNumber] = this.myQty * this.priceRow;
  }

  /**Total calculation*/
  getTotal() {
    this.sum = 0;
    for (let pdtItem of this.items.controls) {
      this.sum = this.sum + (pdtItem.value.quantity * pdtItem.value.price)
    }
  }

  /**remove a form array row*/
  removeProduct(index) {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.removeAt(index);
    this.items = this.orderForm.get('items') as FormArray;
    length = this.items.length;
    var i = 0;
    for (let pdtItem of this.items.controls) {
      this.total[i] = pdtItem.value.quantity * pdtItem.value.price;
      i++;
    }
    this.total[i] = '';
    this.getTotal();
  }
  hello(place:number){
    console.log("you are called");
   // console.log("you are called as "+event);
   this.items = this.orderForm.get('items') as FormArray;
   length = this.items.length;
   console.log(place+" "+length)
   if(place==length-1){
     this.getCodeAndPrice(place,this.orderForm);
     this.getTotal();
   this.addItem();}
  }
}
