import { Component } from '@angular/core';
import { Todos } from './models/Todos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



public status:string = "";
public task :string=""; 
public searchTask=''; 
todos: Todos[] = []; 
results: Todos[] = []; 


ngOnInit():void{}
constructor(){}

//push item to list
public onSave(){

  if(this.task != '')
    this.todos.push({
      index : 0,
      content:this.task,
      progress : false 
    });
    this.results.push({
      index : 0,
      content:this.task,
      progress : false 
    });

} 

//mark with green the finshed task 
public finished(id : number){
  this.todos.map((v,i)=> {
    if(i == id){
      v.progress = true; 
    }

  })

}

//delete from list 
public delete(id : number ){
  this.todos = this.todos.filter((v,i)=> i!=id);  
}
// get task 


public getTask(){
  this.results = this.todos.filter((task)=>task.content.includes(this.searchTask));

}


}
