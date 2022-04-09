import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as filterActions from '../filter/filter.actions';
import * as todoActions from '../todo.actios';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  totalTodos: number = 0
  filterList: string[] = ['all',  'active', 'completed']
  filter!: string;


  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('todos')
      .subscribe(todoList => this.totalTodos = todoList.filter((todo => !todo.completado)).length)
    this.store.select('filter')
      .subscribe(filter =>{ this.filter = filter})
  }

  changeFilter(filter: string): void{
    this.store.dispatch(filterActions.changeFilter({filter}))
  }

  clearCompleted(): void{
    this.store.dispatch(todoActions.clearCompleted())
  }

}
