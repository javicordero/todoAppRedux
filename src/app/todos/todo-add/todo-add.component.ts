import { Component, OnInit } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'
import { AppState } from 'src/app/app.reducer'
import * as actions from '../todo.actios'

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {
  textInput: FormControl

  constructor(private store: Store<AppState>) {
    this.textInput = new FormControl('', Validators.required)
  }

  ngOnInit(): void {}

  addTodo(): void {
    if (this.textInput.invalid) return
    this.store.dispatch(actions.addTodo({ texto: this.textInput.value }))

    this.textInput.reset()
  }
}
