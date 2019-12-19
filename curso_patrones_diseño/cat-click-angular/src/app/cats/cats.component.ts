import { Component, OnInit } from '@angular/core';
import { Cat }from '../../model/model'
import {CatService} from '../../services/cat.service'

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {

  constructor(private catService:CatService) { }
  
  catSelect:Cat;

  cats:Cat[]

  ngOnInit() {
    this.getCats()
  }

  getCats():void{
    this.catService.getCats().subscribe(cats => this.cats = cats)
  }

  selectedCat(cat:Cat):void{
    this.catSelect = cat;
  }

}
