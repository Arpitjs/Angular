import { Component, OnInit } from '@angular/core';
import { Item } from './../../shared/models/item.models'
import { Router } from '@angular/router';
import { ItemService } from '../services/item.service';
import { environment } from 'src/environments/environment';
import { NotifyService } from './../../shared/services/notify.service'
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  item
  submitting: boolean = false;
  url;
  countLimit = 0;
  constructor(
    public router: Router,
    public itemService: ItemService,
    public notify: NotifyService
  ) {
    this.item = new Item({});
    this.url = environment.BaseUrl + '/item?token=' + localStorage.getItem('token');
  }

  ngOnInit() {
  }

  submit() {

      this.submitting = true;
      this.itemService.add(this.item)
        .subscribe((data: any) => {
          console.log(this.item)
            this.notify.showSuccess('Item Added Successfully');
            // this.router.navigate(['/item/view']);
            
        }, error => {
          this.notify.showError(error);
          this.submitting = false;
        })    
}
}



