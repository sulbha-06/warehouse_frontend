import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};

  public obs = new Observable(); //creating observable
  public  uname:String = '';
  public  pwrd:String = '';
  public  successFlag:boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
    //console.log("user name is :"+this.uname);
  }

  loginCheck(){
    if(this.uname === "sulbha" && this.pwrd === "1234"){
      console.log("loginCheck user name isdsdsdsddsds :"+this.uname);
       this.router.navigate(['/home']);
    }else{
      this.uname = '';
      this.pwrd = ''; 
      this.successFlag =true;
     
    }
  }

}
