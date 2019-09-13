import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NotifyService } from './services/notify.service';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [PageNotFoundComponent, LoaderComponent],
  imports: [
    CommonModule
  ],
  exports: [PageNotFoundComponent, LoaderComponent],
  providers: [NotifyService]
})
export class SharedModule { }
