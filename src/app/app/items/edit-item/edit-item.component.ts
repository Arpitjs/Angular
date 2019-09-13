import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemService } from '../services/item.service';
import { NotifyService } from '../../shared/services/notify.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  item;
  id
  submitting: boolean = false
  loading: boolean = false
  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public itemService: ItemService,
    public notifyService: NotifyService
  ) {
    this.id = this.activeRoute.snapshot.params['id']
   }

  ngOnInit() {
    this.loading = true
    this.itemService.fetchById(this.id)
    .subscribe(
      data=>{
        this.loading = false
        this.item = data
        console.log(this.item)
      },
      error=>{
        this.loading = false
        this.notifyService.showError(error)
      }
    )
    }
submit(){
  this.submitting = true
  this.itemService.update(this.item)
  .subscribe(
    data=>{
      this.router.navigate(['/item/view'])
      this.notifyService.showInfo('item updated succesfully')
    },
    error=>{
      this.notifyService.showError(error)
      this.submitting= false
    }
  )
}
}
