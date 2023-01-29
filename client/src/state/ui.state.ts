import {Injectable} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {State, Action, StateContext, Selector, NgxsOnInit, Store} from '@ngxs/store';
import { SetLanguage} from './ui.actions';
import * as moment from 'moment';
import 'moment/locale/de';
import 'moment/locale/da';


export interface UIStateModel {
  language?: string | undefined;
  showDrawer?: boolean;
}



@State<UIStateModel>({
  name: 'ui',
  defaults : {}
})
@Injectable()
export class UIState implements NgxsOnInit {
  constructor(private store: Store,
              private translate: TranslateService,) {
  }

  @Selector()
  static language(state: UIStateModel): string {
    return state.language || 'de';
  }


  ngxsOnInit({getState, dispatch}: StateContext<UIStateModel>) {
    const browserLang = this.translate.getBrowserLang() || 'de';
    console.log('browser language:', browserLang);
    this.translate.setDefaultLang('en');
    moment.locale('en');
    moment.updateLocale('en', {week: {dow: 1, doy: 4}});
    const {language} = getState();
    if (!language){
      const supportedLang = ['en', 'de'];
      supportedLang.includes(browserLang) ? dispatch(new SetLanguage({language: browserLang}))
                                          : dispatch(new SetLanguage({language: 'en'}));
    }else{
      dispatch(new SetLanguage({language}));
    }
  }



  @Action(SetLanguage)
  setLanguage({getState, patchState}: StateContext<UIStateModel>,
              {payload: {language}}: SetLanguage) {
    this.translate.use(language);
    moment.locale(language);
    patchState({language});
  }

}