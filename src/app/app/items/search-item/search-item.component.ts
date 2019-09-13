import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Router } from '@angular/router';
import { NotifyService } from '../../shared/services/notify.service';
import { Item } from '../../shared/models/item.models';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {
  submitting: boolean = false
  item
  results = []
  allItems = []
  categories = []
  names = []
  prices = []
  showName: boolean = false;
  constructor(
    public itemService: ItemService,
    public router: Router,
    public notifyService: NotifyService
  ) {
    this.item = new Item({})
    this.itemService.fetch()
      .subscribe((data: any) => {
        this.allItems = data
        this.allItems.forEach((item, i) => {
          if (this.categories.indexOf(item.category) === -1)
            this.categories.push(item.category)
        })
      }, error => {
        this.notifyService.showError(error)
      })
  }

  ngOnInit() {
  }
  submit() {
    this.submitting = true
    this.itemService.search(this.item)
      .subscribe(
        (data: any) => {
          this.submitting = false
          console.log(data)
          if(data.length){
            this.submitting = false
            this.results = data 
            if(data)
            this.submitting = false
            this.router.navigate(['/item/view']);
            let confirmation = confirm('Are you sure to add?');
            if (confirmation) 
              this.itemService.add(this.item)
          .subscribe((data) => {
            this.notifyService.showSuccess('Item Added Successfully');
          
          }, error => {
            this.notifyService.showError(error);
            this.submitting = false;
          })
         } else{
            this.notifyService.showInfo('no item matched')
          }
        }, err => {
          this.notifyService.showError(err)
        })
  }
  resetSearch() {
    console.log('reset called')
    this.results.length = 0
    this.item = new Item({})
  }

  categorySelected(category) {
    console.log(category)
    this.showName = true;
    this.names = this.allItems.filter((data) => {
      if (data.category === category){
        return true
      }
    })
  }
}
