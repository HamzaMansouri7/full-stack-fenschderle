export class SetLanguage {
  static readonly type = '[UI] SetLanguage';

  constructor(public payload: { language: string }) {
  }
}