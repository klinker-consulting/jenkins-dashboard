import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { Build } from '../models/build';

@Injectable()
export class DashboardService {
    get builds(): Observable<Build[]> {
        return this.http.get('')
            .map(res => res.json())
    }

    constructor(private http: Http) {

    }
}