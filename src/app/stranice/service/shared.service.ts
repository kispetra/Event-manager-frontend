// shared-data.service.ts

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private loginDataSubject = new Subject<any>();

  sendLoginData(data: any) {
    this.loginDataSubject.next(data);
  }

  getLoginData() {
    return this.loginDataSubject.asObservable();
  }
}
