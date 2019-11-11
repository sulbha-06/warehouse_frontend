import { Component, OnInit } from '@angular/core';
import { productdata } from '../productdata/productdata';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

productdata : any;
productName : String;
productResult:any;
showTable:boolean = false;
errorFlag:boolean = false;
productList:number[];
selectedProduct:any[];
  constructor() { }

  ngOnInit() {
   this.productdata = [

      {
        "Id" : 1, 
    "productId" : "product1",
    "productName" : "Item1",
    "producttype" : "hard",
    "productSerialNumber" : "12345"
  
      },
  
      {
        "Id" : 2, 
    "productId" : "product2",
    "productName" : "Item2",
    "producttype" : "hard",
    "productSerialNumber" : "123131"
  
      },
  
      {
        "Id" : 3, 
    "productId" : "product3",
    "productName" : "Item3",
    "producttype" : "soft",
    "productSerialNumber" : "1245441"
  
      },
      {
        "Id" : 4, 
    "productId" : "product4",
    "productName" : "Item4",
    "producttype" : "soft",
    "productSerialNumber" : "16445441"
  
      },
      {
        "Id" : 5, 
    "productId" : "product5",
    "productName" : "Item5",
    "producttype" : "soft",
    "productSerialNumber" : "1454441"
  
      }
    
    
    ];
  }


  
  Search(_productName: any){

    if (_productName != ""){
      this.productResult = this.productdata.filter(function(prod){
        return prod.productName == _productName;
      })
      console.log("productResult data"+this.productResult);
    }
    if(this.productResult != ''){
      this.showTable = true;
      this.productName = '';
      this.errorFlag = false;
    }else{
      
      this.showTable = false;
      this.errorFlag = true;
    }
  }


  addProduct(productId:any){
    this.productList.push(productId);

    if (this.productList){
      this.selectedProduct = this.productdata.filter(function(prod){
        return prod.productId == productId;
      })
      console.log("productResult data"+this.productResult);
    }

  }

}
