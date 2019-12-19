import { Component, OnInit,Input } from '@angular/core';
import { Cat }from '../../model/model'

@Component({
  selector: 'app-cat-detail',
  templateUrl: './cat-detail.component.html',
  styleUrls: ['./cat-detail.component.scss']
})
export class CatDetailComponent implements OnInit {

  @Input() cat:Cat

  constructor() { }

  ngOnInit() {
  }
 
  addLike(cat:Cat){
    cat.count++
  }

}
