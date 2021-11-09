import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoaderService } from './_services/loader.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newendorse';

  config: any;
  collection = { count: 60, data: [] };
  headerFooter: boolean = true;

  constructor(private router: Router,private spinner: NgxSpinnerService, public loader: LoaderService) {
    var token = sessionStorage.getItem('token');
    if(token==null){
      this.router.navigate(['login']);
    }
    this.loader.loaderState.subscribe((res: any) => {
      if (res.show) {
        this.spinner.show();
      } else {
        this.spinner.hide();
      }
    });
    // Create dummy data
    for (let i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          id: i + 1,
          value: 'items number ' + (i + 1)
        }
      );
    }

    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }
  
  ngOnInit() {
    // this.spinner.show();
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          var url = event.urlAfterRedirects;
          console.log("event : ", event);
          this.headerFooter = event.urlAfterRedirects !== '/login';
          // Remove all query params (after starting from '?') from the reset password link
          url = url.replace(/\?.*$/g,"");
          console.log(url);
          if ( url ===  "/resetpassword" ) {
            this.headerFooter = false;
          }
        
        }
      });
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

}
