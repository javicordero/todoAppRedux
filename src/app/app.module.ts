import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'

import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { todoReducer } from './todos/todo.reducer'
import { filterReducer } from './todos/filter/filter.reducer'
import { languageReducer } from './language-selector/language.reducer'

import { TodoModule } from './todos/todo.module'
import { FooterComponent } from './footer/footer.component'

import { environment } from 'src/environments/environment'

import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'

import { HttpClientModule, HttpClient } from '@angular/common/http'
import { LanguageSelectorModule } from './language-selector/language-selector.module'

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http)
}

@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [
    BrowserModule,
    TodoModule,
    LanguageSelectorModule,
    StoreModule.forRoot({ todos: todoReducer, filter: filterReducer, language: languageReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true // Pauses recording actions and state changes when the extension window is not open
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'es'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
