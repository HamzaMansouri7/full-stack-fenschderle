import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SetLanguage } from 'src/state/ui.actions';
import { UIState } from 'src/state/ui.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Select(UIState.language) language$: Observable<string>;

  constructor(private translate: TranslateService,
              private store:Store) { 
    translate.setDefaultLang('de');
    translate.use('de');
  }

  ngOnInit(): void {
  }

  changeLanguage(langId:any) {
    this.store.dispatch(new SetLanguage({language: langId}));
  }
}
