import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/components/header/header.component';
import { FooterComponent } from './components/components/footer/footer.component';
import { HomeComponent } from './components/components/home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HelpComponent } from './components/components/help/help.component';
import { ContactComponent } from './components/components/contact/contact.component';
import { LoginComponent } from './components/components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import {ButtonComponent} from './commonComponents/button/button.component'
import { FooterPrimaryComponent } from './commonComponents/footerPrimary/footerPrimary.component';
import { ProductComponent } from './components/components/product/product.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HelpComponent,
    ContactComponent,
    LoginComponent,
    HighlightDirective,
    FooterPrimaryComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
