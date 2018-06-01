import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app'

  todoArray=[]

  searchValue:string = '';

  addTodo(value) {
    this.todoArray.push(value)
    console.log(this.todoArray)
    this.searchValue = null;
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
      this.todoArray.push(value)
      console.log(this.todoArray)
      this.searchValue = null;
    } else {
      alert("Please fill out field before submitting")
    }
  }

}
