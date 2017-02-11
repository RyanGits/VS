import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputHint = 'What needs to be done?';
  todos: any[] = [];
  todo: string;
  add(item: HTMLInputElement) {
    console.log(item.value);
    this.todos.push({
      value: item.value,
      done: false
    });
    item.value = '';
  }
  clearcompleted(){
    this.todos = this.todos.filter(v =>!v.done);
  }
}
