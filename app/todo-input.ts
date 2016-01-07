import {Component} from 'angular2/core';
import {TodoService} from './todo-service';

@Component({
	selector: 'todo-input',
	template: `<div>
	<form (submit)="onSubmit()">
		<input type="text" [(ngModel)]="todoModel">
	</form>
	</div>`
})

export class TodoInput{
	todoModel;
	
	constructor(public _todoService: TodoService){}
	
	onSubmit(value){
		this._todoService.todos.push(this.todoModel);
		console.log(this._todoService.todos);
	}
}