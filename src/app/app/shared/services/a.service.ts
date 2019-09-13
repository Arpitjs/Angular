
import { Injectable } from '@angular/core';

@Injectable()
export class AService {

    constructor() {

    }

    toUpper(str) {
        return str.toUpperCase();
    }
}