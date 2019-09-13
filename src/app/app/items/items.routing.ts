import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { ViewItemComponent } from './view-item/view-item.component';
import { SearchItemComponent } from './search-item/search-item.component';
const ItemRouting: Routes = [
    {
        path: 'add',
        component: AddItemComponent
    },
    {
        path: 'edit/:id',
        component: EditItemComponent
    },
    {
        path: 'view',
        component: ViewItemComponent
    },
    {
        path: 'search',
        component: SearchItemComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(ItemRouting)],
    exports: [RouterModule]
})
export class ItemRoutingModule {

}