import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { LoaderService } from './loader.service';
import { Observable } from 'rxjs'
import { map, filter, tap } from 'rxjs/operators';

declare const window;

@Injectable()
export class AuthTokenService implements HttpInterceptor {
  constructor(public loader: LoaderService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Raajkamal")
    console.log(req)
    const started = Date.now();
    this.loader.show()
    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          this.loader.hide()
          
          const elapsed = Date.now() - started;
          // console.log(event.body)
          let body = event.body;
          if (body.status == 'failure') {
            if (body.message == 108) {
              // alert('Token expired')
              
              window.setTimeout(function () { window.location = "http://localhost:9345/"; }, 3000);
            }
          }
          // console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
        }
      }, error => {
        console.log('ERROR', error)
        this.loader.hide()

      })
    )
  }
}
