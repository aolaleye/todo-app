import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app'

  todoArray=[]

  addTodo(value) {
    this.todoArray.push(value)
    console.log(this.todoArray)
  }

  deleteItem(todo){
    for (let i=0; i <= this.todoArray.length; i++) {
      if (todo == this.todoArray[i]) {
        this.todoArray.splice(i,1);
      }
    }
  }

  todoSubmit(value:any, event: Event) {
    event.preventDefault();
    if (value!== "") {
      // console.log(value)
      this.todoArray.push(value)
    } else {
      alert("Please fill out field before submitting")
    }
  }

}
