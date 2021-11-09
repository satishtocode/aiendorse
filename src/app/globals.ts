import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from '../environments/environment';
import * as CryptoJS from 'crypto-js';
var headers = new HttpHeaders();
@Injectable()
export class Globals {
    public environment = environment;

    public encryptSecretKey = CryptoJS.enc.Utf8.parse('ikolpedhu#ju76hyHUjiesh789@#$hyn');
    public iv = CryptoJS.enc.Base64.parse('1234567890123456');

    //https://stackoverflow.com/questions/11567290/cryptojs-and-pycrypto-working-together
    // https://stackoverflow.com/questions/53478860/how-to-encrypt-and-decrypt-in-angular-6/53478922

    constructor(
        private http: HttpClient,
        private router: Router,
    ) {
     }
     logout(){
        localStorage.clear();
        sessionStorage.clear();
    }
    encryptData(data){
        if(this.environment.url_encrypt=='YES'){
            try {
                return btoa(data);
                // return CryptoJS.AES.encrypt(JSON.stringify(data), this.encryptSecretKey).toString();
            } catch (e) {
                console.log(e);
            }
        }else{
            return data
        }
    }
    decryptData(data){
        if(this.environment.url_encrypt=='YES'){
            try {
                // const bytes = CryptoJS.AES.decrypt(data, this.encryptSecretKey);
                // if (bytes.toString()) {
                //     return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
                // }
                // return data.toString();
                return atob(data);
            } catch (e) {
                console.log(e);
            }
        }else{
            return data
        }
    }

    encryptFormData(data){
        // console.log("ORG : ",data)
        const iv = CryptoJS.lib.WordArray.random(16);
        if(this.environment.payload_encrypt=='YES'){
            var encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), this.encryptSecretKey,{
                keySize: 128 / 8,
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
            return {'inputData':iv.concat(encrypted.ciphertext).toString(CryptoJS.enc.Base64)};
        }else{
        return data;
        }
      }
    
    decryptFormData(data){
        if(this.environment.payload_encrypt=='YES'){
            var ciphertext:any = CryptoJS.enc.Base64.parse(data['outputData']);
            var iv = ciphertext.clone();
            iv.sigBytes = 16;
            iv.clamp();
            ciphertext.words.splice(0, 4); // delete 4 words = 16 bytes
            ciphertext.sigBytes -= 16;
            var text: any = {ciphertext : ciphertext};
            const decrypted :any = CryptoJS.AES.decrypt(text, this.encryptSecretKey, {
                iv: iv
            });
            return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
        }else{
            return data;
        }
    }
    getHeaderData(){
        headers = headers.set('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
        return headers;
    }
    encryptSensitiveData(data){
            try {
                return btoa(data);
            } catch (e) {
                console.log(e);
            }
    }
    decryptSensitiveData(data){
            try {
                return atob(data);
            } catch (e) {
                console.log(e);
            }
    }

    PermissionByModule(module_name){
        try {
            console.log('module_name',module_name)
            let module_permission : any = JSON.parse(this.decryptSensitiveData(sessionStorage.getItem('permission')));
            if( module_permission.indexOf(module_name) > -1){
                console.log('PERMISSION ACCESS')
            }else{
                this.router.navigate(['dashboard']);
            }
        } catch (e) {
            console.log('PERMISSION DENIED');
            return false;
        }
    }

    PermissionByAction(module_name){
        try {
            this.PermissionByModule(module_name);
            let module_permission : any = JSON.parse(this.decryptSensitiveData(sessionStorage.getItem('action_permission')));
            console.log('Permission : '+module_name+' : '+module_permission[module_name])
            return module_permission[module_name];
        } catch (e) {
            console.log('PERMISSION DENIED');
            return false;
        }
    }
    
    getStepNamefromCode(step_code) {
        let step_code_values = {
            'SUM': 'KYC Summary',
            'KYV': 'KYC Summary',     // <- HAVE TO CHANGE THE CODE
            'VCS': 'Video call Summary',
            'LCV': 'Location Verification',
            'DOC': 'Document Collection',
            'DCV': 'Document Validation',
            'IDV': 'Identity Verification',
            'DCN': 'Data Consistency',
            'SGV': 'Signature Verification',
            'BLC': 'Blacklist Check',
            'CWA': 'Credit Worth Analysis',
            'FIA': 'Financial Analyser',
            'LGA': 'Legal Assessment',
            'CRD': 'Credit Decision',
            'CXC': 'Customer Consent',
            'ACC': 'Account Creation',
            'DSB': 'Disbursal',
            'APD': 'Application Decision',
        }
        return step_code_values[step_code];
    }
}
