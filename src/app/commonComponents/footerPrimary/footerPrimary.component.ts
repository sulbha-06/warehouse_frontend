import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-footerPrimary',
  templateUrl: './footerPrimary.component.html',
  styleUrls: ['./footerPrimary.component.css']
})
export class FooterPrimaryComponent implements OnInit {

  public detail:string = "footerPrimary is here";
  constructor() { }

  ngOnInit() {
  }

}
