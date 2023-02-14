import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'gluuCurrency'
})
export class CurrencyPipe implements PipeTransform {
  currencyFormatters: any;

  constructor() {
    const getCurrencyFormatter = currency =>
      new Intl.NumberFormat('en-US', {
        style: 'currency',
        currencyDisplay: 'code',
        currency,
      });
    this.currencyFormatters = {
      'EUR': getCurrencyFormatter('EUR'),
      'USD': getCurrencyFormatter('USD'),
      'DKK': getCurrencyFormatter('DKK'),
    };
  }

  transform(value: any, ...args: any[]): any {
    const nValue = typeof value === 'string'
      ? Number.parseFloat(value)
      : value;
    const [currency] = args;
    return this.currencyFormatters[currency].format(nValue)
      .replace(/,/g, '.')
      .replace(/\.(\d{2})$/, ',$1')
      .replace('-', '– ');
  }

}
