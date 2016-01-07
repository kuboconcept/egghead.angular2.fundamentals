import {Component} from 'angular2/core';
import {TodoService} from './todo-service';

@Component({
	selector: 'todo-list',
	template: `<div>
		<ul>
			<li *ngFor="#todo of _todoService.todos">
				{{todo}}
			</li>
		</ul>
	</div>`
})

export class TodoList{
	constructor(public _todoService:TodoService){}
}