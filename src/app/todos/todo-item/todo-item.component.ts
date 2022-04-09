import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'
import { AppState } from 'src/app/app.reducer'
import { Todo } from '../models/todo.model'
import * as actions from '../todo.actios'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = new Todo('')
  @ViewChild('inputText') txtInputText!: ElementRef

  inputCompletado!: FormControl
  inputTexto!: FormControl

  editing: boolean = false

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.inputCompletado = new FormControl(this.todo.completado)
    this.inputTexto = new FormControl(this.todo.texto, Validators.required)
    this.inputCompletado.valueChanges.subscribe((value) => {
      this.store.dispatch(actions.toggleTodo({ id: this.todo.id }))
    })
  }

  deleteTodo(): void {
    this.store.dispatch(actions.deleteTodo({ id: this.todo.id }))
  }

  edit(): void {
    if (this.todo.completado) return // Can't edit if completed

    this.editing = true
    setTimeout(() => {
      this.txtInputText.nativeElement.select()
    }, 1)
  }

  saveEdit(): void {
    const id = this.todo.id
    const texto = this.inputTexto.valid ? this.inputTexto.value : this.todo.texto

    this.store.dispatch(actions.editTodo({ id, texto }))
    this.editing = false
  }
}
