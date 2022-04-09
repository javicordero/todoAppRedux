import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TodoAddComponent } from './todo-add/todo-add.component'
import { TodoFooterComponent } from './todo-footer/todo-footer.component'
import { TodoItemComponent } from './todo-item/todo-item.component'
import { TodoListComponent } from './todo-list/todo-list.component'
import { TodoPageComponent } from './todo-page/todo-page.component'
import { ReactiveFormsModule } from '@angular/forms'
import { FilterPipe } from './filter/filter.pipe'
import { TranslateModule } from '@ngx-translate/core'

@NgModule({
  declarations: [
    TodoAddComponent,
    TodoFooterComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoPageComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule.forChild({
      extend: true,
    }),
    HttpClientModule,
  ],
  exports: [TodoPageComponent],
})
export class TodoModule {}
