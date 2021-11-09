import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SharedSearchModule } from '../shared/shared-search.module';
// import { Observable } from 'rxjs/Observable';

@Injectable(
  {
  providedIn: 'root',
  }
)
export class SearchService {

  search = new BehaviorSubject('');
  // public readonly searchObs : Observable<string> = this.search.asObservable();

  constructor() {}

  // fetchSearchText(): Observable<string> {
  fetchSearchText() {
    // console.log("fetchSearchText : ");
    return this.search.asObservable();
  }

  sendSearchText(searchTxt: string) {
    // console.log("sendSearchText : ", searchTxt);
    this.search.next(searchTxt);
  }

}