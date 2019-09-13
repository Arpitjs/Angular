 import { Component, OnInit, Input, Output } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Router } from '@angular/router';
import {NotifyService} from './../../shared/services/notify.service'
import {Item} from './../../shared/models/item.models'
import { EventEmitter } from '@angular/core'; 

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
  item
  items: Array<Item>;
  loading: boolean = false
  submitting: boolean = false;
  @Input() inputData: any
  @Output() searchagain = new EventEmitter()
  constructor(
    public itemService: ItemService,
    public router: Router,
    public notify: NotifyService
  ) {
    // constructor will get executed first
    //input data arent visible here
    this.item = new Item({});
  }

  ngOnInit() {
    console.log('this.input data', this.inputData)
     // life cycle hook of angular component
    // on init 
    // on change
    // on destroy
    // it will folllow constructor
if(this.inputData){
this.items = this.inputData
}
else{
  this.loading = true
  this.itemService.fetch()
  .subscribe(
    (data: any) => {
      console.log(data)
      this.items = data //assiging the data from backend to the variable items
      this.loading = false;
      console.log('items .>>', this.items)
      if(this.items.length > 5)
      this.notify.showWarning('cant add mores')
    },
    error => {
      this.notify.showError(error);
    })
}
  }

  removeItem(id, index) {
    let confirmation = confirm('Are you sure to remove?');
    if (confirmation) {
      this.itemService.remove(id).subscribe(
        data => {
        this.notify.showInfo('item deleted');
        this.items.splice(index, 1)
      }, error => {
        this.notify.showError(error);
      })
    }
  }
 
searchAgain(){
  //u should comnicate with search component
this.searchagain.emit('searchAgain')
}
}
