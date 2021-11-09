import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from '../../environments/environment'
import { Globals } from '../globals';

@Injectable()
export class ApplicationService {
  appStep: any;
  public org_id = sessionStorage.getItem('org_id');
  constructor(
    private http: HttpClient,
    public globals: Globals) { }


  GetAlltheSteps(application_id, applied_for_user_id) {
    console.log("this get called")
    const headers = this.globals.getHeaderData();
    const body = this.globals.encryptFormData({ application_id: String(application_id), cust_id: applied_for_user_id, org_id: this.org_id,'role_code':this.globals.decryptSensitiveData(sessionStorage.getItem('role_code')) });
    return this.http.post(environment.apiUrl + 'getAppLeftSideDtls/', body,{headers});
  }
  getAppdataVerify(application_id, applied_for_user_id) {
    const headers = this.globals.getHeaderData();
    const body = this.globals.encryptFormData({ application_id: String(application_id), cust_id: applied_for_user_id, org_id: this.org_id });
    return this.http.post(environment.apiUrl + 'getAppDataVerifyAng/', body,{headers});
  }
}
