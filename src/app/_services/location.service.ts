import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';

const GEOLOCATION_ERRORS = {
    'errors.location.unsupportedBrowser': 'Browser does not support location services',
    'errors.location.permissionDenied': 'You have rejected access to your location',
    'errors.location.positionUnavailable': 'Unable to determine your location',
    'errors.location.timeout': 'Service timeout has been reached'
  };
@Injectable()
export class LocationService {
    // appStep: any;
    constructor(private http: HttpClient) { }
    // getPosition(): Promise<any> {
    //     return new Promise((resolve, reject) => {

    //         navigator.geolocation.getCurrentPosition(resp => {

    //             resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
    //         },
    //             err => {
    //                 reject(err);
    //             });
    //     });

    // }
    public getLocation(geoLocationOptions?: any): Observable<any> {
        geoLocationOptions = geoLocationOptions || { timeout: 5000 };
    
            return Observable.create(observer => {
    
              if (window.navigator && window.navigator.geolocation) {
                window.navigator.geolocation.getCurrentPosition(
                  (position) => {
                    observer.next(position);
                    observer.complete();
                  },
                  (error) => {
                      console.log('error',error)
                    switch (error.code) {
                      case 1:
                        observer.error(GEOLOCATION_ERRORS['errors.location.permissionDenied']);
                        break;
                      case 2:
                        observer.error(GEOLOCATION_ERRORS['errors.location.positionUnavailable']);
                        break;
                      case 3:
                        observer.error(GEOLOCATION_ERRORS['errors.location.timeout']);
                        break;
                    }
                  },
                  geoLocationOptions);
            } else {
                  observer.error(GEOLOCATION_ERRORS['errors.location.unsupportedBrowser']);
            }
    
            });
    
    
    
          }
}
export let geolocationServiceInjectables: Array<any> = [
    {provide: LocationService, useClass: LocationService }
  ];
