import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataTablesModule } from 'angular-datatables';
import { Ng5SliderModule } from 'ng5-slider';
import { LeadsModule } from './leads/leads.module';
import { ProductModule } from './product/product.module';
import { ApplicationModule } from './application/application.module';
import { CustDetailsModule } from './cust-details/cust-details.module';
// import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
// import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
// import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { DatePipe } from '@angular/common';
import { AppSummaryComponent } from './app-summary/app-summary.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { ArrayFilterPipe } from './array-filter.pipe';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ChartsModule } from 'ng2-charts';
import {NgxPaginationModule} from 'ngx-pagination';
import { Globals } from './globals';
import { PagerService } from './_services/pager.service'
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { DashboardService } from './_services';
import {ApplicationService} from './_services';
import { NgxUploaderModule } from 'ngx-uploader';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { AuthTokenService } from './_services/httpinterceptor.service';
import {LoaderService } from './_services/loader.service';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ImageCropperModule } from 'ngx-image-cropper';
import { CustomerConnectModule } from './customer-connect/customer-connect.module';
import { WebcamModule } from 'ngx-webcam';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AppointmentComponent } from './appointments/appointment.component';
import { ApplicationNewModule } from './application-new/application-new.module';
import{ IconsModule } from './icons/icons.module';
// ## HEMA - search
// import { TestPipeComponent } from './shared/test-pipe';
import { SharedSearchModule } from './shared/shared-search.module';
import { SearchFilterModule } from './shared/search-filter.module';
// import { NoDataValueComponent } from './no-data-value/no-data-value.component';


// const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
//   suppressScrollX: true
// };


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AppSummaryComponent,
    ArrayFilterPipe,
    LoginComponent,
    ResetPasswordComponent,
    AppointmentComponent,
    // NoDataValueComponent,
    // ## HEMA - Test search
    // TestPipeComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    UiModule,
    DataTablesModule,
    HttpClientModule,
    Ng5SliderModule,
    LeadsModule,
    ApplicationModule,
    // PerfectScrollbarModule,
    ProductModule,
    CustDetailsModule,
    FilterPipeModule,
    NgxPaginationModule,
    ChartsModule,
    ImageCropperModule,
    PdfViewerModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUploaderModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ApplicationNewModule,
    CustomerConnectModule,
    WebcamModule,
    IconsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      tapToDismiss: true,
      progressBar: true,
      preventDuplicates: true
    }),
    // ## HEMA - search
    SharedSearchModule,
    SearchFilterModule
  ],
  providers: [
    Globals,
    // {
    //   provide: PERFECT_SCROLLBAR_CONFIG,
    //   useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    // },
    DatePipe,
    PagerService,
    DashboardService,
    ArrayFilterPipe,
    ApplicationService,
    NgxSpinnerService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenService, multi: true },
    LoaderService,
    // ## HEMA - search
    SharedSearchModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
