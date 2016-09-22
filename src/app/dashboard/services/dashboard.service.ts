import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Build } from '../models/build';

@Injectable()
export class DashboardService {
    builds: Observable<Build[]>;
}