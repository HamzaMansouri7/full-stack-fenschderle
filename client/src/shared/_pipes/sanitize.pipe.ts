import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';


@Pipe({
  name: 'sanitize'
})
export class SanitizePipe implements PipeTransform {

  constructor(private ds: DomSanitizer) {
  }

  transform(value: any, type: string, ...rest: any[]): SafeHtml {
    if (type === 'html') {
      return this.ds.bypassSecurityTrustHtml(value);
    }
    return null;
  }

}
