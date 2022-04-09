import { Pipe, PipeTransform } from '@angular/core'
import { Todo } from '../models/todo.model'

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: Todo[], filter: string): Todo[] {
    if (filter === 'completed') return value.filter((todo) => todo.completado)

    if (filter === 'active') return value.filter((todo) => !todo.completado)

    return value
  }
}
