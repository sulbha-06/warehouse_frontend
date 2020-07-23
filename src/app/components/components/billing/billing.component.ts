import { Component, OnInit } from '@angular/core';
import { ProductlistService } from 'src/app/services/productlist.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  
  productdata : any;
  productName : String;
  productResult:any;
  showTable:boolean = false;
  errorFlag:boolean = false;
  productList:any[];
  selectedProduct:any[] = [];
  quantity:Array<number> = [1,2,3,4,5];
  selectedQuantity:number = 1;
  selectFlag:boolean = false;
  totalPrice: number = 0.00;
  productsPrice:Array<number> = [];
  finalAmount:number = 0;
  constructor(private products:ProductlistService) { }

  ngOnInit() {

    this.products.get().subscribe(res => {
      this.productdata = res;
    });
  }

  addProduct(product:object){
    this.selectedProduct.push(product);
    
    console.log('product is->', product);
    console.log('selected product list', this.selectedProduct);
    this.selectFlag = true;
  }
  removeProduct(product:object){
    console.log('index -->',this.selectedProduct.indexOf(product));
    this.selectedProduct.splice(this.selectedProduct.indexOf(product),0);
    console.log('product is->', product);
    console.log('selected product list', this.selectedProduct);
    if(this.selectedProduct.length){
      this.selectFlag = false;
    }
  }
  totalAmount(){
  this.totalPrice = this.selectedProduct.filter(item => item.productId !== null)
                        .reduce((sum, current) => sum + current.Amount*current.quantity, 0);
  }
  onSelectQuantity(product:object, selectedQuantity:number){
    this.selectedProduct.filter(pro=>{
      if(pro.id == product.id){
        pro.quantity = selectedQuantity;
        console.log('pro.quantity is -->',pro.quantity);
        
      }
    });
  }



}
