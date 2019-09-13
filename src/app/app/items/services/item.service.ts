import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Item} from './../../shared/models/item.models'

import { BaseService } from './../../shared/services/base.service'


@Injectable()
export class ItemService extends BaseService {
    constructor(
        public http: HttpClient
    ) {
        super('item');
    }

    add(data: Item) {
        return this.http.post(this.url, data, this.getOptionsWithToken())
    }

    update(data: Item) {
        return this.http.put(this.url + data._id, data, this.getOptionsWithToken());
    }

    remove(id: string) {
        return this.http.delete(this.url + id, this.getOptionsWithToken());
    }
    fetch() {
        return this.http.get(this.url, this.getOptionsWithToken());
    }
    fetchById(id: string) {
        return this.http.get(this.url + id, this.getOptionsWithToken());

    }
    search(condition: Item) {
        return this.http.post(this.url + 'search', condition, this.getOptionsWithToken());
    }
    upload(item: Item, files: Array<any>) {
        // http call with XHR request
    }

    
}