import { Component, OnInit } from '@angular/core';
import { productdata } from '../productdata/productdata';
import { CommonModule } from '@angular/common';
export interface ProductDetail{
  Id: string;
  productId: String;
  productName:string;
  producttype: string;
  Amount: string;
  Action:string
}

const ELEMENT_DATA:ProductDetail[]=[
  {
    "Id" :" 1", 
    "productId" : "product1",
    "productName" : "Item1",
    "producttype" : "hard",
    "Amount" : "12345",
    "Action":"add"
  },
  {
    "Id" : "1", 
"productId" : "product1",
"productName" : "Item1",
"producttype" : "hard",
"Amount" : "12345",
"Action":"add"

  },

  {
    "Id" : "2", 
"productId" : "product2",
"productName" : "Item2",
"producttype" : "hard",
"Amount" : "123131",
"Action":"add"

  },

  {
    "Id" : "3", 
"productId" : "product3",
"productName" : "Item3",
"producttype" : "soft",
"Amount" : "1245441",
"Action":"add"

  },
  {
    "Id" : "4", 
"productId" : "product4",
"productName" : "Item4",
"producttype" : "soft",
"Amount" : "16445441",
"Action":"add"

  },
  {
    "Id" : "5", 
"productId" : "product5",
"productName" : "Item5",
"producttype" : "soft",
"Amount" : "1454441",
"Action":"add"

  }

]

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
selectedProduct:[
  {
    "Id" : 1, 
    "productId" : "product1",
    "productName" : "Item1",
    "producttype" : "hard",
    "Amount" : "12345"
  }
];
  constructor() { }

  ngOnInit() {
   this.productdata = [

      {
        "Id" : 1, 
    "productId" : "product1",
    "productName" : "Item1",
    "producttype" : "hard",
    "Amount" : "12345"
  
      },
  
      {
        "Id" : 2, 
    "productId" : "product2",
    "productName" : "Item2",
    "producttype" : "hard",
    "Amount" : "123131"
  
      },
  
      {
        "Id" : 3, 
    "productId" : "product3",
    "productName" : "Item3",
    "producttype" : "soft",
    "Amount" : "1245441"
  
      },
      {
        "Id" : 4, 
    "productId" : "product4",
    "productName" : "Item4",
    "producttype" : "soft",
    "Amount" : "16445441"
  
      },
      {
        "Id" : 5, 
    "productId" : "product5",
    "productName" : "Item5",
    "producttype" : "soft",
    "Amount" : "1454441"
  
      }
    
    
    ];
  }

  displayedColumns: string[] = [ 'productId', 'productName', 'producttype','Amount',"Action"];
  dataSource = ELEMENT_DATA;
  
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
    //this.productList.push(productId);

    if (this.productList){
      console.log("selectedProduct data"+this.selectedProduct);
      this.selectedProduct.push(this.productResult);

      console.log("productResult data"+this.productResult);
    }

  }

}
