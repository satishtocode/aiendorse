import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';
// import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
// import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
// import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ChartsModule } from 'ng2-charts';
import { UiSwitchModule } from 'ngx-ui-switch';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { AngularOpenlayersModule } from 'ngx-openlayers';
import { NgxUploaderModule } from 'ngx-uploader';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ImageCropperModule } from 'ngx-image-cropper';

// import { ListComponent } from './list/list.component';
import { ApplicationRoutingModule } from './application-rourting.module';
// import { DocumentCollectionComponent } from './document-collection/document-collection.component';
import { IdVerficationComponent } from './id-verfication/id-verfication.component';
import { DataVerficationComponent } from './data-verfication/data-verfication.component';
// import { CreditAnalysisComponent } from './credit-analysis/credit-analysis.component';
// import { LegalAssessmentComponent } from './legal-assessment/legal-assessment.component';
// import { CreditDecisionComponent } from './credit-decision/credit-decision.component';
// import { CustomerConsentComponent } from './customer-consent/customer-consent.component';
// import { AccountCreationComponent } from './account-creation/account-creation.component';
// import { DisbursalComponent } from './disbursal/disbursal.component';
// import { PersonaAnalysisComponent } from './persona-analysis/persona-analysis.component';
// import { RiskAnalysisComponent } from './risk-analysis/risk-analysis.component';
// import { ProductModule } from '../product/product.module';
import { UserProfileComponent } from '../application/user-profile/user-profile.component';
import { LeftSidebarComponent } from '../application/left-sidebar/left-sidebar.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { CurrencyFormat } from './currency.pipe';
// import { KycViewComponent } from './kyc-view/kyc-view.component';
// import { BlacklistComponent } from './blacklist/blacklist.component';
import { ApplicationComponent } from './application.component';
import { LocationVerificationComponent } from './location-verification/location-verification.component';
// import { SignatureVerificationComponent } from './signature-verification/signature-verification.component';
// import { DataConsistencyComponent } from './data-consistency/data-consistency.component';
// import { FinancialAnalyserComponent } from './financial-analyser/financial-analyser.component';
import { LocationService } from '../_services/location.service';
// ## HEMA - search
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchFilterModule } from '../shared/search-filter.module';
import { SharedSearchModule } from '../shared/shared-search.module';
// const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
//   suppressScrollX: true
// };

@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [
    UserProfileComponent,
    // ListComponent, 
    // DocumentCollectionComponent, 
    IdVerficationComponent, 
    DataVerficationComponent, 
    // CreditAnalysisComponent, 
    // LegalAssessmentComponent, 
    // CreditDecisionComponent, 
    // CustomerConsentComponent, 
    // AccountCreationComponent, 
    // DisbursalComponent, 
    // PersonaAnalysisComponent,
    // RiskAnalysisComponent, 
    LeftSidebarComponent, 
    ProfileInfoComponent, 
    CurrencyFormat, 
    // KycViewComponent, 
    // BlacklistComponent, 
    ApplicationComponent, 
    LocationVerificationComponent, 
    // SignatureVerificationComponent, 
    // DataConsistencyComponent, 
    // FinancialAnalyserComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng5SliderModule,
    // PerfectScrollbarModule,
    ImageCropperModule,
    // ProductModule,
    RoundProgressModule,
    ChartsModule,
    FontAwesomeModule,
    PdfViewerModule,
    AngularOpenlayersModule,
    NgxUploaderModule,
    UiSwitchModule.forRoot({
      size: 'small',
      color: 'rgb(0, 189, 99)',
      switchColor: '#FFFFFF',
      defaultBgColor: '#ff0000'
    }),  
    // ## HEMA - search
    // Ng2SearchPipeModule,
    SharedSearchModule,
    SearchFilterModule
  ],
  exports: [
    // UserProfileComponent,
    // LeftSidebarComponent,
    // ProfileInfoComponent,
    // UserProfileComponent, 
    // ListComponent, 
    // DocumentCollectionComponent, 
    // IdVerficationComponent, 
    // DataVerficationComponent, 
    // CreditAnalysisComponent, 
    // LegalAssessmentComponent, 
    // CreditDecisionComponent, 
    // CustomerConsentComponent, 
    // AccountCreationComponent, 
    // DisbursalComponent, 
    // PersonaAnalysisComponent, 
    // RiskAnalysisComponent, 
    // LeftSidebarComponent, 
    CurrencyFormat, 
    // KycViewComponent, 
    // BlacklistComponent, 
    // ApplicationComponent, 
    // LocationVerificationComponent, 
    // SignatureVerificationComponent, 
    // DataConsistencyComponent, 
    // FinancialAnalyserComponent
  ],
  providers: [
    // {
    //   provide: PERFECT_SCROLLBAR_CONFIG,
    //   useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    // },
    LocationService
  ]
})
export class ApplicationModule { }
