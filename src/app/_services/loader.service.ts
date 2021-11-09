import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loaderSubject = new Subject();
  loaderState = this.loaderSubject.asObservable();
  constructor() { }
  show() {
    this.loaderSubject.next({ show: true });
  }
  hide() {
      setTimeout(() => {
        this.loaderSubject.next({ show: false });
      },300)
  }
}