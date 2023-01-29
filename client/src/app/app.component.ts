import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SetLanguage } from 'src/state/ui.actions';
import { UIState } from 'src/state/ui.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Select(UIState.language) language$: Observable<string>;

  constructor(private translate: TranslateService,
              private store:Store) {
    translate.setDefaultLang('de');
    translate.use('de');
  }


  changeLanguage(langId:any) {
    this.store.dispatch(new SetLanguage({language: langId}));
  }

}
