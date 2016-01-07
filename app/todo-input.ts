import {Component} from 'angular2/core';

@Component({
	selector: 'todo-input',
	template: `<div>
	<input type="text" #myInput>
	<button (click)="onClick($event, myInput.value)">Click me</button>
	</div>`
})

export class TodoInput{
	onClick(event, value){
		console.log(event, value);
	}
}