import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todo.actios';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {

  checkToggleAll!: FormControl;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.checkToggleAll = new FormControl()
    this.checkToggleAll.valueChanges.subscribe(value => {
      this.store.dispatch(actions.toggleAllTodos({value}))
    })
  }

}
