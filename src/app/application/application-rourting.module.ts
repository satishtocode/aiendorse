import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { DocumentCollectionComponent } from './document-collection/document-collection.component';
import { IdVerficationComponent } from './id-verfication/id-verfication.component';
import { DataVerficationComponent } from './data-verfication/data-verfication.component';
import { CreditAnalysisComponent } from './credit-analysis/credit-analysis.component';
import { LegalAssessmentComponent } from './legal-assessment/legal-assessment.component';
import { CreditDecisionComponent } from './credit-decision/credit-decision.component';
import { CustomerConsentComponent } from './customer-consent/customer-consent.component';
import { AccountCreationComponent } from './account-creation/account-creation.component';
import { DisbursalComponent } from './disbursal/disbursal.component';
import { KycViewComponent } from './kyc-view/kyc-view.component';
import { BlacklistComponent } from './blacklist/blacklist.component';
import { ApplicationComponent } from './application.component';
import { LocationVerificationComponent } from './location-verification/location-verification.component';
import { DataConsistencyComponent } from './data-consistency/data-consistency.component';
import { SignatureVerificationComponent } from './signature-verification/signature-verification.component';
import { FinancialAnalyserComponent } from './financial-analyser/financial-analyser.component'

const routes: Routes = [

    {
        path: '',
        component: ListComponent,
    },
    {
        path: 'details',
        component: ApplicationComponent,
        children: [
            {
                path: 'document_collection/:app_id/:cust_id',
                component: DocumentCollectionComponent,
            },
            {
                path: 'location_verification/:app_id/:cust_id',
                component: LocationVerificationComponent,
            },
            {
                path: 'identity_verification/:app_id/:cust_id',
                component: IdVerficationComponent,
            },
            {
                path: 'blacklist_check/:app_id/:cust_id',
                component: BlacklistComponent,
            },
            {
                path: 'document_validation/:app_id/:cust_id',
                component: DataVerficationComponent,
            },
            {
                path: 'credit_worth_analysis/:app_id/:cust_id',
                component: CreditAnalysisComponent,
            },
            {
                path: 'legal_assessment/:app_id/:cust_id',
                component: LegalAssessmentComponent
            },
            {
                path: 'credit_decision/:app_id/:cust_id',
                component: CreditDecisionComponent,
            },
            {
                path: 'customer_consent/:app_id/:cust_id',
                component: CustomerConsentComponent
            },
            {
                path: 'disbursal/:app_id/:cust_id',
                component: DisbursalComponent,
            },
            {
                path: 'account_creation/:app_id/:cust_id',
                component: AccountCreationComponent,
            },
            {
                path: 'kyc_summary/:app_id/:cust_id',
                component: KycViewComponent,
            },
            {
                path: 'data_consistency/:app_id/:cust_id',
                component: DataConsistencyComponent,
            },
            {
                path: 'signature_verification/:app_id/:cust_id',
                component: SignatureVerificationComponent,
            },
            {
                path: 'financial_analyser/:app_id/:cust_id',
                component: FinancialAnalyserComponent,
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ApplicationRoutingModule {}
