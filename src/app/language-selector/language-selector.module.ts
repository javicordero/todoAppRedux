import { LanguageSelectorComponent } from './language-selector.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    LanguageSelectorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule.forChild({
      extend: true,
      }),
    HttpClientModule
  ],
  exports:[
    LanguageSelectorComponent
  ]
})
export class LanguageSelectorModule { }
