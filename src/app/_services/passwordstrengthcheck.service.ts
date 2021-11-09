import { Injectable } from '@angular/core';

@Injectable()
export class PasswordStrengthCheckService {
    // private passwordToCheck: string;
    // private barLabel: string;  

    private colors = ['#F00', '#F90', '#FF0', '#9F0', '#0F0'];  

    constructor() {}

    private static measureStrength(pass: string) {  
        console.log("HEMA : PasswordStrengthCheckService : ", pass);
        let score = 0;  
        // award every unique letter until 5 repetitions 
        let letters = {};   
        for (let i = 0; i< pass.length; i++) { 
            letters[pass[i]] = (letters[pass[i]] || 0) + 1;  
            score += 5.0 / letters[pass[i]]; 
        }  
        // bonus points for mixing it up
        let variations = {  
            digits: /\d/.test(pass),
            lower: /[a-z]/.test(pass),
            upper: /[A-Z]/.test(pass),
            nonWords: /\W/.test(pass),
            symbol: /[!@#$%^&]/.test(pass)
        }; 

        let variationCount = 0;  
        for (let check in variations) {
            variationCount += (variations[check]) ? 1 : 0; 
        } 
        score += (variationCount - 1) * 10;
        console.log("HEMA : password strength : ", Math.trunc(score));
        return Math.trunc(score); 
    }

    private getColor(score: number) {
        console.log("HEMA : getColor : ", score);
        let idx = 0; 
        if (score > 90) { 
            idx = 4; 
        } else if (score > 70) { 
            idx = 3;  
        } else if (score >= 40) {
            idx = 2; 
        } else if (score >= 20) { 
            idx = 1;
        }
        console.log("HEMA : bar colors : idx : color hex value ", (idx + 1), this.colors[idx]);
        return {  
            idx: idx + 1,
            col: this.colors[idx] 
        }; 
    }

    passwordStrengthCheck (pass: string) {
        // console.log("HEMA : passwordCheck : ", pass);
        let scr = PasswordStrengthCheckService.measureStrength(pass);
        let barColors = {};
        barColors = this.getColor(scr);
        return barColors;
    }
    
}