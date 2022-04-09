import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as actions from './language.actions';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {

  languageSelected!: FormControl

  constructor(private store: Store<AppState>, private translate: TranslateService) {
    this.languageSelected = new FormControl('es', Validators.required);
  }


  ngOnInit(): void {

    this.store.select('language').subscribe(language => {
      this.translate.setDefaultLang(language);

      this.translate.use(language);
    })

    this.languageSelected.valueChanges.subscribe(value => {
      this.store.dispatch(actions.changeLanguage({language: value}))



    })

  }



}
