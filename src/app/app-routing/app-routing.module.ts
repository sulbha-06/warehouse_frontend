import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule , Routes} from   '@angular/router';
import { HomeComponent } from '../components/components/home/home.component';
import { HelpComponent } from '../components/components/help/help.component';
import { ContactComponent } from '../components/components/contact/contact.component';
import { LoginComponent } from '../components/components/login/login.component';
import { ProductComponent } from '../components/components/product/product.component';
const routes: Routes = [
    {
        path: '',
        component: LoginComponent      
    },
    {
      path: 'home',
      component: HomeComponent      
  },
    {
      path: 'help',
      component: HelpComponent
    },
    {
      path: 'contact',
      component: ContactComponent
    },{
      path:'login',
      component: LoginComponent
    },
    {
      path:'product',
      component: ProductComponent
    },
    {
      path:'**',
      component: LoginComponent //need to be replaced by page notfound
    }


];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports :[
    RouterModule
  ]
})
export class AppRoutingModule { }
