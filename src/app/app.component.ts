import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  taskArr = [];
  value : any
  

  submitVal(val:any){
    this.value = val
    localStorage.setItem('task', JSON.stringify(this.value))
    const input = document.getElementById('input') as HTMLInputElement
    input.value = " "
    
    debugger
    const data = localStorage.getItem('task');
    if (data != null){
      const myData = JSON.parse(data);
      myData.push(this.taskArr)
    }else{
      this.taskArr = [];
    }
    console.log(this.taskArr)
  }



}
