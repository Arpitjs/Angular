import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddItemComponent } from './add-item/add-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { ViewItemComponent } from './view-item/view-item.component';
import { SearchItemComponent } from './search-item/search-item.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ItemRoutingModule } from './items.routing';
import { HttpClientModule } from '@angular/common/http';
import { ItemService } from './services/item.service';

@NgModule({
  declarations: [
    AddItemComponent,
    EditItemComponent,
    ViewItemComponent,
    SearchItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    ItemRoutingModule
  ],
  providers: [ItemService]
})
export class ItemsModule { }
