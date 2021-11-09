import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyformat'
})
export class CurrencyFormat implements PipeTransform {

    transform(input: any, args?: any): any {
        var exp, rounded, suffixes = ['Thousand', 'Lacs', 'Crore'];
        let i = 0;
        if (Number.isNaN(input)) {
            return null;
        }

        if (input < 1000) {
            return input + ' ' +  suffixes[i];
        }
        input = input / 1000;
        while (input > 100) {
            input = input / 100;
            i++;
        }
        return '₹​' + input.toFixed(2) + ' ' + suffixes[i];
    }
}